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
├── index.html    → Halaman utama
├── style.css     → Desain & tampilan
├── script.js     → Logika aplikasi
└── README.md     → Panduan ini
```

---

## ⚠️ Catatan Penting

- Data disimpan di **localStorage** browser. Jika kamu menghapus data browser (clear cache), data transaksi juga akan terhapus.
- Aplikasi ini berjalan **offline** — tidak memerlukan internet setelah pertama kali dibuka.

---

## 🛠️ Teknologi

- HTML5
- CSS3 (Dark Glassmorphism)
- JavaScript (Vanilla)
- [Font Awesome](https://fontawesome.com/) — Ikon
- [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter) — Tipografi

---

**Made with ❤️ by 7arzz**
