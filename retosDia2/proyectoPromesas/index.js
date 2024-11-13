const readConsole = require('./readConsole')
const writeAndRead = require('./readAndWrite')


//------con Then/Catch--------
readConsole()
    .then((userData) => {
        return writeAndRead("./ejem.json", userData);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

//-------con async/await--------

async function persona() {
    try {
        await readConsole();
    } catch (error) {
        console.error('Error:', error);
    }
}

persona();