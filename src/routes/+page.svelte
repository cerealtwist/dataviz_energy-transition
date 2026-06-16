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
    <p class="kicker">Farand Diy Dat Mahazalfaa · Metode Visualisasi Data</p>
    <h1 class="big-title">Dibalik Bayang-Bayang Transisi</h1>
    <p class="lead">Menelusuri jejak manfaat dan bayang-bayang yang ditinggalkan transisi energi Indonesia. Siapa yang sesungguhnya menanggung bebannya?</p>
    <p class="scroll-hint">Scroll down to start.</p>
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
      <h2>Solusi dari bayang-bayang menuju Keadilan: Just Energy Transition</h2>
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
        <p class="ps">Setiap 1 pekerjaan tambang yang hilang, 5 pekerjaan hijau bisa tercipta dengan stimulus yang tepat</p>
      </div>
    </div>
  </div>

  <div class="srcs">
    <strong>Sumber data:</strong> IISD (Nov 2025) Coal Transition Impacts Indonesia (IRIO-BPS) · Kepmen ESDM No. 24K/2025 Roadmap SPKLU 2025-2030 · CREA-CELIOS (Apr 2026) Nikel Indonesia · Kementerian ESDM RI & CNBC Indonesia (RUPTL 2025-2034)
  </div>
</div>

<style>
  /* --- LAYOUT UTAMA & OPENING --- */
  .opening { 
    padding: 6rem 2rem 4rem; 
    max-width: 700px; 
    margin: 0 auto; 
    text-align: center; 
  }
  .kicker { 
    font-size: 11px; 
    letter-spacing: .15em; 
    text-transform: uppercase; 
    color: var(--color-text-tertiary); 
    margin-bottom: .8rem; 
    font-weight: 600;
  }
  .big-title { 
    font-size: 40px; 
    font-weight: 800; 
    line-height: 1.2; 
    margin: .5rem 0; 
    color: var(--text-p); 
    letter-spacing: -0.03em;
  }
  .lead { 
    font-size: 16px; 
    line-height: 1.7; 
    color: var(--color-text-secondary); 
    margin-top: 1.2rem; 
  }
  .scroll-hint { 
    font-size: 11px; 
    color: var(--color-text-tertiary); 
    margin-top: 2.5rem; 
    letter-spacing: .05em; 
    font-weight: 500;
  }
  
  /* --- NAVIGATION RAIL (INDIKATOR SAMPING MOBILE DEFAULT) --- */
  .navigation-rail { 
    position: fixed; 
    left: 1.5rem; 
    top: 50%; 
    transform: translateY(-50%); 
    display: flex; 
    flex-direction: column; 
    gap: 14px; 
    z-index: 10; 
  }
  .nav-dot { 
    width: 6px; 
    height: 6px; 
    border-radius: 50%; 
    background-color: var(--color-border-secondary); 
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
  }
  .nav-dot.active { 
    background-color: var(--green); 
    transform: scale(1.8); 
  }

  /* --- SCROLLYTELLING FRAMEWORK --- */
  .scrolly { 
    position: relative; 
    width: 100%;
  }
  .sticky-g { 
    position: sticky; 
    top: 0; 
    height: 100vh; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    background: transparent; 
    z-index: 1; 
    overflow: hidden; 
  }
  .chart-wrapper { 
    width: 100%; 
    max-width: 560px; 
    height: 360px; 
    position: relative; 
  }
  .canvas-layer { 
    position: absolute; 
    width: 100%; 
    height: 100%; 
    top: 0; 
    left: 0; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
  }
  .chart-label { 
    font-size: 11px; 
    letter-spacing: .12em; 
    text-transform: uppercase; 
    color: var(--color-text-tertiary); 
    margin-bottom: 1.5rem; 
    text-align: center; 
    font-weight: 600; 
    z-index: 2; 
  }
  
  .step { 
    height: 100vh; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    padding: 0 1.5rem; 
    position: relative; 
    z-index: 2; 
    pointer-events: none; 
  }
  
  .step:nth-of-type(1) {
    margin-top: -100vh;
  }

  .sc { 
    background: rgba(255, 255, 255, 0.88); 
    backdrop-filter: blur(16px); 
    -webkit-backdrop-filter: blur(16px); 
    border: 1px solid var(--color-border-tertiary); 
    border-radius: var(--border-radius-lg); 
    padding: 1.5rem; 
    width: 100%;
    max-width: 320px; 
    pointer-events: all; 
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); 
    opacity: 0.2; 
    transform: translateY(15px); 
  }
  .sc.active { 
    opacity: 1; 
    transform: translateY(0); 
    box-shadow: 0 20px 40px rgba(0,0,0,0.06); 
    border-color: var(--color-border-secondary); 
  }
  .sc .n { 
    font-size: 10px; 
    letter-spacing: .1em; 
    text-transform: uppercase; 
    color: var(--color-text-tertiary); 
    margin-bottom: .6rem; 
    font-weight: 600; 
  }
  .sc p { 
    font-size: 13.5px; 
    line-height: 1.7; 
    color: var(--color-text-primary); 
  }
  :global(.sc .em) { 
    font-weight: 700; 
    color: var(--green); 
  }
  
  /* --- LAYOUT PROSE & SECTION BAWAH --- */
  .prose { 
    padding: 5rem 2rem 1rem; 
    max-width: 650px; 
    margin: 0 auto; 
    text-align: center; 
  }
  .prose h2 { 
    font-size: 22px; 
    font-weight: 700; 
    margin-bottom: .5rem; 
    color: var(--text-p); 
    letter-spacing: -0.02em;
  }
  .prose .sub { 
    font-size: 13px; 
    color: var(--color-text-secondary); 
    line-height: 1.6; 
  }
  .cw { 
    padding: 1rem 2rem 4rem; 
    max-width: 900px; 
    margin: 0 auto; 
  }
  
  .sol { 
    background: var(--color-background-secondary); 
    padding: 5rem 2rem; 
    margin-top: 3rem; 
  }
  .sol .inn { 
    max-width: 800px; 
    margin: 0 auto; 
  }
  .sol h2 { 
    font-size: 24px; 
    font-weight: 700; 
    margin-bottom: .5rem; 
    text-align: center; 
    letter-spacing: -0.02em;
  }
  .sol .sub { 
    font-size: 13.5px; 
    color: var(--color-text-secondary); 
    margin-bottom: 3rem; 
    text-align: center; 
  }
  .pils { 
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px; 
  }
  .pil { 
    background: var(--color-background-primary); 
    border: 1px solid var(--color-border-tertiary); 
    border-radius: var(--border-radius-lg); 
    padding: 1.75rem; 
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
  }
  .pil:hover { 
    transform: translateY(-5px); 
    box-shadow: 0 15px 30px rgba(0,0,0,0.05);
    border-color: var(--color-border-secondary);
  }
  .pil .pt { 
    font-size: 14px; 
    font-weight: 700; 
    margin-bottom: .7rem; 
    color: var(--text-p); 
  }
  .pil .pp { 
    font-size: 12px; 
    color: var(--color-text-secondary); 
    line-height: 1.6; 
  }
  
  .poff { 
    margin-top: 3rem; 
    background: #112503; 
    border-radius: var(--border-radius-lg); 
    padding: 2.5rem 2rem; 
    text-align: center; 
    box-shadow: 0 15px 35px rgba(17,37,3,0.2); 
  }
  .poff .pl { 
    font-size: 10px; 
    letter-spacing: .15em; 
    text-transform: uppercase; 
    color: #97C459; 
    opacity: .8; 
    margin-bottom: .8rem; 
    font-weight: 600;
  }
  .poff .pn { 
    font-size: 24px; 
    font-weight: 700; 
    color: #C0DD97; 
    margin-bottom: .5rem; 
    letter-spacing: -0.02em;
  }
  .poff .ps { 
    font-size: 12.5px; 
    color: #97C459; 
    opacity: 0.75; 
    line-height: 1.6; 
  }
  .srcs { 
    padding: 3rem 2rem; 
    font-size: 11px; 
    color: var(--text-t); 
    line-height: 2; 
    border-top: 1px solid var(--color-border-tertiary); 
    text-align: center; 
    max-width: 900px; 
    margin: 0 auto; 
  }

  /* --- PERBAIKAN TOTAL DESKTOP LAYOUT (SPLIT SCREEN & ANTITABRAKAN) --- */
  @media (min-width: 1024px) {
    .scrolly {
      max-width: 1300px;
      margin: 0 auto;
    }

    /* Memaksa indikator navigasi samping terkunci dinamis di sisi luar kiri teks */
    .navigation-rail {
      left: calc((100vw - 1300px) / 2 + 1.5rem);
    }

    /* Mempersempit porsi grafik jadi 54% untuk memperlebar jalur aman tengah */
    .sticky-g {
      width: 54%;
      margin-left: auto;
    }

    .chart-wrapper {
      max-width: 100%;
      padding: 0 1rem;
    }

    /* Memperluas lajur teks jadi 46% dan menambah jarak aman dari sisi indikator */
    .step {
      width: 46%;
      justify-content: flex-start;
      padding-left: 4.5rem;
      padding-right: 0;
    }

    .sc {
      max-width: 330px;
      background: rgba(255, 255, 255, 0.92);
    }
  }

  /* Pengaman tambahan untuk layar desktop berukuran mepet (1024px - 1340px) */
  @media (min-width: 1024px) and (max-width: 1340px) {
    .navigation-rail {
      left: 1rem;
    }
    .step {
      padding-left: 3.5rem;
    }
  }

  /* --- HIGH-FIDELITY TEXTURE BACKDROP --- */
  #story {
    position: relative;
    min-height: 100vh;
    z-index: 1;
  }

  #story::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('/bg-texture.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.07; 
    z-index: -1; 
    pointer-events: none; 
    transition: opacity 0.3s ease;
  }

  @media (prefers-color-scheme: dark) {
    #story::before {
      opacity: 0.04; 
      filter: grayscale(100%) invert(100%);
    }
  }
</style>