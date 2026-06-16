<script>
  import * as d3 from 'd3';
  import { dat } from '../data/transitionData.js';

  let { width = 600 } = $props();
  
  const h = 215, mL = 185, mR = 90, dT = 16, mB = 22;
  const cih = h - dT - mB;

  let ciw = $derived(width - mL - mR);
  const tot = d3.sum(dat.spklu, d => d.v);
  let x = $derived(d3.scaleLinear().domain([0, 55000]).range([0, ciw]));
  
  const y = d3.scaleBand().domain(dat.spklu.map(d => d.r)).range([0, cih]).padding(0.35);
  let activeRow = $state(null);
</script>

<div bind:clientWidth={width}>
  <svg {width} height={h}>
    <g transform="translate({mL}, {dT})">
      {#each dat.spklu as d, i}
        <g
          onmouseenter={() => activeRow = i}
          onmouseleave={() => activeRow = null}
          style="cursor: pointer;"
        >
          <rect x="0" y={y(d.r)} width={ciw} height={y.bandwidth()} fill="var(--bg-s)" rx="5" />
          <rect 
            x="0" 
            y={y(d.r)} 
            width={x(d.v)} 
            height={y.bandwidth()} 
            fill={d.r === 'Pulau Jawa' ? 'var(--green)' : 'var(--grn-lt)'} 
            rx="5"
            style="opacity: activeRow === null || activeRow === i ? 1 : 0.4; transition: all 0.2s ease-in-out; transform: activeRow === i ? 'scaleY(1.05)' : 'none';"
          />
          <text 
            x="-12" 
            y={y(d.r) + y.bandwidth()/2} 
            dy="0.35em" 
            text-anchor="end" 
            font-size="12" 
            font-weight={d.r === 'Pulau Jawa' || activeRow === i ? '700' : '500'} 
            fill="var(--text-p)"
          >
            {d.r === 'Sulawesi, Maluku, Papua' ? 'Sul., Maluku, Papua' : d.r}
          </text>
          <text 
            x={x(d.v) + 10} 
            y={y(d.r) + y.bandwidth()/2} 
            dy="0.35em" 
            font-size="12" 
            font-weight={activeRow === i ? '700' : '600'}
            fill="var(--text-p)"
          >
            {d.v.toLocaleString('id-ID')} unit ({Math.round(d.v/tot*100)}%)
          </text>
        </g>
      {/each}
    </g>
  </svg>
</div>