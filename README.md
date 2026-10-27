# 🚀 Portofolio Website Modern (Tailwind CSS CDN + Easy Content Update)

Website portofolio profesional, modern, responsif, dan sangat mudah diperbarui hanya melalui **satu file data** (`data.js`). Sangat cocok untuk di-deploy ke **GitHub Pages** (`https://username.github.io`).

---

## 🌟 Fitur Utama
- **Sticky Navbar** dengan efek glassmorphism blur & menu mobile responsif.
- **Hero Section**: Foto profil bulat dengan animasi subtle glow, status ketersediaan kerja, headline, bio, tombol unduh CV, dan statistik singkat.
- **Experience Section**: Garis waktu (timeline) pengalaman kerja dengan poin pencapaian dan teknologi yang digunakan.
- **Project Section**: Kartu proyek interaktif lengkap dengan gambar showcase, kategori, tag teknologi, tautan Live Demo, dan tautan GitHub repository.
- **Education & Skills Section**: Riwayat pendidikan formal/bootcamp, nilai/IPK, serta badge kategori keahlian teknis.
- **Contact Section**: Kartu kontak langsung (Email, WhatsApp, Lokasi) & formulir kirim pesan cepat yang otomatis terintegrasi.
- **Footer**: Hak cipta dinamis dan tombol *Kembali ke Atas*.
- **Tailwind CSS CDN**: Tidak memerlukan instalasi Node.js, `npm run build`, atau bundler rumit.
- **Single File Update**: Seluruh teks, link, pengalaman, dan proyek cukup diubah di file `data.js`.

---

## 📁 Struktur File

```text
portofolio/
├── index.html        # Struktur halaman utama (Tailwind CSS CDN + HTML5)
├── data.js           # SATU-SATUNYA FILE UNTUK EDIT SEMUA KONTEN!
├── app.js            # Engine renderer otomatis ke HTML
├── style.css         # Styling custom tambahan & efek glow
├── README.md         # Petunjuk penggunaan & deploy
└── assets/           # Tempat menyimpan gambar
    ├── avatar.jpg    # Foto profil Anda
    ├── project1.jpg  # Pratinjau proyek 1
    ├── project2.jpg  # Pratinjau proyek 2
    └── project3.jpg  # Pratinjau proyek 3
```

---

## ✏️ Cara Mengubah Konten Portofolio Anda

Anda **TIDAK PERLU** mengutak-atik kode HTML yang panjang! Cukup buka file:
👉 **`data.js`**

Di dalam `data.js`, Anda bisa langsung mengganti teks seperti mengedit file `.txt`:
- Nama, profesi, bio, dan status pekerjaan
- Nomor WhatsApp, Email, dan link profil GitHub/LinkedIn
- Riwayat kerja dan poin pencapaian
- Daftar proyek, deskripsi, dan link demonya
- Riwayat pendidikan dan skill

Semua perubahan yang Anda simpan di `data.js` akan **otomatis langsung muncul** di website!

---

## 🌐 Cara Deploy ke GitHub Pages (nama_user.github.io)

### Langkah 1: Buat Repository di GitHub
1. Masuk ke akun [GitHub](https://github.com).
2. Buat repository baru (*New Repository*).
3. Beri nama repository persis sesuai username Anda:
   `username.github.io`
   *(Ganti `username` dengan username GitHub asli Anda)*.
4. Pilih **Public**.
5. Klik **Create repository**.

### Langkah 2: Upload File Portofolio
Buka terminal / PowerShell di folder ini (`d:\portofolio`), lalu jalankan perintah berikut:

```bash
git init
git add .
git commit -m "Inisialisasi website portofolio"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```
*(Ganti `username` dengan nama akun GitHub Anda)*

### Langkah 3: Selesai! Website Anda Sudah Aktif
Tunggu sekitar 1–2 menit, portofolio Anda akan langsung bisa diakses di internet secara publik melalui URL:
🔗 **`https://username.github.io`**
