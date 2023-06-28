import express, { Request, Response } from 'express';
import cors from 'cors';
import {
  uploadFiles,
  uploadFilesToDisk,
  uploadSingleFile,
  multerAnyInDisk,
  multerAnyInMemory,
  multerSingleInMemory,
} from './middleware';
import { testMedia, testSIngleFile } from './backblaze.controller';

const app = express();

app.use(cors());

//app.post('/api/upload', multerUploads, uploadFiles, testMedia);

app.post('/single', multerSingleInMemory, uploadSingleFile, testSIngleFile);
app.post('/files-to-backblaze', multerAnyInMemory, uploadFiles, testMedia);
app.post('/files-to-disk', multerAnyInDisk, uploadFilesToDisk, testMedia);

app.listen(3000, () => {
  console.log('listening');
});
