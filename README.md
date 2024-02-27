# Timestamp Microservice

This is a simple web application that provides an API endpoint for converting Unix timestamps and natural language dates to their corresponding Unix timestamps and UTC date strings. This project meets the requirements of the freeCodeCamp API and Microservices certification.

## API Endpoint

The API endpoint `/api/:date` accepts a date string in either Unix timestamp format (a number representing milliseconds since January 1, 1970) or natural language format (e.g., "December 25, 2015"). It returns a JSON object containing the Unix timestamp and the corresponding UTC date string.

For example, a request to `/api/1451001600000` or `/api/December%2025,%202015` would both return:

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

## Technologies used
- Node.js
- Express.js

## Deployment
This project is deployed using Glitch and is accessible at https://timestamp-microservice-sf.glitch.me/

## API Usage
- To convert a Unix timestamp to UTC date: `/api/:timestamp`
- To convert a natural language date to UTC date: `/api/:date`

## Example
- Request: `/api/1451001600000`
- Response:
```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```
