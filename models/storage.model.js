const sdk = require('node-appwrite');
const mongoose = require("mongoose");

const API = process.env.API_ENDPOINT;
const PROJECT_ID = process.env.PROJECT_ID;
const API_SECRET = process.env.API_SECRET;

const client = new sdk.Client().setEndpoint(API).setProject(PROJECT_ID).setKey(API_SECRET);

const storage = new sdk.Storage(client);

const fileSchema = mongoose.Schema({
  fileName : { type: String, required: true },
  date : { type: Date, default: Date.now },
  fileID : { type: String, required: true }
});

const fileModel = mongoose.model("Que_bank_files_db", fileSchema);

module.exports= {storage, fileModel};