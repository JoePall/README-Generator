const { makeBadge, ValidationError } = require('badge-maker');

// function to generate markdown for README
function generateMarkdown(data) {
    let { title, description, github, email, repo, installation, usage, license, contributing, tests } = data;
    
    const licenseBadge = makeBadge({
        label: 'license',
        message: license,
        color: '#322200',
        style: 'flat',
    });

    return `[![Enhancements](https://img.shields.io/github/issues/${github}/${repo}/enhancement.svg)](https://github.com/${github}/${repo}/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement+sort%3Areactions-%2B1-desc)
[![Bugs](https://img.shields.io/github/issues/${github}/${repo}/bug.svg)](https://github.com/${github}/${repo}/issues?utf8=✓&q=is%3Aissue+is%3Aopen+label%3Abug)
${licenseBadge}

# ${title}

${description.length > 0 ? "## Description" + "\n\n<p>" + description.replace(/\n/g, "\n\n") + "</p>\n\n" : ""}${installation.length > 0 ? "## Installation" + "\n\n<p>" + installation.replace(/\n/g, "\n\n") + "</p>\n\n" : ""}${usage.length > 0 ? "## Usage" + "\n\n<p>" + usage.replace(/\n/g, "\n\n") + "</p>\n\n" : ""}${tests.length > 0 ? "## Tests" + "\n\n<p>" + tests.replace(/\n/g, "\n\n") + "</p>\n\n" : ""}

## Questions

<p>Contact me at <a href="mailto:${email}">${email}</a> or checkout my GitHub Profile at <a href="https://github.com/${github}">${github}</a>.</p>

${contributing.length > 0 ? "## Contributing" + "\n\n<p>" + contributing.replace(/\n/g, "\n\n") + "</p>\n\n" : ""}${license.length > 0 ? "## License" + "\n\n<p>" + license.replace(/\n/g, "\n\n") + "</p>\n\n" : ""}
`;
}

module.exports = generateMarkdown;