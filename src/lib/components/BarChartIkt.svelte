<script>
  import * as d3 from 'd3';
  import { dat } from '../data/transitionData.js';
  import { fade } from 'svelte/transition';

  let { width = 600 } = $props();
  
  // Perbaikan: Menaikkan h ke 290 dan mB ke 65 untuk memberikan ruang vertikal
  const h = 290, mL = 142, mR = 125, dT = 16, mB = 65;
  
  let ciw = $derived(width - mL - mR);
  let cih = h - dT - mB; // 290 - 16 - 65 = 209px
  let x = $derived(d3.scaleLinear().domain([0, 540000]).range([0, ciw]));
  
  const y = d3.scaleBand().domain(dat.prov.map(d => d.n)).range([0, cih]).padding(0.35);
  const cSc = d3.scaleLinear().domain([0, 0.5, 1]).range(['#C0DD97', '#FAC775', '#A32D2D']);

  let hoveredData = $state(null);
  let tooltipPos = $state({ x: 0, y: 0 });
  let containerEl = $state();

  function handleMouseMove(e, item) {
    if (!containerEl) return;
    
    const rect = containerEl.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const tooltipWidth = 230;
    const xOffset = mouseX + tooltipWidth + 20 > width ? -(tooltipWidth + 15) : 15;

    tooltipPos = {
      x: mouseX + xOffset,
      y: mouseY - 85
    };
    hoveredData = item;
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div bind:this={containerEl} bind:clientWidth={width} class="chart-container-rel" onmouseleave={() => hoveredData = null}>
  <svg {width} height={h}>
    <defs>
      <linearGradient id="pgr" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset="0%" stop-color="#C0DD97" />
        <stop offset="50%" stop-color="#FAC775" />
        <stop offset="100%" stop-color="#A32D2D" />
      </linearGradient>
    </defs>
    
    <g transform="translate({mL}, {dT})">
      {#each [100, 200, 300, 400, 500] as v}
        <line x1={x(v * 1000)} x2={x(v * 1000)} y1="0" y2={cih} stroke="var(--grid)" />
        <!-- Sumbu X angka aman di posisinya -->
        <text x={x(v * 1000)} y={cih + 14} text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--text-t)">{v}rb</text>
      {/each}

      {#each dat.prov as d}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <g onmousemove={(e) => handleMouseMove(e, d)} style="cursor: pointer;">
          <rect x="0" y={y(d.n)} width={ciw} height={y.bandwidth()} fill="var(--bg-s)" rx="5" />
          <rect 
            x="0" 
            y={y(d.n)} 
            width={x(d.jobs)} 
            height={y.bandwidth()} 
            fill={cSc(d.ikt)} 
            rx="5"
            style="opacity: hoveredData === null || hoveredData.n === d.n ? 1 : 0.4; transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);"
          />
          <text x="-12" y={y(d.n) + y.bandwidth()/2} dy="0.35em" text-anchor="end" font-size="12" fill="var(--text-p)">{d.s}</text>
          <text x={ciw + 10} y={y(d.n) + y.bandwidth()/2} dy="0.35em" font-size="11.5" font-weight="700" fill={cSc(d.ikt)}>
            IKT {d.ikt.toFixed(2)}
          </text>
        </g>
      {/each}
    </g>

  </svg>

  {#if hoveredData}
    <div class="glass-tooltip" style="left: {tooltipPos.x}px; top: {tooltipPos.y}px;" transition:fade={{ duration: 100 }}>
      <div class="tt-header">{hoveredData.n}</div>
      <div class="tt-body">
        <p>Hilang Pekerjaan: <span class="val">{hoveredData.jobs.toLocaleString('id-ID')} jiwa</span></p>
        <p>Guncangan Fiskal: <span class="val">-{hoveredData.gdp}% PDRB</span></p>
        <p>Lapangan Kerja EBT: <span class="val">+{hoveredData.gj.toLocaleString('id-ID')}</span></p>
      </div>
    </div>
  {/if}
</div>

<style>
  .chart-container-rel { position: relative; width: 100%; }
  .glass-tooltip { 
    position: absolute; 
    background: rgba(255, 255, 255, 0.9); 
    backdrop-filter: blur(12px); 
    -webkit-backdrop-filter: blur(12px); 
    border: 1px solid var(--color-border-secondary); 
    border-radius: 8px; 
    padding: 10px 14px; 
    width: 230px; 
    pointer-events: none; 
    z-index: 100; 
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); 
  }
  .tt-header { font-size: 12px; font-weight: 800; color: var(--color-text-primary); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.02em; }
  .tt-body p { font-size: 11.5px; color: var(--color-text-secondary); margin: 3px 0; display: flex; justify-content: space-between; }
  .tt-body .val { font-weight: 700; color: var(--color-text-primary); }
</style>