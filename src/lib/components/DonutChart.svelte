<script>
  import * as d3 from 'd3';
  import { dat } from '../data/transitionData.js';

  const W = 560, H = 360;
  const cx = W / 2, cy = H / 2 + 5;

  const pie = d3.pie().value(d => d.v).sort(null)(dat.em);
  const arc = d3.arc().innerRadius(76).outerRadius(120);
  const arcHover = d3.arc().innerRadius(76).outerRadius(132); // Pelebaran radius aktif

  let hoveredIdx = $state(null);
</script>

<svg viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid meet" class="interactive-chart">
  <g transform="translate({cx}, {cy})">
    {#each pie as slice, i}
      <path 
        d={hoveredIdx === i ? arcHover(slice) : arc(slice)} 
        fill={slice.data.c} 
        stroke="var(--bg-p)" 
        stroke-width="3"
        style="transition: d 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.2s; opacity: hoveredIdx === null || hoveredIdx === i ? 1 : 0.35; cursor: pointer;"
        onmouseenter={() => hoveredIdx = i}
        onmouseleave={() => hoveredIdx = null}
      />
    {/each}
    <text y="-6" text-anchor="middle" font-size="32" font-weight="800" font-family="var(--font-sans)" fill="var(--text-p)">
      {hoveredIdx !== null ? dat.em[hoveredIdx].v + '%' : '62,5%'}
    </text>
    <text y="22" text-anchor="middle" font-size="12" font-weight="600" font-family="var(--font-sans)" fill="var(--text-s)">
      {hoveredIdx !== null ? dat.em[hoveredIdx].l : 'dari batu bara'}
    </text>
  </g>

  {#each dat.em as item, i}
    <g 
      transform="translate(24, {40 + i * 26})"
      style="cursor: pointer; opacity: hoveredIdx === null || hoveredIdx === i ? 1 : 0.35; transition: opacity 0.2s;"
      onmouseenter={() => hoveredIdx = i}
      onmouseleave={() => hoveredIdx = null}
    >
      <rect width="14" height="14" rx="4" fill={item.c} />
      <text x="24" y="11" font-size="12.5" font-weight={hoveredIdx === i ? '700' : '500'} font-family="var(--font-sans)" fill="var(--text-s)">
        {item.l} <tspan font-weight="700" fill="var(--text-p)">{item.v}%</tspan>
      </text>
    </g>
  {/each}
</svg>