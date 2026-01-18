# n8n Integration

DreamHub exposes two endpoints for n8n workflows.

## Trigger Endpoint

`POST /api/n8n/trigger`

Example payload:

```json
{
  "event": "job.created",
  "jobId": "job_123",
  "prompt": "Generate a neon city skyline"
}
```

The API responds with `{ "received": true }` and echoes the payload.

## Callback Endpoint

`POST /api/n8n/callback`

Example payload:

```json
{
  "event": "job.completed",
  "jobId": "job_123",
  "resultUrl": "https://example.com/result.png"
}
```

The API responds with `{ "acknowledged": true }` and echoes the payload.

## Suggested Workflow

1. Use the trigger endpoint in an n8n Webhook node when a job is queued.
2. Run the workflow (e.g. call external providers).
3. Send results back to DreamHub with the callback endpoint.
