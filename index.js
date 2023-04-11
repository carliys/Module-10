 const inq = require("inquirer");
const path = require("path");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager")
const renderTeam = require("./src/createTeam");
const createTeam = require("./src/createTeam");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

const teamMembers = [];
const idsArray = [];

console.log(
    "\nWelcome to the band generator!\nUse `npm run reset` to reset the dist/ folder\n"
  );

  const appMenu = () => {
    const createTeam = () => {
        inq
        .prompt([
            {
                type:"list",
                name:"teamMemberChoice",
                message:"What position would you like?",
                choices:[
                "Engineer",
                "Intern",
                "Manager",
                "I dont want to hire more employees (honestly my best work so far definitely 99/100 :))"
                ]
            }
        ])
            .then((response) => {
                switch (response.teamMemberChoice) {
                    case "Engineer":
                        addEngineer();
                        break;
                    case "Intern":
                        addIntern();
                        break;
                    case "Manager":
                        addManager();
                        break;
                    default:
                        buildTeam();
                }
            });
    };

    function addEngineer() {
        inq
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the Engineers name?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a name!";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the Engineers Id?",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        if (idsArray.includes(answer)) {
                            return "This ID is already taken. lease enter a diffrent ID number.";
                        } else {
                            return true;
                        }
                    }
                    return "Please enter a positive number greater than zero!";
                }
            },
            {
               type: "input",
               name: "engineerEmail",
               message: "What is your Email?",
               validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an Email for your Engineer!";
               }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'Enter your Github username.',
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log('Please enter your Github username!');
                        return false;
                    }
                }
            }
        ])
        .then((response) => {
            const engineer = new Engineer(
               response.engineerName,
               response.engineerId,
               response.engineerEmail,
               response.engineerGithub
            );
            teamMembers.push(engineer);
            idsArray.push(response.engineerId);
            createTeam();
        })
    }

    function addIntern() {
        inq
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the Interns name?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a name!";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern Id?",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        if (idsArray.includes(answer)) {
                            return "This ID is already taken. lease enter a diffrent ID number.";
                        } else {
                            return true;
                        }
                    }
                    return "Please enter a positive number greater than zero!";
                }
            },
            {
               type: "input",
               name: "internEmail",
               message: "What is your Email?",
               validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an Email for your Intern!";
               }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'Enter your school name.',
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        console.log('Please enter your school name!');
                        return false;
                    }
                }
            }
        ])
        .then((response) => {
            const intern = new Intern(
               response.internName,
               response.internId,
               response.internEmail,
               response.internSchool
            );
            teamMembers.push(intern);
            idsArray.push(response.internId);
            createTeam();
        });
    }

    function addManager() {
        inq
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the Managers name?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a name!";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the managers Id?",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        if (idsArray.includes(answer)) {
                            return "This ID is already taken. lease enter a diffrent ID number.";
                        } else {
                            return true;
                        }
                    }
                    return "Please enter a positive number greater than zero!";
                }
            },
            {
               type: "input",
               name: "managerEmail",
               message: "What is your Email?",
               validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an Email for your Engineer!";
               }
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'Enter your office number.',
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log('Please enter your office number!');
                        return false;
                    }
                }
            },
        ])
        .then((response) => {
            const manager = new Manager(
               response.managerName,
               response.managerId,
               response.managerEmail,
               response.managerOfficeNumber
            );
            teamMembers.push(manager);
            idsArray.push(response.managerId);
            createTeam();
        })
    }

    const buildTeam = () => {
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, renderTeam(teamMembers), "utf-8");
    };

    createTeam();
  }; 

  appMenu();