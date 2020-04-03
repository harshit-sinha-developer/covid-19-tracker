const Crawler = require('crawler');
const HEADERS = ['country', 'total_cases', 'new_cases', 'total_deaths', 'new_deaths', 'total_recovered', 'active_cases', 'serious', 'total_cases_per_million', 'deaths_per_million'];
const worldMeterCrawler = new Crawler({
    maxConnections: 10
});

/**
 * returns {Promise<Object[]>}
 */
module.exports = async function() {
    return new Promise((resolve, reject) => {
        return worldMeterCrawler.queue([{
            uri: 'https://www.worldometers.info/coronavirus/#countries',
            callback: (error, res, done) => {
                const data = [];
                if(error){
                    done();
                    return reject(error);
                }
                const $ = res.$;
                const worldData = {};
                $("#main_table_countries_today tbody").first().find("tr").each((i, rowEle) => {
                    const row = {};
                    $(rowEle).find("td").each((j, cellEle) => {
                        let cellData = $(cellEle).text();
                        if(j != 0) {
                            cellData = cellData.replace('+', '');
                            cellData = cellData.replace(/,/g, '');
                            cellData = cellData.trim();
                            cellData = cellData && cellData.length ? Number(cellData) : 0
                            worldData[HEADERS[j]] = (worldData[HEADERS[j]] || 0) + cellData
                        } 
                        row[HEADERS[j]] = cellData;
                    });
                    data.push(row);
                });
                delete worldData.total_cases_per_million;
                delete worldData.deaths_per_million;
                done();
                return resolve({countries: data, worldData, time: (new Date()).toString()});
            }
        }])
    });
}