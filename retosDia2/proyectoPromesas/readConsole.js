const fs = require('fs/promises');
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

function askQuestion(query) {
    return rl.question(query);
}

//------con Then/Catch--------

// function readConsole(callback) {

//     const person = {name:"", surname:"", age:"" };
    
//     rl.question("Cuál es tu nombre? ")
//     .then((names)=>{
//          person.name = names;
//         return rl.question("Cuál es tu apellido? ")
//     })
//     .then((surname)=>{
//         person.surname = surname;
//         return rl.question("Cuál es tu edad? ")
//     })
//     .then((age)=>{
//         person.age = age;
//         rl.close();
//         return person
//     })

//     .catch((error)=>{
//         console.log("ha habido un error");
//         console.log(error);
//         rl.close();
//     });
// };

// readConsole();


//-------con async/await--------

async function readConsole() {
    try {
        const name = await askQuestion("Cuál es tu nombre? ");
        const surname = await askQuestion("Cuál es tu apellido? ");
        const age = await askQuestion("Cuál es tu edad? ");
        const person = { name, surname, age };
        rl.close();
        return person
    } catch (error) {
        console.error("Error:", error);
        console.log(error);
        rl.close();
    }
}


// readConsole((person) => {console.log(person);});


module.exports = readConsole;