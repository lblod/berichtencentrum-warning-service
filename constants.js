export const STATUS_BUSY = 'http://redpencil.data.gift/id/concept/JobStatus/busy';
export const STATUS_SCHEDULED = 'http://redpencil.data.gift/id/concept/JobStatus/scheduled';
export const STATUS_SUCCESS = 'http://redpencil.data.gift/id/concept/JobStatus/success';
export const STATUS_FAILED = 'http://redpencil.data.gift/id/concept/JobStatus/failed';

export const JOB_GRAPH = 'http://mu.semte.ch/graphs/harvesting';
export const EMAIL_GRAPH = 'http://mu.semte.ch/graphs/system/email'

export const JOB_TYPE = 'http://vocab.deri.ie/cogs#Job';
export const TASK_TYPE = 'http://redpencil.data.gift/vocabularies/tasks/Task';
export const ERROR_TYPE= 'http://open-services.net/ns/core#Error';

export const JOB_URI_PREFIX = 'http://redpencil.data.gift/id/job/';
export const TASK_URI_PREFIX = 'http://redpencil.data.gift/id/task/';
export const ERROR_URI_PREFIX = 'http://redpencil.data.gift/id/jobs/error/';
export const EMAIL_URI_PREFIX = 'http://data.lblod.info/id/emails/';
export const CONTAINER_URI_PREFIX = 'http://redpencil.data.gift/id/dataContainers/'

export const SERVICE_NAME = 'http://lblod.data.gift/services/berichtencentrum-warning-service';
export const JOB_OPERATION = 'http://lblod.data.gift/id/jobs/concept/JobOperation/berichtencentrumWarning';
export const CHECK_MESSAGES_OPERATION = 'http://lblod.data.gift/id/jobs/concept/JobOperation/checkMessages';

export const ABB_URI = 'http://data.lblod.info/id/bestuurseenheden/141d9d6b-54af-4d17-b313-8d1c30bc3f5b';

export const PREFIXES = `
  PREFIX mu: <http://mu.semte.ch/vocabularies/core/>
  PREFIX task: <http://redpencil.data.gift/vocabularies/tasks/>
  PREFIX dct: <http://purl.org/dc/terms/>
  PREFIX prov: <http://www.w3.org/ns/prov#>
  PREFIX nie: <http://www.semanticdesktop.org/ontologies/2007/01/19/nie#>
  PREFIX ext: <http://mu.semte.ch/vocabularies/ext/>
  PREFIX oslc: <http://open-services.net/ns/core#>
  PREFIX cogs: <http://vocab.deri.ie/cogs#>
  PREFIX adms: <http://www.w3.org/ns/adms#>
  PREFIX nmo: <http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#>
  PREFIX nfo: <http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#>
  PREFIX schema: <http://schema.org/>
`;

export const OUTBOX = 'http://data.lblod.info/id/mail-folders/2';

export const WARNING_EMAIL_SUBJECT = 'No messages sent in Berichtencentrum';

export const WARNING_EMAIL_TEXT = `
Hello,

No activity was detected in the Berichtencentrum since this morning.
You might want to double check if everything is running properly.

Have a nice day,
Redpencil.io
`;

export const WARNING_EMAIL_HTML = `
<p>Hello,</p>
<p>No activity was detected in the Berichtencentrum since this morning.</p>
<p>You might want to double check if everything is running properly.</p>
<p>Have a nice day,</p>
<p>Redpencil.io</p>
`;
