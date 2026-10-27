# AliMart - Platform E-Commerce & Keanggotaan Modern

Proyek web dinamis dan responsif untuk pemenuhan tugas **Praktikum Pengembangan Aplikasi Web (PAW) Pertemuan 6 (Week 6 - Kelas B)**.

## Identitas Pengembang
- **Nama**: Rafii Arif Nugroho
- **NIM**: 20240140007
- **Kelas**: B

---

## 🚀 Fitur Utama

### 1. Halaman Katalog Belanja (`index.html`)
- **Integrasi REST API Asinkron**: Mengambil dan merender data produk secara real-time dari [DummyJSON Products API](https://dummyjson.com/products).
- **Status Loading & Error Handling**: Indikator *loading spinner* animasi CSS dan penanganan kegagalan jaringan yang dilengkapi tombol *Coba Lagi* (*retry mechanism*).
- **Pencarian Real-Time**: Input pencarian responsif yang memfilter produk secara instan berdasarkan judul, kategori, maupun merek dengan penghitung jumlah produk yang ditemukan.
- **Fallback Gambar Produk**: Penggantian otomatis dengan placeholder gambar SVG inline apabila URL thumbnail produk mengalami kendala muat (*broken image*).

### 2. Halaman Pendaftaran Member (`form.html`)
- **Validasi Interaktif & Real-Time**:
  - **Nama Lengkap**: Wajib diisi, minimal 3 karakter, hanya menerima huruf dan spasi.
  - **Email**: Format email valid sesuai standar regex RFC.
  - **Password**: Wajib minimal 8 karakter dengan kombinasi huruf dan angka.
  - **Konfirmasi Password**: Verifikasi kecocokan nilai dengan kolom password secara instan.
  - **Kategori Favorit**: Dropdown pemilihan preferensi belanja member.
  - **Persetujuan Ketentuan**: Verifikasi wajib centang syarat & ketentuan.
- **Meteran Kekuatan Password (Strength Meter)**: Menghitung skor kekuatan password secara dinamis ke dalam 4 level (*Lemah, Cukup, Bagus, Kuat*) dengan indikator bilah warna visual.
- **Toggle Visibilitas Password**: Tombol untuk menampilkan atau menyembunyikan teks password dan konfirmasi secara sinkron.
- **Panel Ringkasan Keanggotaan**: Kartu ringkasan member dinamis dengan stempel waktu bergabung (*timestamp*) lokal Indonesia setelah pendaftaran berhasil.
- **Fitur Reset Formulir**: Mengembalikan seluruh state input, pesan kesalahan, dan kartu hasil ke kondisi awal.

### 3. Sistem Tema Dinamis (Light & Dark Mode)
- **Persistensi State**: Menyimpan preferensi tema pengguna di `localStorage`.
- **Bebas Kedipan (*No FOUC*)**: Deteksi awal tema langsung pada blok `<head>` sebelum rendering DOM.
- **Transisi Halus**: Efek transisi warna latar belakang dan teks yang nyaman di mata dengan animasi ikon matahari & bulan.

### 4. Aksesibilitas & Desain Responsif (A11y & UI/UX)
- Menggunakan elemen HTML5 semantik (`<nav>`, `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- Atribut ARIA komprehensif (`aria-live`, `aria-describedby`, `aria-invalid`, `role="status"`).
- Tata letak responsif penuh (*Mobile First*) yang optimal di ponsel, tablet, maupun desktop.

---

## 📁 Struktur Direktori

```
PAW PERTEMUAN 6/
├── assets/
│   └── favicon.svg       # Ikon vektor favicon AliMart
├── css/
│   ├── form.css          # Gaya khusus halaman formulir & ringkasan member
│   └── style.css         # Desain global, variabel tema, navigasi, & katalog
├── js/
│   ├── form.js           # Logika validasi formulir & indikator password
│   ├── product.js        # Logika fetch API katalog & pencarian real-time
│   ├── products.js       # File helper modul produk
│   └── theme.js          # Logika toggle tema gelap/terang & localStorage
├── form.html             # Halaman pendaftaran member baru
├── index.html            # Halaman utama katalog produk belanja
├── .gitignore            # Berkas pengabaian Git
└── README.md             # Dokumentasi lengkap proyek
```

---

## 🛠️ Teknologi yang Digunakan
- **HTML5**: Struktur halaman semantik dan aksesibel.
- **CSS3 Vanilla**: Desain modern berbasis *CSS Custom Properties*, *CSS Grid*, *Flexbox*, serta *Backdrop Filter*.
- **JavaScript ES6+**: DOM Manipulation, Event Handling, *Fetch API*, *Async/Await*, serta Regex Validation.
- **DummyJSON REST API**: Sumber data katalog produk e-commerce.

---

## 💻 Cara Menjalankan Proyek
1. Clone repositori ini:
   ```bash
   git clone https://github.com/RafiiArifNugroho/Week6-KelasB-20240140007.git
   ```
2. Buka direktori proyek:
   ```bash
   cd Week6-KelasB-20240140007
   ```
3. Buka berkas `index.html` atau `form.html` langsung di peramban web (*browser*), atau gunakan ekstensi seperti **Live Server** di VS Code.
