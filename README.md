# berichtencentrum-warning-service

Service that generates warning emails when no messages are sent through the berichtencentrum during
the business day.

Two cron jobs can be configured with cron jobs. Each one checks if messages have been
sent from the beginning of the business day (8h) to the time at which the cron job runs. If no
messages were sent, the service generates a warning email.

## Installation

To add the service to your `mu.semte.ch` stack, add the following snippet to docker-compose.yml:

```yaml
services:
  berichtencentrum-warning:
    image: lblod/berichtencentrum-warning-service:x.x.x
    environment:
      EMAIL_FROM: "from@test.com"
      EMAIL_TO: "to@test.com"
```

### Environment variables

Provided [environment variables](https://docs.docker.com/compose/environment-variables/) by the service. These can be added in within the docker declaration.

| Name                | Description                              | Default                         |
| ------------------- | ---------------------------------------- | ------------------------------- |
| `EMAIL_FROM`        | Email address from which emails are sent |                                 |
| `EMAIL_TO`          | Email address to which emails are sent   |                                 |
| `FIRST_CHECK_CRON`  | The first cron job rule (CET)            | `0 0 14 * * 1-5`                |
| `SECOND_CHECK_CRON` | The second cron job rule (CET)           | `0 0 16 * * 1-5`                |

## Development

For a more detailed look in how to develop a microservices based on
the [mu-javascript-template](https://github.com/mu-semtech/mu-javascript-template), we would recommend
reading "[Developing with the template](https://github.com/mu-semtech/mu-javascript-template#developing-with-the-template)"

### Developing in the `mu.semte.ch` stack

Paste the following snip-it in your `docker-compose.override.yml`:

````yaml  
berichtencentrum-warning:
  image: semtech/mu-javascript-template:1.4.0
  environment:
    NODE_ENV: "development"
  volumes:
    - /absolute/path/to/your/sources/:/app/
````
