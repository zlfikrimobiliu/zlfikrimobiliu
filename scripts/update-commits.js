const { Octokit } = require('@octokit/rest');
const fs = require('fs');
const path = require('path');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const username = 'zlfikrimobiliu';
const maxCommits = 5;

async function updateCommits() {
  try {
    // Get user's repositories
    const { data: repos } = await octokit.repos.listForUser({
      username,
      sort: 'updated',
      direction: 'desc',
      per_page: 10,
    });

    let allCommits = [];

    // Get recent commits from multiple repositories
    for (const repo of repos.slice(0, 5)) {
      try {
        const { data: commits } = await octokit.repos.listCommits({
          owner: username,
          repo: repo.name,
          per_page: 3,
        });

        commits.forEach(commit => {
          allCommits.push({
            repo: repo.name,
            message: commit.commit.message.split('\n')[0], // First line only
            url: commit.html_url,
            date: commit.commit.author.date,
            sha: commit.sha.substring(0, 7),
          });
        });
      } catch (error) {
        // Skip private repos or repos with no access
        continue;
      }
    }

    // Sort by date (newest first) and take top commits
    allCommits.sort((a, b) => new Date(b.date) - new Date(a.date));
    allCommits = allCommits.slice(0, maxCommits);

    let commitsContent = '\n';
    
    if (allCommits.length === 0) {
      commitsContent = '\n*No recent commits found.*\n\n';
    } else {
      allCommits.forEach((commit, index) => {
        const date = new Date(commit.date);
        const formattedDate = date.toLocaleDateString('id-ID', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
        
        commitsContent += `${index + 1}. **[${commit.repo}](${commit.url})** - ${commit.message}\n`;
        commitsContent += `   \`${commit.sha}\` • ${formattedDate}\n\n`;
      });
    }

    // Read README
    const readmePath = path.join(__dirname, '..', 'README.md');
    let readme = fs.readFileSync(readmePath, 'utf8');

    // Replace commits section
    const commitsRegex = /<!-- COMMITS:START -->[\s\S]*?<!-- COMMITS:END -->/;
    readme = readme.replace(
      commitsRegex,
      `<!-- COMMITS:START -->${commitsContent}<!-- COMMITS:END -->`
    );

    // Write back
    fs.writeFileSync(readmePath, readme, 'utf8');
    console.log('✅ Commits updated successfully!');
  } catch (error) {
    console.error('❌ Error updating commits:', error.message);
    process.exit(1);
  }
}

updateCommits();

