const scraper = require('./scraper');
const dataLayer = require('./data_layer');
const notify = require('./notify');

async function main() {
    let data = await scraper();
    notify(data);
    await dataLayer.createDataSnapshot(data);
}

module.exports = main;

if(require.main == module) {
    main();
}