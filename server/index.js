const CronJob = require('cron').CronJob;
const fetchYahoo = require('./tasks/fetch-yahoo');

var stocks = new CronJob('*/90 * * * *',fetchYahoo, null, true, 'America/Los_Anegeles');
