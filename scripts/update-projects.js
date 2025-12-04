const { Octokit } = require('@octokit/rest');
const fs = require('fs');
const path = require('path');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const username = 'zlfikrimobiliu';
const maxProjects = 6;

async function updateProjects() {
  try {
    // Get user's repositories
    const { data: repos } = await octokit.repos.listForUser({
      username,
      sort: 'updated',
      direction: 'desc',
      per_page: maxProjects,
    });

    let projectsContent = '\n';
    
    repos.forEach((repo, index) => {
      const description = repo.description || 'No description';
      const language = repo.language || 'Other';
      const stars = repo.stargazers_count || 0;
      const forks = repo.forks_count || 0;
      
      // Get language color
      const languageColors = {
        'TypeScript': '007ACC',
        'JavaScript': 'F7DF1E',
        'Vue': '4FC08D',
        'Python': '3776AB',
        'PHP': '777BB4',
        'CSS': '1572B6',
        'HTML': 'E34F26',
        'Other': '6E6E6E',
      };
      
      const color = languageColors[language] || languageColors['Other'];
      
      projectsContent += `### ${index + 1}. [${repo.name}](${repo.html_url})\n`;
      projectsContent += `   ${description}\n\n`;
      projectsContent += `   ![Language](https://img.shields.io/badge/${encodeURIComponent(language)}-${color}?style=flat-square&logo=${encodeURIComponent(language.toLowerCase())})\n`;
      projectsContent += `   ![Stars](https://img.shields.io/github/stars/${username}/${repo.name}?style=flat-square)\n`;
      projectsContent += `   ![Forks](https://img.shields.io/github/forks/${username}/${repo.name}?style=flat-square)\n`;
      projectsContent += `   ![Updated](https://img.shields.io/github/last-commit/${username}/${repo.name}?style=flat-square)\n\n`;
    });

    // Read README
    const readmePath = path.join(__dirname, '..', 'README.md');
    let readme = fs.readFileSync(readmePath, 'utf8');

    // Replace projects section
    const projectsRegex = /<!-- PROJECTS:START -->[\s\S]*?<!-- PROJECTS:END -->/;
    readme = readme.replace(
      projectsRegex,
      `<!-- PROJECTS:START -->${projectsContent}<!-- PROJECTS:END -->`
    );

    // Write back
    fs.writeFileSync(readmePath, readme, 'utf8');
    console.log('✅ Projects updated successfully!');
  } catch (error) {
    console.error('❌ Error updating projects:', error.message);
    process.exit(1);
  }
}

updateProjects();

