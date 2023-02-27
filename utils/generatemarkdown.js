// function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents:
    1. [Description](#description)
    2. [Installation](#Installation)
    3. [Usage](#Usage)
    4. [Contributing](#Contributing)
    5. [Tests](#Tests)
    6. [License](#License)
    7. [GitHub](#GitHub)
    8. [E-mail](#E-mail)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## License
  ${licenseBadge(data)}
  ## GitHub
  ${data.github}
  ## E-mail
  ${data.email}`;
}
module.exports = generateMarkdown;
