const fs = require('fs').promises;

module.exports.createDataSnapshot = async function(data) {
    await fs.writeFile('./data/snapshots/' + (new Date()).getTime() + '.json', JSON.stringify(data), { encoding: 'utf-8'}); 
}