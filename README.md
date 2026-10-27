# AliMart - Katalog Produk & Pendaftaran Member (Tugas Fetch API & Form DOM / Event Handling)

Dua halaman statis (HTML + CSS + JavaScript native, tanpa library) yang dihubungkan lewat navigasi,

# Tampilan Aplikasi
<img width="1917" height="1077" alt="SS TAMPILAN" src="https://github.com/user-attachments/assets/78d51910-6d18-4d71-a519-865f0ab3c793" />
<img width="1917" height="1078" alt="SS SEARCH TAMPILAN" src="https://github.com/user-attachments/assets/15f5cbbc-c916-42ff-ae47-02c3c268a1e2" />

form.html
<img width="1916" height="1077" alt="SS FORM HTML" src="https://github.com/user-attachments/assets/f41b17ce-77c5-452c-b8e6-0d196b3e0759" />
<img width="1915" height="1072" alt="Cuplikan layar 2026-10-27 093805" src="https://github.com/user-attachments/assets/5340bb26-7acd-4926-976f-cf01979b2989" />

# Fitur

1. Katalog Produk (index.html) - Fetch API
Mengambil data dari https://dummyjson.com/products dengan fetch().
Menampilkan nama, harga, kategori, dan gambar produk lewat DOM.
Status loading saat data diambil, pesan error + tombol "Coba lagi" bila gagal.
Cek response.ok agar status 404/500 juga dianggap error.
Pencarian produk (nama / kategori) memakai event input.

2. Pendaftaran Member (form.html) - DOM & Event Handling
Kolom: nama, email, password, konfirmasi password, minat, persetujuan.
Event: input, blur, change, click, submit, reset.
Validasi langsung saat mengetik, pesan error muncul di bawah kolom.
Indikator kekuatan password, tombol tampilkan/sembunyikan password.
Hasil pendaftaran tampil dinamis sebagai kartu ringkasan.

## Aturan Validasi Form

| Kolom | Aturan |
|---|---|
| Nama | wajib, minimal 3 karakter, hanya huruf dan spasi |
| Email | wajib, format email valid |
| Password | wajib, minimal 8 karakter, mengandung huruf dan angka |
| Konfirmasi | wajib, sama dengan password |
| Persetujuan | wajib dicentang |
Struktur Folder
tugas-fetch-form/
├── index.html
├── form.html
├── css/
│   ├── style.css
│   └── form.css
├── js/
│   ├── products.js
│   └── form.js
├── assets/
│   ├── favicon.svg
└── README.md
Cara Menjalankan
Buka index.html di browser. Halaman produk membutuhkan koneksi internet.




