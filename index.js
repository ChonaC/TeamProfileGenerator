const inquirer = require('inquirer');
const fs = require('fs');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the employees ID number?',
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'What is the employees email address?',  
        },
        {
            type: 'list',
            choices: ["Engineer", "Intern", "Manager" ],
            name: 'employeeType',
            message: 'Which employee would you like to add?',
        },
    ]);
};

const engineerQ = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerType',
            message: 'What is the employees github username?',
        },
    ]);
};

const internQ = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internType',
            message: 'What school did this employee attend to?',
        },
    ]);
};

const managerQ = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerType',
            message: 'What is the employees office number',
        },
    ]);
};





const finalQ = () => {
    return inquirer.prompt([
        {
            type: 'list',
            choices: ["Yes", "No"],
            name: 'finalType',
            message: 'Would you like to add another employee?',
        },
    ]);
};



const generateHtml = ({employeeName, employeeId, employeeEmail, employeeType}) => 
`
<!DOCTYPE html>
<html>
<head> 
<title>Employee Teams</title>
</head>
<body>

<h1>Employee Roster</h1>
 
<h2>${answers.employeeName}</h2>
<p>${answers.employeeId}</p>
<p>${answers.employeeEmail}</p>
<p>${answers.employeeType}</p>

</body>
</html>

`

const finalStart = () => {
    finalQ()
        .then((answers) => {
            if (answers.finalType === 'Yes') {
                questions();
            }
            if (answers.finalType === 'No') {
                console.log('Thank you for updating the employee roster.')
            }
        })
};



const init = () => {
    questions()
        .then((answers) => { 
            console.log(answers)
            if (answers.employeeType === 'Engineer') {
                engineerQ()
                .then(() => {
                    finalStart();
                });
            };
            if (answers.employeeType === 'Intern') {
                internQ()
                .then(() => {
                    finalStart();
                    });
            };
            if (answers.employeeType === 'Manager') {
                managerQ()
                .then(() => {
                    finalStart();
                });
            };

            
            
        })
        .then((answers) => fs.appendFile('index.html', generateHtml(answers)))
        .catch((err => console.error(err)))
}; 



init();


//  Change questions()
// fix answer to then.name(example)