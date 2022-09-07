// TODO: Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
// TODO: Create a function that returns the license link
//If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'apache 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === 'Unlicense') {
        return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    } else if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Mozilla') {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    } else if (license === 'Zlib') {
        return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
    } else if (license === 'none') {
        return '';
    }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    return `
  # ${answers.title}
  ## Description:
  ${answers.description}
  
  ## Table of Contents

  - [Description](#description)
  - [Installation](#Installation)
  - [Usage](#usage)
  - [Contributors](#contribution)
  - [Tests](#testing)
  - [Questions](#questions)
  
  ## Installation:
  ${answers.installationInstructions}
  
  ## Usage:
  ${answers.usageInformation}
  
  ## Contributors:
  ${answers.contribution}
  
  ## GitHub Name:
  [${answers.gitHubUserName}](https://github.com/${answers.gitHubUserName});
  
  ## License:
  ${renderLicenseBadge(answers.license)}
  
  ## Tests:
  ${answers.testInstructions}
  
  ## Questions:
  If you have any questions, please contact the coding team at: 
  ${answers.email}`;
}

module.exports = generateMarkdown;

