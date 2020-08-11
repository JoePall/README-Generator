const { makeBadge, ValidationError } = require('badge-maker');

// function to generate markdown for README
function generateMarkdown(data) {
    let { title, description, github, repo, installation, usage, license, contributing, tests, questions } = data;
    
    const licenseBadge = makeBadge({
        label: 'license',
        message: license,
        color: '#322200',
    });

    const featuresBadge = makeBadge({
        message: 'features',
        color: '#1e2b0d',
    });

    const issuesBadge = makeBadge({
        message: 'issues',
        color: '#332013',
    });

    console.log(description.length);

    return `<a href="https://github.com/${github}/${repo}/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc">${featuresBadge}</a><a href="https://github.com/${github}/${repo}/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Abug">${issuesBadge}</a>${licenseBadge}
<h1>${title}</h1>
${description.length != 0 ? "## Description" + "\n<p>" + description + "</p>\n\n" : ""}${installation.length != 0 ? "## Installation" + "\n<p>" + installation + "</p>\n\n" : ""}${usage.length != 0 ? "## Usage" + "\n<p>" + usage + "</p>\n\n" : ""}${tests.length != 0 ? "## Tests" + "\n<p>" + tests + "</p>\n\n" : ""}${questions.length != 0 ? "## Questions" + "\n<p>" + questions + "</p>\n\n" : ""}${contributing.length != 0 ? "## Contributing" + "\n<p>" + contributing + "</p>\n\n" : ""}${license.length != 0 ? "## License" + "\n<p>" + license + "</p>\n\n" : ""}
`;
}


    


module.exports = generateMarkdown;