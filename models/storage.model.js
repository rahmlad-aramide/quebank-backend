const sdk = require('node-appwrite');

const API = process.env.API_ENDPOINT;
const PROJECT_ID = process.env.PROJECT_ID;
const API_SECRET = process.env.API_SECRET;

const client = new sdk.Client().setEndpoint(API).setProject(PROJECT_ID).setKey(API_SECRET);

const storage = new sdk.Storage(client);

module.exports= storage;