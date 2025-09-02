const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.TRAVELPROJECT_KEY,
  secretAccessKey: process.env.TRAVELPROJECT_SECRETKEY,
});

const ddb = new AWS.DynamoDB();

module.exports = ddb;
