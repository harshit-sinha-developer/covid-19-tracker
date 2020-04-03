const notifier = require('node-notifier');

const enabledCountries = require('./data/enabled_countries_regions');
const { notificationFields } = require('./config');

const fieldDisplay = {
    'total_cases': 'Total', 
    'new_cases': 'New', 
    'total_deaths': 'Deaths', 
    'new_deaths': 'New Deaths'
}
module.exports = data => {
    if(enabledCountries.includes('World')) {
        data.countries.push({
            country: 'World', 
            ...data.worldData
        })
    }
    let enabledData = data.countries
        .filter(ele => enabledCountries.includes(ele.country))
        .map(ele => {
            const filteredObj = {};
            filteredObj.country = ele.country;
            notificationFields.forEach(field => {
                filteredObj[field] = ele[field];
            });
            return filteredObj;
        });
    
    
    
    for(let i = 0; i < enabledData.length; i++) {
        setTimeout(() => {
            notifier.notify({
                title: 'COVID-19 Update',
                message: formatMessage(enabledData[i]),
                sound: true, // Only Notification Center or Windows Toasters
                wait: true // Wait with callback, until user action is taken against notification, does not apply to Windows Toasters as they always wait or notify-send as it does not support the wait option
            });
        }, i * 4000);
    }
    
}

function formatMessage(ele) {
    let messageString = '';
    messageString += `${ele.country}, `;
    Object.keys(ele).forEach(field => {
        if(field == 'country') return;
        messageString += `${(fieldDisplay[field] ? fieldDisplay[field] : field)}: ${ele[field]}, `
    });
    messageString = messageString.substr(0, messageString.length - 2);
        
    return messageString;
}
