const fs = require('fs/promises');
const readline = require('readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

function question(query) {
    return new Promise((resolve) => {
        rl.question(query, resolve);
    });
}

//------con Then/Catch--------

function readConsole() {
    return question("Cuál es tu nombre? ")
    .then(name => {
        return question("Cuál es tu apellido? ")
        .then(surname => {
            return question("Cuál es tu edad? ")
            .then(age => {
                rl.close();
                return { name, surname, age };
            });
        });
    })
    .catch(error => {
        console.error("Error:", error);
        console.log(error); 
        rl.close();
    });
}

//-------con async/await--------

// async function readConsole(promise) {
//     try {
//         const name = await question("Cuál es tu nombre? ");
//         const surname = await question("Cuál es tu apellido? ");
//         const age = await question("Cuál es tu edad? ");
//         const person = { name, surname, age };
//         promise(person);
//     } catch (error) {
//         console.error("Error:", error);
//         console.log(error);
//     }
// }

// }

module.exports = readConsole;