/**
 * ==============================================================================
 * FILE DATA KONTEN PORTOFOLIO (SINGLE SOURCE OF CONTENT)
 * ==============================================================================
 * Anda cukup mengedit data di dalam file ini untuk mengubah seluruh isi portofolio!
 * Format ini sangat mudah diubah seperti file teks (.txt / .json).
 * Semua perubahan akan langsung otomatis tampil di halaman website.
 * ==============================================================================
 */

const PORTFOLIO_DATA = {
  // Informasi Profil & Hero Section
  profile: {
    name: "Sani Chotman Maulana",
    headline: "Junior Web Developer | Fresh Graduate & Tech Enthusiast",
    statusBadge: "🟢 Terbuka untuk Internship / Entry-Level / Junior Role",
    avatar: "assets/avatar.jpg", // Ganti dengan foto profil Anda di folder assets
    bio: "Lulusan baru yang berdedikasi dengan ketertarikan mendalam pada pengembangan web frontend & modern JavaScript. Terbiasa membangun aplikasi web interaktif melalui proyek mandiri dan program pelatihan intensif. Cepat beradaptasi dan siap memberikan kontribusi terbaik di lingkungan tim.",
    location: "Bandung, Indonesia",
    email: "sanichotmanmaulana@gmail.com",
    phone: "+62 859-3369-6090",
    cvLink: "#", // Masukkan link Google Drive CV Anda atau 'assets/cv.pdf'

    // Media Sosial
    socials: {
      github: "https://github.com/SaniChotman",
      linkedin: "https://linkedin.com/in/Sani Chotman Maulana",
      instagram: "https://instagram.com/@chotmanms",
      whatsapp: "085933696090"
    }
  },

  // Statistik Singkat (Bagi pemula: tonjolkan jumlah proyek & jam latihan)
  stats: [
    { label: "Proyek Selesai", value: "4+" },
    { label: "Jam Koding Mandiri", value: "200+" },
    { label: "Sertifikasi Kursus", value: ""0 },
    { label: "Semangat Belajar", value: "100%" }
  ],

  // Keahlian / Tech Stack
  skills: [
    { name: "HTML5 / Semantic Web", level: "Dasar-Menengah", category: "Frontend" },
    { name: "CSS3 / Responsive Design", level: "Dasar-Menengah", category: "Frontend" },
    { name: "Tailwind CSS", level: "Dasar-Menengah", category: "Frontend" },
    { name: "JavaScript (ES6+)", level: "Dasar-Menengah", category: "Frontend" },
    { name: "React.js", level: "Dasar", category: "Frontend" },
    { name: "Git & GitHub", level: "Dasar-Menengah", category: "Tools" },
    { name: "REST API Integration", level: "Dasar", category: "Frontend" },
    { name: "VS Code & DevTools", level: "Dasar", category: "Tools" }
  ],

  // Pengalaman (Bagi yang belum kerja kantor: isi dengan Studi Independen / Bootcamp / Proyek Kuliah / Volunteer)
  // experiences: [
  //   {
  //     // role: "Peserta Studi Independen Web Development",
  //     company: "Program Pelatihan Digital / Bootcamp",
  //     period: "2023 - 2024",
  //     type: "Intensive Program",
  //     location: "Online / Remote",
  //     description: "Menyelesaikan kurikulum intensif pengembangan web modern, praktik pembuatan antarmuka responsif, dan kolaborasi tim menggunakan Git.",
  //     highlights: [
  //       "Membangun proyek akhir (Capstone Project) aplikasi web responsif bersama tim beranggotakan 3 orang.",
  //       "Menerapkan best practice Git workflow (branching, pull request, dan code review).",
  //       "Lulus dengan predikat nilai memuaskan dan menyelesaikan semua submission tugas tepat waktu."
  //     ],
  //     technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Git"]
  //   },
  //   {
  //     role: "Freelance / Web Developer Volunteer",
  //     company: "Proyek Mandiri & Klien Lokal",
  //     period: "2023",
  //     type: "Freelance",
  //     location: "Jakarta",
  //     description: "Membantu pembuatan website profil UMKM dan halaman landing page promosi untuk meningkatkan kehadiran digital usaha lokal.",
  //     highlights: [
  //       "Merancang tampilan website yang cepat dan mudah dibaca di layar smartphone.",
  //       "Mengintegrasikan tombol chat langsung ke WhatsApp untuk meningkatkan pesanan masuk."
  //     ],
  //     technologies: ["Tailwind CSS", "JavaScript", "Responsive Design"]
  //   },
  //   {
  //     role: "Staf Divisi IT & Dokumentasi",
  //     company: "Organisasi Kampus / Komunitas",
  //     period: "2022 - 2023",
  //     type: "Organisasi",
  //     location: "Kampus",
  //     description: "Bertanggung jawab atas publikasi informasi kegiatan dan pengelolaan halaman web sederhana acara tahunan kampus.",
  //     highlights: [
  //       "Mengelola pembaruan konten dan dokumentasi kegiatan secara berkala.",
  //       "Bekerja sama dengan tim publikasi dan desain dalam menyusun konten digital."
  //     ],
  //     technologies: ["Content Management", "Komunikasi Tim", "Design"]
  //   }
  // ],

  // Proyek Portofolio (Project Section)
  projects: [
    {
      title: "Quantum Analytics Dashboard",
      category: "Web Application",
      description: "Platform analytics modern dengan visualisasi data performa real-time, grafik tren interaktif, manajemen user, dan mode gelap mewah.",
      image: "assets/project1.jpg",
      tags: ["Tailwind CSS", "JavaScript", "Chart.js", "Responsive"],
      demoUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/rifki-pratama/quantum-dashboard"
    },
    {
      title: "Lumina Luxe E-Commerce",
      category: "E-Commerce",
      description: "Toko online minimalis bernuansa estetik tinggi dengan fitur katalog produk, filter kategori, keranjang belanja dinamis, dan checkout simpel.",
      image: "assets/project2.jpg",
      tags: ["HTML5", "Tailwind CSS", "Vanilla JS", "Local Storage"],
      demoUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/rifki-pratama/lumina-luxe-shop"
    },
    {
      title: "NexaFlow AI Productivity Suite",
      category: "Productivity Tool",
      description: "Aplikasi manajemen tugas dan produktivitas terintegrasi asisten AI untuk mempermudah delegasi target harian dan scheduling tim.",
      image: "assets/project3.jpg",
      tags: ["Tailwind CSS", "JavaScript", "OpenAI API", "Web App"],
      demoUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/rifki-pratama/nexaflow-ai-task"
    }
  ],

  // Riwayat Pendidikan & Sertifikasi (Education Section)
  education: [
    {
      degree: "S1 - Teknik Informatika / Ilmu Komputer",
      institution: "Universitas Indonesia",
      period: "2023 - sekarang",
      score: "IPK 3.72 / 4.00 (Cum Laude)",
      description: "Fokus pada Rekayasa Perangkat Lunak, Algoritma, dan Desain Web.",
      activities: ["mengerjakan projek praktikal koding pada tugas kuliah"]
    },
    // {
    //   degree: "Full-Stack Web Development Bootcamp",
    //   institution: "Hacktiv8 Indonesia",
    //   period: "2022",
    //   score: "Grade A (Top Graduate)",
    //   description: "Program intensif 4 bulan mencakup arsitektur modern web, responsive design, testing, dan deployment cloud.",
    //   activities: ["Penerima beasiswa prestasi penuh", "Best Final Project Team"]
    // }
  ],

  // Informasi Kontak (Contact Section)
  contact: {
    title: "Mari Terhubung & Kolaborasi!",
    subtitle: "Apakah Anda memiliki proyek baru, tawaran kerja sama, atau sekadar ingin menyapa? Kirimkan pesan melalui form atau hubungi kontak langsung di bawah ini.",
    note: "Biasanya saya merespons dalam waktu kurang dari 24 jam.",
    cards: [
      {
        type: "Email",
        value: "sanichotmanmaulana@gmail.com",
        actionText: "Kirim Email",
        link: "mailto:sanichotmanmaulana@gmail.com",
        icon: "email"
      },
      {
        type: "WhatsApp",
        value: "+62 859-3369-6090",
        actionText: "Chat WhatsApp",
        link: "+62 859-3369-6090",
        icon: "whatsapp"
      },
      {
        type: "Lokasi",
        value: "Bandung, Indonesia",
        actionText: "Lihat di Maps",
        link: "https://maps.app.goo.gl/YSsYcPXJFUovVmrV7,Indonesia",
        icon: "location"
      }
    ]
  },

  // Footer
  footer: {
    tagline: "Dibuat dengan dedikasi tinggi & Tailwind CSS. Siap dipublikasikan di GitHub Pages.",
    copyrightYear: new Date().getFullYear()
  }
};
