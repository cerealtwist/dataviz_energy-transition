# Dibalik Bayang-Bayang Transisi: Cerita Data Interaktif Transisi Energi Indonesia

Repositori ini berisi kode sumber untuk karya cerita data interaktif (scrollytelling) yang diajukan dalam Statistics Infographic Competition (SIC) pada Satria Data 2026. Proyek ini memetakan paradoks spasial dan ketenagakerjaan dalam agenda transisi energi di Indonesia (Just Energy Transition).

## Link bisa diakses di: https://dataviz-energy-transition.vercel.app/

## Deskripsi Latar Belakang

Transisi menuju energi bersih menciptakan tantangan asimetris antarwilayah di Indonesia. Di satu sisi, wilayah hulu penghasil energi fosil seperti Kalimantan Timur dan Sumatera Selatan menghadapi risiko kehilangan ratusan ribu lapangan kerja akibat penghentian bertahap (phase-out) batubara. Di sisi lain, wilayah hilir seperti Pulau Jawa justru memanen sebagian besar investasi hijau, pabrik baterai, perakitan kendaraan listrik (EV), serta alokasi infrastruktur seperti SPKLU. 

Karya interaktif ini dirancang untuk memetakan ketimpangan tersebut secara objektif berbasis data, sekaligus menawarkan tiga pilar solusi transisi yang berkeadilan.

## Fitur Utama Aplikasi

1. Scrollytelling Sinkron: Narasi teks yang bergerak sensitif terhadap posisi gulir (scroll) pengguna, yang secara reaktif memicu transisi komponen grafik di latar belakang menggunakan Intersection Observer.
2. Unified Scrollytelling Canvas: Perpindahan antar-grafik berjalan mulus menggunakan efek crossfade asli Svelte 5 tanpa jeda rendering.
3. Komparasi Data Interaktif: Setiap grafik (Donut Chart Bauran Listrik, Bar Chart Produksi Global, Bar Chart IKT Provinsi, dan Target SPKLU) dilengkapi dengan hit-zone hover dan floating glassmorphism tooltip untuk melihat metrik secara presisi.
4. Desain Responsif Kontemporer: Antarmuka minimalis yang memanfaatkan tipografi Plus Jakarta Sans dengan optimasi ukuran grafik otomatis (responsive window resizing).

## Metodologi Statistik: Indeks Kerentanan Transisi (IKT)

Untuk mengukur tingkat kerentanan daerah hulu, proyek ini mengintegrasikan metode statistik eksplisit berupa Indeks Kerentanan Transisi (IKT) menggunakan normalisasi Min-Max Scaling dengan bobot berimbang:

IKT = (0.5 * Skor PDRB) + (0.5 * Skor Tenaga Kerja)

* Skor PDRB: Diambil dari proyeksi kontraksi output ekonomi jika tambang ditutup.
* Skor Tenaga Kerja: Diambil dari estimasi jumlah pemutusan hubungan kerja langsung dan tidak langsung.
* Skala Output: Berada pada rentang 0.00 (Relatif Tangguh) hingga 1.00 (Sangat Rentan).

## Struktur Direktori Proyek

```text
my-satria-data-viz/
├── src/
│   ├── lib/
│   │   ├── data/
│   │   │   └── transitionData.js       # Data kuantitatif & draf narasi langkah
│   │   └── components/
│   │       ├── DonutChart.svelte       # Visualisasi bauran listrik nasional
│   │       ├── BarChartCoal.svelte     # Visualisasi skala produksi global
│   │       ├── BarChartIkt.svelte      # Visualisasi indeks kerentanan provinsi
│   │       └── BarChartSpklu.svelte    # Visualisasi target sebaran SPKLU 2030
│   └── routes/
│       ├── +layout.svelte              # Pengaturan style global & tema warna
│       └── +page.svelte                # Konfigurasi scrollytelling & observer
├── package.json
└── svelte.config.js
