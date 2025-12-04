# 🚀 Setup GitHub Actions - Step by Step

## ✅ Status Saat Ini

Berdasarkan README yang sudah di-push:
- ✅ **Projects sudah auto-update** (6 projects terbaru muncul)
- ✅ **Commits sudah auto-update** (5 commits terbaru muncul)
- ⚠️ **GitHub Stats & Trophies** - Butuh waktu untuk load (normal untuk pertama kali)

## 📋 Checklist Setup GitHub Actions

### Step 1: Setup Workflow Permissions ✅

1. Buka: https://github.com/zlfikrimobiliu/zlfikrimobiliu/settings/actions
2. Scroll ke bagian **"Workflow permissions"**
3. Pastikan sudah di-set:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
4. Klik **Save** (jika belum)

### Step 2: Verify Workflow File ✅

Workflow sudah ada di: `.github/workflows/update-readme.yml`

Workflow akan otomatis jalan:
- ⏰ **Setiap 6 jam** (scheduled)
- 🔄 **Setiap push** ke branch `main`
- 🎯 **Manual** via Actions tab

### Step 3: Test Workflow (Lakukan Sekarang!)

1. Buka: https://github.com/zlfikrimobiliu/zlfikrimobiliu/actions
2. Klik workflow **"Update README"** di sidebar kiri
3. Klik tombol **"Run workflow"** (di kanan atas)
4. Pilih branch **"main"**
5. Klik **"Run workflow"** (tombol hijau)
6. Tunggu 1-2 menit
7. Refresh halaman profile GitHub kamu

### Step 4: Verify Auto-Update

Setelah workflow selesai:
- ✅ Projects list akan ter-update
- ✅ Recent commits akan ter-update
- ✅ Semua akan otomatis commit dengan message: `🤖 Auto-update README [skip ci]`

## 🔍 Troubleshooting

### GitHub Stats Tidak Muncul?

**Ini NORMAL untuk pertama kali!** GitHub Stats API butuh waktu untuk:
1. Generate images pertama kali
2. Cache images
3. Load di browser

**Solusi:**
- Tunggu 5-10 menit, lalu refresh halaman
- Clear browser cache (Ctrl+Shift+R)
- Atau tunggu sampai besok, biasanya sudah muncul

### Trophies Tidak Muncul?

Sama seperti Stats, butuh waktu untuk generate pertama kali.

**Solusi:**
- Tunggu beberapa jam
- Atau coba akses URL langsung: https://github-profile-trophy.vercel.app/?username=zlfikrimobiliu&theme=darkhub

### Workflow Gagal?

1. Cek tab **Actions** → Pilih workflow yang gagal
2. Klik run yang gagal → Lihat error logs
3. Pastikan:
   - ✅ Workflow permissions sudah benar
   - ✅ File `.github/workflows/update-readme.yml` ada
   - ✅ Folder `scripts/` ada dengan file `update-projects.js` dan `update-commits.js`

### Projects/Commits Tidak Update?

1. Pastikan workflow sudah jalan (cek tab Actions)
2. Pastikan workflow selesai dengan status ✅ (hijau)
3. Refresh halaman profile
4. Jika masih tidak update, jalankan workflow manual lagi

## 🎯 Auto-Update Schedule

Workflow akan otomatis update:
- **Setiap 6 jam** (00:00, 06:00, 12:00, 18:00 UTC)
- **Setiap push** ke branch `main`
- **Manual** kapan saja via Actions tab

## 📝 Catatan Penting

1. ⚠️ **Jangan edit manual** bagian `<!-- PROJECTS:START -->` dan `<!-- COMMITS:START -->` karena akan di-overwrite
2. ✅ **Boleh edit** bagian lain (badges, stats, sections, dll)
3. 🔒 GitHub Actions otomatis pakai `GITHUB_TOKEN`, tidak perlu setup token manual
4. 🚫 Commit auto-update pakai message `[skip ci]` untuk mencegah infinite loop

## ✅ Verifikasi Final

Setelah semua setup, profile kamu akan:
- ✅ Auto-update projects setiap 6 jam
- ✅ Auto-update commits setiap 6 jam
- ✅ Menampilkan tech stack badges
- ✅ Menampilkan GitHub stats (setelah beberapa saat)
- ✅ Menampilkan trophies (setelah beberapa saat)
- ✅ Menampilkan contribution graph

---

**Selamat! Profile GitHub kamu sekarang fully automated! 🎉**

Jika ada masalah, cek tab **Actions** untuk melihat logs workflow.

