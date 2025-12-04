# 🚀 Setup Guide - GitHub Profile Auto-Update

Panduan langkah demi langkah untuk setup GitHub profile yang auto-update.

## 📋 Prerequisites

- GitHub account (sudah punya)
- Repository `zlfikrimobiliu/zlfikrimobiliu` (special repository untuk profile)

## 🔧 Step-by-Step Setup

### Step 1: Clone atau Setup Repository

Jika repository sudah ada, clone:
```bash
git clone https://github.com/zlfikrimobiliu/zlfikrimobiliu.git
cd zlfikrimobiliu
```

Atau jika sudah di folder ini, langsung lanjut ke step 2.

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Setup GitHub Actions

1. Buka repository di GitHub
2. Pergi ke **Settings** → **Actions** → **General**
3. Di bagian **Workflow permissions**, pilih:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
4. Klik **Save**

### Step 4: Enable GitHub Actions

1. Pergi ke tab **Actions** di repository
2. Jika ada warning, klik **I understand my workflows, go ahead and enable them**

### Step 5: Test Manual Update (Optional)

Untuk test manual update:

```bash
# Set token (hanya untuk testing lokal)
export GITHUB_TOKEN=your_github_token_here

# Run update script
npm run update
```

**Note:** Untuk production, GitHub Actions akan otomatis menggunakan `GITHUB_TOKEN` yang sudah disediakan.

### Step 6: Push ke GitHub

```bash
git add .
git commit -m "✨ Add auto-updating GitHub profile README"
git push origin main
```

### Step 7: Verify

1. Setelah push, GitHub Actions akan otomatis jalan
2. Cek tab **Actions** untuk melihat workflow status
3. Tunggu beberapa menit, lalu refresh halaman profile GitHub kamu
4. README akan otomatis ter-update dengan:
   - ✅ Recent projects (update setiap 6 jam)
   - ✅ Recent commits (update setiap 6 jam)

## ⚙️ Customization

### Mengubah Update Frequency

Edit `.github/workflows/update-readme.yml`:

```yaml
schedule:
  # Update setiap 6 jam (default)
  - cron: '0 */6 * * *'
  
  # Atau update setiap jam
  - cron: '0 * * * *'
  
  # Atau update setiap hari jam 00:00
  - cron: '0 0 * * *'
```

### Menambah/Mengurangi Jumlah Projects

Edit `scripts/update-projects.js`:

```javascript
const maxProjects = 6; // Ubah angka ini
```

### Menambah/Mengurangi Jumlah Commits

Edit `scripts/update-commits.js`:

```javascript
const maxCommits = 5; // Ubah angka ini
```

## 🔄 Auto-Update Triggers

README akan otomatis update ketika:

1. **Scheduled**: Setiap 6 jam (via cron)
2. **Manual**: Via GitHub Actions → Run workflow
3. **On Push**: Setiap kali ada push ke branch `main`

## 📝 Notes

- GitHub Actions akan otomatis commit perubahan ke README
- Commit message akan otomatis: `🤖 Auto-update README [skip ci]`
- Tag `[skip ci]` mencegah infinite loop
- Tidak perlu setup token manual, GitHub sudah provide `GITHUB_TOKEN`

## 🐛 Troubleshooting

### Workflow tidak jalan?

1. Cek **Settings** → **Actions** → **General** → Workflow permissions sudah di-set dengan benar
2. Cek tab **Actions** untuk melihat error logs

### Projects tidak muncul?

1. Pastikan repository tidak private (atau gunakan Personal Access Token)
2. Cek GitHub Actions logs untuk error details

### Commits tidak muncul?

1. Pastikan repository memiliki commits
2. Cek apakah repository accessible

## 🎨 Customize README

Edit `README.md` untuk customize:
- Badge colors
- Layout
- Sections
- Stats

Semua customization akan tetap dipertahankan, hanya bagian yang ada tag `<!-- PROJECTS:START -->` dan `<!-- COMMITS:START -->` yang akan di-update otomatis.

---

**Happy Coding! 🚀**

