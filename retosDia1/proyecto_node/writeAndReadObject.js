const fs = require('fs');
const { rawListeners } = require('process');

function writeAndRead(path, obj) {

    fs.writeFile(path, JSON.stringify(obj, null, 2), (err) => {
        if (err) {
            console.error("No se ha podido guardar el fichero");
            return;
        }

        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                console.error("No se ha podido leer el fichero");
                return;
            }

            const readArch = JSON.parse(data);

            console.log(readArch);
        });
    });
}

//writeAndRead("./ejem.json", { calle: "Teruel", numero: 8 });
module.exports = writeAndRead;