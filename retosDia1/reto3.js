const fs = require('fs');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

function person() {
    rl.question("Cuál es tu nombre? ", (name) => {
        rl.question("Cuál es tu apellido? ", (surname) => {
            rl.question("Cuál es tu edad? ", (age) => {
                
                const person = { name, surname, age};
                const fileName = "person.json";

                if (fs.existsSync(fileName)) {
                    fs.unlinkSync(fileName);
                }

                fs.writeFile(fileName, JSON.stringify(person, null, 2), (error) => {
                    if (error) {
                        console.error("No se ha podido guardar el fichero");
                        return;
                    }

                    console.log("Archivo guardado");

                    fs.readFile(fileName, 'utf8', (error, data) => {
                        if (error) {
                            console.error("No se ha podido leer el fichero");
                            return;
                        }

                        const readArch = JSON.parse(data);
                        console.log(readArch);

                        rl.close();
                    });
                });
            });
        });
    });
}

person();