import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "q1",
        message: "waht is your name",
        type: 'input'
    },
    {
        name: "q2",
        message: "waht is your gender",
        type: "list",
        choices: ["male", "female"]
    }]);
console.log(answer.q1);
console.log(answer.q2);
