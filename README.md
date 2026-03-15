# 💰 Expense Tracker

Aplikasi pencatat keuangan pribadi yang simpel dan modern. Catat pemasukan & pengeluaran harianmu dengan mudah!

> Dibuat oleh **7arzz** | © 2026

---

## ✨ Fitur

| Fitur | Deskripsi |
|---|---|
| ➕ **Tambah Transaksi** | Catat pemasukan atau pengeluaran dengan kategori, nominal, dan keterangan |
| ✏️ **Edit Transaksi** | Klik ikon pensil untuk mengedit data yang sudah ada |
| 🗑️ **Hapus Transaksi** | Klik ikon tempat sampah, lalu konfirmasi sebelum menghapus |
| 📊 **Dashboard** | Lihat total pemasukan, pengeluaran, dan saldo secara real-time |
| 🔍 **Pencarian** | Cari transaksi berdasarkan kategori atau keterangan |
| 🏷️ **Filter** | Filter tampilan: Semua / Pemasukan / Pengeluaran |
| 💾 **Auto-Save** | Data tersimpan otomatis di browser (localStorage) |
| 📱 **Responsive** | Tampilan optimal di HP maupun desktop |

---

## 🚀 Cara Menggunakan

### 1. Buka Aplikasi
Buka file `index.html` di browser (Chrome, Edge, Firefox, dll).

### 2. Tambah Transaksi
1. Isi **Tanggal** (otomatis terisi hari ini)
2. Pilih **Tipe**: Pemasukan atau Pengeluaran
3. Isi **Kategori** (contoh: Gaji, Makan, Transport)
4. Isi **Nominal** (contoh: 50000)
5. Isi **Keterangan** (opsional)
6. Klik tombol **💾 Simpan**

### 3. Edit Transaksi
1. Klik ikon **✏️ pensil** pada transaksi yang ingin diedit
2. Form akan terisi data transaksi tersebut
3. Ubah data sesuai kebutuhan
4. Klik tombol **✔️ Update**

> 💡 **Tips:** Tekan tombol `Esc` di keyboard untuk membatalkan edit.

### 4. Hapus Transaksi
1. Klik ikon **🗑️ tempat sampah** pada transaksi yang ingin dihapus
2. Akan muncul pop-up konfirmasi
3. Klik **Hapus** untuk menghapus, atau **Batal** untuk membatalkan

### 5. Cari Transaksi
Ketik kata kunci di kolom pencarian (🔍) untuk mencari berdasarkan kategori atau keterangan.

### 6. Filter Transaksi
Klik tombol filter:

- **Semua** — Tampilkan semua transaksi
- **↑ Pemasukan** — Tampilkan hanya pemasukan
- **↓ Pengeluaran** — Tampilkan hanya pengeluaran

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Fungsi |
|---|---|
| `Esc` | Batalkan edit / Tutup pop-up hapus |

---

## 📁 Struktur File

```
expenseTracker/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚠️ Catatan Penting

- Data disimpan di **localStorage** browser. Jika kamu menghapus data browser (clear cache), data transaksi juga akan terhapus.
- Aplikasi ini berjalan **offline** — tidak memerlukan internet setelah pertama kali dibuka.

---

## 🛠️ Teknologi

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome — Ikon
- Google Fonts (Inter) — Tipografi

---

# 🌐 Upload ke GitHub

Ikuti langkah berikut untuk menyimpan project di GitHub.

## 1. Buat Repository Baru

1. Buka https://github.com
2. Klik **New Repository**
3. Isi nama repository, contoh:

```
expense-tracker
```

4. Klik **Create Repository**

---

## 2. Upload Project

Cara paling mudah (tanpa Git):

1. Masuk ke repository
2. Klik **Add file**
3. Pilih **Upload files**
4. Upload semua file project:

```
index.html
style.css
script.js
README.md
```

5. Klik **Commit changes**

---

# 🌍 Deploy dengan GitHub Pages

GitHub Pages memungkinkan website HTML berjalan gratis.

## 1. Masuk ke Settings

1. Buka repository
2. Klik **Settings**
3. Pilih menu **Pages**

---

## 2. Aktifkan GitHub Pages

Pada bagian **Source** pilih:

```
Branch: main
Folder: /root
```

Klik **Save**

---

## 3. Akses Website

Setelah beberapa detik website akan aktif di:

```
https://username.github.io/expense-tracker
```

Ganti **username** dengan username GitHub kamu.

---

# ⚡ Deploy ke Vercel

Alternatif hosting gratis lainnya adalah menggunakan **Vercel**.

## 1. Login ke Vercel

1. Buka https://vercel.com
2. Login menggunakan akun **GitHub**

---

## 2. Import Project

1. Klik **Add New Project**
2. Pilih repository **expense-tracker**
3. Klik **Deploy**

Karena project ini hanya menggunakan **HTML, CSS, dan JavaScript**, tidak perlu konfigurasi tambahan.

---

## 3. Website Siap Digunakan

Setelah deploy selesai, Vercel akan memberikan link seperti:

```
https://expense-tracker.vercel.app
```

Website kamu sudah bisa diakses secara online.

---

## 💡 Tips

Jika ingin mengubah domain project di Vercel:

1. Masuk ke **Project Settings**
2. Pilih **Domains**
3. Ubah nama domain sesuai keinginan

Contoh:

```
money-tracker.vercel.app
```

---

## 📜 Lisensi

Project ini bebas digunakan untuk pembelajaran dan pengembangan pribadi.

---

## Link Website

https://expense-tracker-gules-rho-87.vercel.app/

---

**Made with ❤️ by 7arzz**