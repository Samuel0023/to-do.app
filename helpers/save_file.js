const fs = require('fs');
const archivo = './db/data.json';

const saveDB = (data) => {


    fs.writeFileSync(archivo, data);

}
const readDB = () => {
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    return JSON.parse(info);

}
const exist_db = () => {
    return fs.existsSync(archivo);
}
module.exports = { saveDB, readDB, exist_db };