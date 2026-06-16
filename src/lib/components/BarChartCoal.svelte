<script>
  import * as d3 from 'd3';
  import { dat } from '../data/transitionData.js';

  const W = 560, H = 360, ml = 110, mr = 85, mt = 46, mb = 44;
  const iw = W - ml - mr, ih = H - mt - mb;

  const x = d3.scaleLinear().domain([0, 4700]).range([0, iw]);
  const y = d3.scaleBand().domain(dat.coal.map(d => d.n)).range([0, ih]).padding(0.42);

  let activeIdx = $state(null);
</script>

<svg viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid meet">
  <g transform="translate({ml}, {mt})">
    {#each [1000, 2000, 3000, 4000] as v}
      <line x1={x(v)} x2={x(v)} y1="0" y2={ih} stroke="var(--grid)" />
      <text x={x(v)} y={ih + 18} text-anchor="middle" font-size="10" font-weight="600" fill="var(--text-t)">{v/1000}B Ton</text>
    {/each}

    {#each dat.coal as d, i}
      <g
        onmouseenter={() => activeIdx = i}
        onmouseleave={() => activeIdx = null}
        style="cursor: pointer;"
      >
        <rect x="-100" y={y(d.n) - 4} width={iw + 150} height={y.bandwidth() + 8} fill="transparent" />
        
        <rect x="0" y={y(d.n)} width={iw} height={y.bandwidth()} fill="var(--bg-s)" rx="5" />
        <rect 
          x="0" 
          y={y(d.n)} 
          width={x(d.v)} 
          height={y.bandwidth()} 
          fill={d.hi ? 'var(--green)' : 'var(--grn-lt)'} 
          rx="5"
          style="transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.2s; transform: activeIdx === i ? 'scaleY(1.1)' : 'none'; opacity: activeIdx === null || activeIdx === i ? 1 : 0.5;"
        />
        <text 
          x="-14" 
          y={y(d.n) + y.bandwidth()/2} 
          dy="0.35em" 
          text-anchor="end" 
          font-size="13" 
          font-weight={d.hi || activeIdx === i ? '700' : '500'} 
          fill={d.hi ? 'var(--text-p)' : 'var(--text-s)'}
        >
          {d.n}
        </text>
        <text 
          x={x(d.v) + 12} 
          y={y(d.n) + y.bandwidth()/2} 
          dy="0.35em" 
          font-size="12.5" 
          font-weight={activeIdx === i ? '700' : '600'} 
          fill="var(--text-p)"
        >
          {d.v.toLocaleString('id-ID')} Mt
        </text>
      </g>
    {/each}
  </g>
</svg>