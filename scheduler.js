const cron = require('node-cron');

const main = require('./main');
const cronSchedulerString = require('./config').cronScheduler;

cron.schedule(cronSchedulerString, () => {
    main();
});
