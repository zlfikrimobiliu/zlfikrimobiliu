# 🎯 Panduan Cepat Setup GitHub Profile Auto-Update

## 🚀 Langkah-Langkah Setup

### 1️⃣ **Clone/Push Repository**

Jika repository sudah ada di GitHub:

```bash
# Clone repository
git clone https://github.com/zlfikrimobiliu/zlfikrimobiliu.git
cd zlfikrimobiliu

# Copy semua file yang sudah dibuat ke folder ini
# (README.md, .github/workflows/, scripts/, package.json, dll)

# Push ke GitHub
git add .
git commit -m "✨ Add professional auto-updating profile README"
git push origin main
```

### 2️⃣ **Install Dependencies**

```bash
npm install
```

### 3️⃣ **Setup GitHub Actions Permissions**

1. Buka: https://github.com/zlfikrimobiliu/zlfikrimobiliu/settings/actions
2. Scroll ke bagian **"Workflow permissions"**
3. Pilih:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
4. Klik **Save**

### 4️⃣ **Enable GitHub Actions**

1. Buka tab **Actions** di repository
2. Jika ada warning, klik **"I understand my workflows, go ahead and enable them"**

### 5️⃣ **Test Workflow (Optional)**

1. Pergi ke tab **Actions**
2. Pilih workflow **"Update README"**
3. Klik **"Run workflow"** → **"Run workflow"**
4. Tunggu beberapa menit
5. Refresh halaman profile GitHub kamu

## ✅ Selesai!

Setelah setup, README akan otomatis update:
- ⏰ **Setiap 6 jam** (scheduled)
- 🔄 **Setiap kali kamu push** ke repository ini
- 🎯 **Manual** via Actions tab

## 🎨 Fitur yang Sudah Include

✅ Dark theme professional  
✅ Tech stack badges (Next.js, TypeScript, Vue.js, React Native, Node.js, Python, PHP, Laravel, dll)  
✅ Auto-update project list (6 project terbaru)  
✅ Auto-update recent commits (5 commit terbaru)  
✅ GitHub stats (contributions, streak, trophies)  
✅ Contribution graph  
✅ Profile views counter  

## 🔧 Customization

### Ubah Warna/Theme
Edit `README.md` - semua badge dan stats sudah menggunakan dark theme.

### Ubah Jumlah Projects
Edit `scripts/update-projects.js`:
```javascript
const maxProjects = 6; // Ubah ke angka yang diinginkan
```

### Ubah Jumlah Commits
Edit `scripts/update-commits.js`:
```javascript
const maxCommits = 5; // Ubah ke angka yang diinginkan
```

### Ubah Update Frequency
Edit `.github/workflows/update-readme.yml`:
```yaml
schedule:
  - cron: '0 */6 * * *'  # Setiap 6 jam
  # Atau
  - cron: '0 * * * *'     # Setiap jam
  # Atau
  - cron: '0 0 * * *'     # Setiap hari jam 00:00
```

## 📝 Catatan Penting

- ⚠️ **Jangan edit manual** bagian yang ada tag `<!-- PROJECTS:START -->` dan `<!-- COMMITS:START -->` karena akan di-overwrite otomatis
- ✅ **Boleh edit** bagian lain di README (badges, stats, sections, dll)
- 🔒 GitHub Actions otomatis pakai `GITHUB_TOKEN`, tidak perlu setup token manual
- 🚫 Commit auto-update akan pakai message `[skip ci]` untuk mencegah infinite loop

## 🐛 Troubleshooting

**Workflow gagal?**
- Cek Settings → Actions → Workflow permissions sudah benar
- Cek tab Actions untuk lihat error logs

**Projects tidak muncul?**
- Pastikan repository tidak private
- Cek GitHub Actions logs

**Commits tidak muncul?**
- Pastikan ada commits di repository
- Cek apakah repository accessible

---

**Selamat! Profile GitHub kamu sekarang akan auto-update setiap kali ada project baru atau commit! 🎉**

