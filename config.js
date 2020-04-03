module.exports = {
    // Uncomment fields to display in notification
    notificationFields: ['total_cases', 'new_cases', /*'total_deaths', 'new_deaths', 'total_recovered', 'active_cases', 'serious', 'total_cases_per_million', 'deaths_per_million'*/],
    
    // Refer: https://support.acquia.com/hc/en-us/articles/360004224494-Cron-time-string-format
    cronScheduler: '0 */4 * * *'
}