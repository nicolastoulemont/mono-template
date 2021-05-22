import cron from 'node-cron'

export const CRON_EXAMPLE = cron.schedule(
	'* * * * *',
	async () => {
		console.log('cron example running')
	},
	{ scheduled: false }
)
