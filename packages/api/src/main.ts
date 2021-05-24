require('dotenv').config()
import cluster from 'cluster'
import os from 'os'
import { serve } from './index'
import { __prod__ } from './constants'
import prisma from './lib/prisma'

if (__prod__) {
	// Use all available cpus in prod to spin up multiple instance of the api
	const cpus = os.cpus().length

	if (cluster.isMaster) {
		console.log(`Master ${process.pid} is running`)

		// Fork workers.
		for (let i = 0; i < cpus; i++) {
			cluster.fork()
		}

		cluster.on('exit', (worker) => {
			console.log(`worker ${worker.process.pid} died`)
		})
	} else {
		serve().finally(async () => await prisma.$disconnect())
	}
} else {
	serve().finally(async () => await prisma.$disconnect())
}
