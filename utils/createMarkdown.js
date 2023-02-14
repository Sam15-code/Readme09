function createMarkdown (data){
    return `
# ${data.title}

## ${renderBadge(data.license)}


## Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Contributers](#contributers)

* [Testing](#testing)

* [License](#license)

* [Usage](#usage)

* [Email](#email)

* [Username](#username)






### Description
${data.description}


### Installation
${data.instal}


### Contributers
__${data.readme}__

### Testing
${data.testing}

### License
${data.license}
${renderLicenseDetails(data.license)}

### Usage
${data.usage}

### Email
If you have anyquestions regarding this project reach me at
${data.email}

### Username
Please check my other projects.
[Github Profile](https://github.com/${data.github})






    `
}


function renderBadge(license){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

function renderLicenseDetails(license){
    return `[License Info](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)`
}

module.exports = createMarkdown