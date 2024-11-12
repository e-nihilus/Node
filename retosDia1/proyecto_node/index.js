const writeAndRead = require('./writeAndReadObject');
const readConsole = require('./readConsole');

readConsole((userData) => {
    writeAndRead("./ejem.json", userData);
});