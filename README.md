# COVID-19 Tracker
A desktop Node.js app to track and get COVID-19 updates on desktop through notifications.
Also stores stats through constant snapshots
Uses [Worldometers](https://www.worldometers.info/coronavirus/) in the background.

### Prerequisites

1. [Node.js](https://nodejs.org/en/)
2. NPM (Comes bundled with Node.js)
3. pm2 (Optional) 
```
npm install pm2 -g
```

## Getting Started
1. Clone this repo
```
git clone https://github.com/harshit-sinha-developer/covid-19-tracker.git
```
2. Run npm install
```
npm install
```
3. Get data as notifications
```
npm start
```
4. Schedule notifications
```
npm run schedule
```

## Configuration
1. Select list of countries to get notifications for -
Uncomment countries in the [enabled_countries_regions.js](https://github.com/harshit-sinha-developer/covid-19-tracker/blob/master/data/enabled_countries_regions.js)

2. Select status to display -
Uncomment fields in `notificationFields` property in [config.js](https://github.com/harshit-sinha-developer/covid-19-tracker/blob/master/config.js)

3. Cron scheduling
Update the field `cronScheduler` in [config.js](https://github.com/harshit-sinha-developer/covid-19-tracker/blob/master/config.js)
Refer - https://support.acquia.com/hc/en-us/articles/360004224494-Cron-time-string-format

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Harshit Sinha** - *Initial work* - [Github](https://github.com/harshit-sinha-developer)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Worldometers](https://www.worldometers.info/coronavirus/)