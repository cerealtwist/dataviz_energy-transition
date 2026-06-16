export const dat = {
  em: [
    { l: 'Batu Bara', v: 62.5, c: '#3B6D11' },
    { l: 'Gas Alam', v: 22.2, c: '#888780' },
    { l: 'Minyak', v: 9.7, c: '#B4B2A9' },
    { l: 'EBT', v: 5.6, c: '#3B6D11' }
  ],
  coal: [
    { n: 'China', v: 4402.5, hi: false },
    { n: 'India', v: 1012.9, hi: false },
    { n: 'Indonesia', v: 836.13, hi: true }
  ],
  prov: [
    { n: 'Kalimantan Timur', s: 'Kaltim', jobs: 490251, gdp: 45.79, ikt: 1.00, gj: 2581769 },
    { n: 'Sumatera Selatan', s: 'Sumsel', jobs: 474702, gdp: 26.42, ikt: 0.74, gj: 3140404 },
    { n: 'Kalimantan Selatan', s: 'Kalsel', jobs: 276866, gdp: 37.63, ikt: 0.65, gj: 2170297 },
    { n: 'Kalimantan Tengah', s: 'Kalteng', jobs: 315560, gdp: 13.23, ikt: 0.39, gj: 97026 },
    { n: 'Jambi', s: 'Jambi', jobs: 58509, gdp: 6.02, ikt: 0.00, gj: 470547 }
  ],
  spklu: [
    { r: 'Pulau Jawa', v: 50620 },
    { r: 'Sumatera', v: 4826 },
    { r: 'Bali & Nusa Tenggara', v: 3142 },
    { r: 'Sulawesi, Maluku, Papua', v: 2373 },
    { r: 'Kalimantan', v: 1957 }
  ]
};

export const steps = [
  { kicker: "01 · 08 — Fondasi Energi", text: "Pada 2022, listrik Indonesia masih bersumber dominan dari batu bara sebesar 62,5%. Energi baru terbarukan hanya menyumbang 5,6%.", phase: "energy" },
  { kicker: "02 · 08 — Skala Produksi", text: "Indonesia adalah produsen batu bara terbesar ke-3 di dunia setelah China dan India — dengan 836 juta ton pada 2024.", phase: "coal" },
  { kicker: "03 · 08 — Rekor Historis", text: "836,13 juta ton batu bara diproduksi hanya pada 2024 — rekor tertinggi sepanjang sejarah Indonesia.", phase: "coal" },
  { kicker: "04 · 08 — Risiko Batubara", text: "Phase-out batubara mengancam 1,61 juta lapangan kerja di 5 provinsi utama — termasuk dampak pengganda rantai pasok.", phase: "jobs" },
  { kicker: "05 · 08 — Risiko Otomotif", text: "Sektor otomotif konvensional menambah 1,5 juta pekerja lagi yang terancam terdisrupsi oleh transisi menuju kendaraan listrik.", phase: "jobs" },
  { kicker: "06 · 08 — Indeks Kerentanan", text: "Kalimantan Timur paling rentan (IKT 1,00): PDRB bisa susut 45,79% dan 490 ribu pekerjaan terancam jika tambang tutup mendadak.", phase: "vuln" },
  { kicker: "07 · 08 — Ketimpangan Infrastruktur", text: "80,5% target SPKLU 2030 dialokasikan untuk Jawa. Kalimantan — penghasil 83% batubara nasional — hanya mendapat 3,1%.", phase: "spklu" },
  { kicker: "08 · 08 — Pertanyaan Keadilan", text: "Ini bukan sekadar transisi energi. Ini adalah pertanyaan tentang keadilan pembangunan — siapa yang menanggung beban, dan siapa yang menikmati manfaat.", phase: "spklu" }
];

export const stepLabels = [
  'Bauran Listrik Indonesia, 2022',
  'Produksi Batu Bara Global, 2024',
  'Produksi Batu Bara Global, 2024',
  'Proyeksi Kehilangan Pekerjaan',
  'Proyeksi Kehilangan Pekerjaan',
  'Indeks Kerentanan Transisi (IKT)',
  'Target SPKLU 2030 per Wilayah',
  'Target SPKLU 2030 per Wilayah'
];