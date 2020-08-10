const { makeBadge, ValidationError } = require('badge-maker');

// function to generate markdown for README
function generateMarkdown(data) {
    console.log("generateMarkdown: started");
    let { title, description, tableOfContents, installation, usage, license, contributing, tests, questions } = data;

    console.log("makeBadge: started");
    const licenseBadge = makeBadge({
        label: 'license',
        message: license,
        color: 'red',
    });
    console.log("makeBadge: ended");

    console.log("generateMarkdown: ended");
    return `${licenseBadge}
    
# ${title}
    
    ${description}
    
${installation !== "" ? ("## Installation" + "\n\n\t" + installation) + "\n" : ""}
${usage !== "" ? ("## Usage" + "\n\n\t" + usage) + "\n" : ""}
${tests !== "" ? ("## Tests" + "\n\n\t" + tests) + "\n" : ""}
${questions !== "" ? ("## Questions" + "\n\n\t" + questions) + "\n" : ""}
${contributing !== "" ? ("## Contributing" + "\n\n\t" + contributing) : ""}`;
}

module.exports = generateMarkdown;
