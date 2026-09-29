# PKBM Cahaya Ilmu: Prototipe Website

Prototipe desain website PKBM (situs publik + tampilan dashboard admin), dibuat dari hasil Google Stitch dan sudah disambungkan antarhalaman. **Ini masih tampilan statis**: belum ada database, login sungguhan, atau penyimpanan data.

## Halaman

| Alamat | Berkas | Keterangan |
|---|---|---|
| `/` | `index.html` | Beranda |
| `/tentang` | `tentang.html` | Tentang Kami (Visi & Misi, Identitas) |
| `/program` | `program.html` | Ringkasan program Paket A/B/C |
| `/program-paket-c` | `program-paket-c.html` | Detail Paket C |
| `/berita` | `berita.html` | Daftar berita |
| `/berita-detail` | `berita-detail.html` | Contoh detail berita |
| `/kontak` | `kontak.html` | Kontak & lokasi |
| `/pencarian` | `pencarian.html` | Hasil pencarian |
| `/admin/login` | `admin/login.html` | Login admin (tampilan) |
| `/admin/dashboard` | `admin/dashboard.html` | Ringkasan admin |
| `/admin/berita` | `admin/berita.html` | Kelola berita |
| `/admin/berita-editor` | `admin/berita-editor.html` | Editor berita |
| `/admin/segera` | `admin/segera.html` | Penampung untuk menu admin yang belum dibuat |

## Menjalankan di komputer

Buka `index.html` langsung di browser, atau jalankan server lokal:

```
npx serve .
```

Butuh internet untuk font, ikon, dan gambar (dimuat dari Google). CSS sudah disertakan di `assets/css/`.

## Deploy ke Vercel

1. Unggah folder ini ke repository GitHub.
2. Di Vercel: **Add New → Project → Import** repository tersebut.
3. **Framework Preset: Other**. Kosongkan Build Command dan Output Directory, lalu **Deploy**.

Konfigurasi ada di `vercel.json` (URL bersih tanpa `.html`, `/admin` diarahkan ke halaman login, dan area admin tidak diindeks mesin pencari).

## Struktur

```
index.html, tentang.html, program*.html, berita*.html, kontak.html, pencarian.html
admin/            halaman dashboard
assets/css/       CSS hasil kompilasi Tailwind (public.css, admin.css)
assets/js/site.js skrip bersama (menu HP, menu samping admin, tombol prototipe)
tools/tailwind/   alat untuk membangun ulang CSS (hanya perlu saat mengubah kelas Tailwind)
docs/             PRD, prompt Stitch, DESIGN.md
design/           hasil ekspor asli dari Stitch (referensi, tidak ikut tampil di situs)
```

## Catatan & batasan

- Semua berita mengarah ke satu contoh detail; Paket A dan B mengarah ke halaman ringkasan program (halaman detail baru ada untuk Paket C).
- Menu admin Halaman, Program, Media, Pengaturan, dan Pengguna belum dibuat dan menampilkan halaman "Segera Hadir".
- Login dan tombol simpan hanya contoh (tampil pemberitahuan prototipe).
- Gambar masih dimuat dari server Google (`googleusercontent.com`). Sebelum dipakai sungguhan, unduh dan simpan di proyek sendiri.
- Teks dan angka contoh (nama tokoh, statistik, "PPDB 2025/2026", fitur Dapodik di dashboard) perlu diganti atau dibuang.

## Responsif

Sudah diuji tanpa gulir ke samping di lebar 320, 360, 390, 768, 1024, 1280, dan 1440 px.
- **Situs publik:** menu cepat/navigasi di HP lewat tombol ikon di header; jarak konten mengikuti tinggi header otomatis.
- **Dashboard admin:** menu samping menjadi laci geser di HP/tablet (tombol ☰), tabel berubah menjadi kartu di HP.

## Mengubah tampilan (Tailwind)

CSS di `assets/css/` dihasilkan dari kelas yang dipakai di file HTML. Kalau kamu menambah atau mengganti kelas Tailwind, bangun ulang CSS-nya:

```
cd tools/tailwind
npm install
npm run css
```

Untuk sekadar mengganti teks atau gambar, langkah ini tidak diperlukan.

## Langkah berikutnya

Membangun sistem sebenarnya: database, login, dan dashboard yang bisa mengubah konten, lalu mengubah halaman-halaman ini menjadi template yang mengambil data dari sistem. Rujukannya ada di `docs/PRD-Website-PKBM.md`.
