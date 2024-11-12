const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

function readConsole(callback) {

    rl.question("Cuál es tu nombre? ", (name) => {
        rl.question("Cuál es tu apellido? ", (surname) => {
            rl.question("Cuál es tu edad? ", (age) => {
                
                const person = { name, surname, age};
                callback(person);
                rl.close();
            });
        });
    });
}

//readConsole((person) => {console.log(person);});
module.exports = readConsole;



