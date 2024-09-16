// iggys4ur: Walled-Sandbox/TaskScheduler/generateMarkdown.js 
// Project: README Generator

// Step 1: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-green)`;
}

// Step 2: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `[licensed](./LICENSE)`;
}

// Step 3: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License\n#### This project is ${renderLicenseLink(license)} under the ${license} license.\n${renderLicenseBadge(license)}`;
}

// Step 4: Create a function to generate markdown for README
function generateMarkdown(data) {
  let mdStr = `# ${data.title}
  ## Description
  ${data.description}
  `;
  // Conditionally add the Repo URL section only if repoURL is provided
  if (data.repoURL) {
    mdStr += `\n## Repository URL\n[Project Repository](${data.repoURL})\n`;
  }
  // Add Table of Contents
  mdStr += `
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Questions & Contact
If you have any questions about the project, please reach out to:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}]
`;

  // Return the generated markdown string
  return mdStr;
}

module.exports = generateMarkdown;

