import axios from 'axios';
import * as dotenv from 'dotenv';
import * as functions from 'firebase-functions';

dotenv.config()
const DEPLOY_HOOKS_URL = process.env.PORTFOLIO_DEPLOY_HOOKS!

export const VercelDeployHooks = functions
	.region('asia-northeast1')
	.pubsub.schedule('every 24 hours')
	.timeZone('Asia/Tokyo')
	.onRun(async context => {
		functions.logger.info('VercelDeployHooks：onRun！')
		await axios.get(DEPLOY_HOOKS_URL)
		return null
	})
