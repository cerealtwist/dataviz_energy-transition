<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { steps, stepLabels } from '$lib/data/transitionData.js';
  
  import DonutChart from '$lib/components/DonutChart.svelte';
  import BarChartCoal from '$lib/components/BarChartCoal.svelte';
  import BarChartIkt from '$lib/components/BarChartIkt.svelte';
  import BarChartSpklu from '$lib/components/BarChartSpklu.svelte';

  let curStep = $state(0);

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          curStep = +e.target.dataset.step;
        }
      });
    }, {
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    });

    document.querySelectorAll('.step').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  });
</script>

<div id="story">
  <div class="navigation-rail">
    {#each steps as _, i}
      <div class="nav-dot" class:active={curStep === i}></div>
    {/each}
  </div>

  <div class="opening">
    <p class="kicker">SATRIA DATA 2026 · Statistics Infographic Competition</p>
    <h1 class="big-title">Dibalik Bayang-Bayang Transisi</h1>
    <p class="lead">Menelusuri jejak manfaat dan bayang-bayang yang ditinggalkan transisi energi Indonesia — serta siapa yang sesungguhnya menanggung bebannya.</p>
    <p class="scroll-hint">Gulir ke bawah untuk memulai narasi</p>
  </div>

  <div class="scrolly">
    <div class="sticky-g">
      <p class="chart-label">{stepLabels[curStep]}</p>
      
      <div class="chart-wrapper">
        {#if curStep === 0}
          <div class="canvas-layer" in:fade={{ duration: 400, easing: cubicOut }} out:fade={{ duration: 250 }}>
            <DonutChart />
          </div>
        {:else if curStep === 1 || curStep === 2}
          <div class="canvas-layer" in:fade={{ duration: 400, easing: cubicOut }} out:fade={{ duration: 250 }}>
            <BarChartCoal />
          </div>
        {:else if curStep === 3 || curStep === 4}
          <div class="canvas-layer display-text" in:fade={{ duration: 400, easing: cubicOut }} out:fade={{ duration: 250 }}>
            <svg viewBox="0 0 560 360" preserveAspectRatio="xMidYMid meet">
              <text x="280" y="95" text-anchor="middle" font-size="38" font-weight="700" fill="var(--text-p)">1,61 juta</text>
              <text x="280" y="125" text-anchor="middle" font-size="12" fill="var(--text-s)">pekerjaan di sektor batubara terancam</text>
              <text x="280" y="145" text-anchor="middle" font-size="10" fill="var(--text-t)">Analisis IRIO-BPS · IISD, 2025</text>
              <line x1="200" x2="360" y1="170" y2="170" stroke="var(--color-border-secondary)" stroke-width="0.75" />
              <text x="280" y="210" text-anchor="middle" font-size="28" font-weight="700" fill="var(--text-s)">+ 1,5 juta</text>
              <text x="280" y="235" text-anchor="middle" font-size="12" fill="var(--text-s)">pekerjaan otomotif konvensional terancam</text>
              <line x1="200" x2="360" y1="265" y2="265" stroke="var(--color-border-secondary)" stroke-width="0.75" />
              <text x="280" y="300" text-anchor="middle" font-size="15" font-weight="700" fill="#A32D2D">> 3 juta lapangan kerja berisiko</text>
            </svg>
          </div>
        {:else if curStep === 5}
          <div class="canvas-layer" in:fade={{ duration: 400, easing: cubicOut }} out:fade={{ duration: 250 }}>
            <BarChartIkt width={560} />
          </div>
        {:else if curStep === 6 || curStep === 7}
          <div class="canvas-layer" in:fade={{ duration: 400, easing: cubicOut }} out:fade={{ duration: 250 }}>
            <BarChartSpklu width={560} />
          </div>
        {/if}
      </div>
    </div>

    {#each steps as step, i}
      <div class="step" data-step={i}>
        <div class="sc" class:active={curStep === i}>
          <p class="n">{step.kicker}</p>
          <p>{@html step.text.replace(/(\d+[,.]?\d*%?|\d+\s?juta|Kalimantan Timur|Jawa)/g, '<span class="em">$1</span>')}</p>
        </div>
      </div>
    {/each}
  </div>

  <div class="prose">
    <h2>Indeks Kerentanan Transisi per Provinsi</h2>
    <p class="sub">Normalisasi min-max pada dua indikator: kontraksi PDRB (%) dan proyeksi kehilangan tenaga kerja. Analisis IRIO berbasis Tabel I-O BPS 2021 & 2023 (IISD, November 2025).</p>
  </div>
  <div class="cw"><BarChartIkt /></div>

  <div class="prose">
    <h2>Target SPKLU 2030 per Wilayah</h2>
    <p class="sub">Kepmen ESDM No. 24K/TL.01/MEM.L/2025 tentang Roadmap SPKLU 2025–2030. Total nasional: 62.918 unit.</p>
  </div>
  <div class="cw"><BarChartSpklu /></div>

  <div class="sol">
    <div class="inn">
      <h2>Dari bayang-bayang menuju cahaya</h2>
      <p class="sub">Tiga pilar transisi energi yang berkeadilan (just transition)</p>
      <div class="pils">
        <div class="pil">
          <p class="pt">Reskilling & Jaring Sosial</p>
          <p class="pp">Redesain Kartu Prakerja untuk green skills. Perluas BPJS-JKP ke pekerja informal. Transition Fund dari redistribusi DBH-SDA batubara.</p>
        </div>
        <div class="pil">
          <p class="pt">Hilirisasi Nikel → Baterai</p>
          <p class="pp">Tingkatkan porsi nikel untuk baterai: 17% → 30% pada 2028. Bangun green jobs di Sulawesi & Maluku, bukan hanya di Jawa.</p>
        </div>
        <div class="pil">
          <p class="pt">Pemerataan Infrastruktur</p>
          <p class="pp">Tegakkan rasio 5:1 & 12:1 SPKLU. Stimulus hijau ke 5 provinsi IKT tertinggi. Sinkronisasi RUED daerah dengan insentif EBT nasional.</p>
        </div>
      </div>
      <div class="poff">
        <p class="pl">Proyeksi Skenario 3 — Green Sector Stimulus · IISD, 2025</p>
        <p class="pn">1,61 juta pekerjaan hilang → 8,46 juta pekerjaan hijau baru</p>
        <p class="ps">Rasio 1 : 5,2 — setiap 1 pekerjaan tambang yang hilang, 5 pekerjaan hijau bisa tercipta dengan stimulus yang tepat</p>
      </div>
    </div>
  </div>

  <div class="srcs">
    <strong>Sumber data:</strong> IISD (Nov 2025) Coal Transition Impacts Indonesia (IRIO-BPS) · Kepmen ESDM No. 24K/2025 Roadmap SPKLU 2025-2030 · CREA-CELIOS (Apr 2026) Nikel Indonesia · Analisis Strategis Transisi Industri Otomotif Indonesia (2025) · Kementerian ESDM RI & CNBC Indonesia (RUPTL 2025-2034)
  </div>
</div>

<style>
  .opening { padding: 4rem 2rem 2rem; max-width: 600px; margin: 0 auto; text-align: center; }
  .kicker { font-size: 11px; letter-spacing: .15em; text-transform: uppercase; color: var(--color-text-tertiary); margin-bottom: .8rem; }
  .big-title { font-size: 36px; font-weight: 700; line-height: 1.2; margin: .5rem 0; color: var(--text-p); }
  .lead { font-size: 15px; line-height: 1.7; color: var(--color-text-secondary); margin-top: 1rem; }
  .scroll-hint { font-size: 11px; color: var(--color-text-tertiary); margin-top: 2rem; letter-spacing: .05em; }
  
  .navigation-rail { position: fixed; left: 2.5rem; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 12px; z-index: 10; }
  .nav-dot { width: 6px; height: 6px; border-radius: 50%; background-color: var(--color-border-secondary); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
  .nav-dot.active { background-color: var(--green); transform: scale(1.6); }

  .scrolly { position: relative; }
  .sticky-g { position: sticky; top: 0; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: var(--color-background-primary); z-index: 1; overflow: hidden; }
  .chart-wrapper { width: 100%; max-width: 560px; height: 360px; position: relative; }
  .canvas-layer { position: absolute; width: 100%; height: 100%; top: 0; left: 0; display: flex; align-items: center; justify-content: center; }
  .chart-label { font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--color-text-tertiary); margin-bottom: 1.5rem; text-align: center; font-weight: 500; z-index: 2; }
  
  .step { height: 100vh; display: flex; align-items: center; padding: 0 2rem; position: relative; z-index: 2; pointer-events: none; max-width: 1100px; margin: 0 auto; }
  .sc { background: rgba(247, 249, 246, 0.78); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid var(--color-border-tertiary); border-radius: var(--border-radius-lg); padding: 1.5rem; width: 320px; pointer-events: all; transition: all 0.4s ease; opacity: 0.25; transform: translateY(10px); }
  .sc.active { opacity: 1; transform: translateY(0); box-shadow: 0 15px 35px rgba(0,0,0,0.04); border-color: var(--color-border-secondary); }
  .sc .n { font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: var(--color-text-tertiary); margin-bottom: .6rem; font-weight: 500; }
  .sc p { font-size: 13.5px; line-height: 1.7; color: var(--color-text-primary); }
  :global(.sc .em) { font-weight: 600; color: var(--green); }
  
  .prose { padding: 4rem 2rem 1rem; max-width: 650px; margin: 0 auto; text-align: center; }
  .prose h2 { font-size: 20px; font-weight: 600; margin-bottom: .5rem; color: var(--text-p); }
  .prose .sub { font-size: 12.5px; color: var(--color-text-secondary); line-height: 1.6; }
  .cw { padding: 1rem 2rem 3rem; max-width: 900px; margin: 0 auto; }
  
  .sol { background: var(--color-background-secondary); padding: 4rem 2rem; margin-top: 2rem; }
  .sol .inn { max-width: 750px; margin: 0 auto; }
  .sol h2 { font-size: 22px; font-weight: 600; margin-bottom: .5rem; text-align: center; }
  .sol .sub { font-size: 13px; color: var(--color-text-secondary); margin-bottom: 2.5rem; text-align: center; }
  .pils { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .pil { background: var(--color-background-primary); border: 1px solid var(--color-border-tertiary); border-radius: var(--border-radius-lg); padding: 1.5rem; transition: transform 0.3s ease; }
  .pil:hover { transform: translateY(-4px); }
  .pil .pt { font-size: 13px; font-weight: 600; margin-bottom: .6rem; color: var(--text-p); }
  .pil .pp { font-size: 11.5px; color: var(--color-text-secondary); line-height: 1.6; }
  
  .poff { margin-top: 2rem; background: #132b03; border-radius: var(--border-radius-lg); padding: 2rem; text-align: center; box-shadow: 0 10px 30px rgba(19,43,3,0.15); }
  .poff .pl { font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: #97C459; opacity: .8; margin-bottom: .6rem; }
  .poff .pn { font-size: 20px; font-weight: 600; color: #C0DD97; margin-bottom: .4rem; }
  .poff .ps { font-size: 12px; color: #97C459; opacity: 0.7; line-height: 1.5; }
  .srcs { padding: 2rem; font-size: 10.5px; color: var(--color-text-tertiary); line-height: 2; border-top: 1px solid var(--color-border-tertiary); text-align: center; max-width: 900px; margin: 0 auto; }
</style>