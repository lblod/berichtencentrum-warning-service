import { app, errorHandler } from 'mu';
import { CronJob } from 'cron';
import { FIRST_CHECK_CRON, SECOND_CHECK_CRON } from './config';
import { STATUS_BUSY, STATUS_SUCCESS, STATUS_FAILED } from './constants';
import {
  createJob,
  createTask,
  updateStatus,
  getNumberOfSentMessagesSince,
  createWarningEmail,
  addError
} from './queries';

app.get('/', function( req, res ) {
  res.send('Hello from berichtencentrum-warning :)');
} );

checkRequiredEnv();

// Cron jobs

new CronJob(FIRST_CHECK_CRON, async function() {
  const now = new Date().toISOString();
  console.log(`First check triggered by cron job at ${now}`);
  try {
    await checkSentMessages();
  } catch (err) {
    console.log(`An error occurred during first check at ${now}: ${err}`)
  }
}, null, true, "Europe/Brussels");

new CronJob(SECOND_CHECK_CRON, async function() {
  const now = new Date().toISOString();
  console.log(`Second check triggered by cron job at ${now}`);
  try {
    await checkSentMessages();
  } catch (err) {
    console.log(`An error occurred during first check at ${now}: ${err}`)
  }
}, null, true, "Europe/Brussels");

// Internal logic

function checkRequiredEnv() {
  if (!process.env.EMAIL_FROM || !process.env.EMAIL_TO) {
    throw new Error(
      "For this service to work the environment variables EMAIL_FROM and EMAIL_TO should be configured.\n");
  }
}

/**
 * Checks if messages have been sent through the berichtencentrum during the business day until now
 */
async function checkSentMessages() {
  const jobUri = await createJob();
  const taskUri = await createTask(jobUri);
  try {
    await updateStatus(jobUri, STATUS_BUSY);
    await updateStatus(taskUri, STATUS_BUSY);

    const now = new Date();
    const startOfBusinessDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0); // today at 8h
    const numberOfSentEmails = await getNumberOfSentMessagesSince(startOfBusinessDay);

    console.log(`${numberOfSentEmails} messages have been sent today.`);
    if (numberOfSentEmails === 0) {
      await createWarningEmail(taskUri);
    }

    await updateStatus(jobUri, STATUS_SUCCESS);
    await updateStatus(taskUri, STATUS_SUCCESS);
  } catch (err) {
    console.log(`An error occurred when checking messages: ${err}`);
    await addError(jobUri, err);
    await updateStatus(jobUri, STATUS_FAILED);
    await updateStatus(taskUri, STATUS_FAILED);
  }
}

app.use(errorHandler);
