# team-profile-generator

Using command line prompts this app generates a profile of your team of employees for a quick reference of basic information.

![team profile generator walkthrough gif](team-prof-gen-sd.gif)

## Description

I wanted to create a command line tool to enter info about my team, and autopopulte a web page with that information.
I also wanted to use test driven development by creating tests to make sure the methods on each employee class worked.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Development](#Development)
- [Github Info](#github)
- [Contact](#contact)
- [License](#license)

## Installation

You can fork this repo and clone it to your machine. Run 'node index' in the file path of the parent folder and follow the prompts. You will need Node.js to be already installed to run. If you do not use the package.json or otherwise do not have inquirer, jest, or the node modules installed you will need to run the following:

npm init -y
npm i inquirer
npm i jest

## Usage

Navigate to the main directory in terminal and run 'node index'. As you can see in the walkthrough, follow the prompts to enter your information as manager first. Next choose whether you want to add an Engineer or Intern. Again follow the prompts until finished with that employee. You can do this indefinitely until you choose Finish after entering your last employee.

## Contributing

No other contributors

## Tests

Tests are stored in the folder labeled '**tests**'.
You can run these tests by running 'npm run test' in the command line in terminal while in the main directory.

## Development

Styling could be improved

## Github Info

cgtodd85

## Contact

This project was created by Connor Todd.
Please contact me at cgtodd85@gmail.com with any questions.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
