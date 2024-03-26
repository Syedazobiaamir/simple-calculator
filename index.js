import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "Enter first number", type: "number", name: "firstName" },
    { message: "Enter second number", type: "number", name: "secondName" },
    { message: "select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"]
    }
]);
//conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstName + answer.secondName);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstName - answer.secondName);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstName * answer.secondName);
}
else if (answer.operator === "division") {
    console.log(answer.firstName / answer.secondName);
}
else {
    console.log("please valid correct operator");
}
