import dotenv from 'dotenv';
import B2 from 'backblaze-b2';
import { readFile } from 'node:fs/promises';

import { uploadImage, getUploadUrl } from './lib';

dotenv.config();

const applicationKeyId = process.env.KEY_ID;
const bucketId = process.env.BUCKET_ID;
const bucketName = process.env.BUCKET_NAME;
const applicationKey = process.env.APPLICATION_KEY;

const b2 = new B2({
  applicationKeyId,
  applicationKey,
});

//===================================
async function main() {
  try {
    const authResponse = await b2.authorize();
    const { downloadUrl } = authResponse.data;

    // /**  Upload Image */
    const filePath = './images/gunoj.jpg';
    const name = 'cod3a/gunoj_in_bucket_brazil.jpg';
    const data = await readFile(filePath);

    const { authorizationToken, uploadUrl } = await getUploadUrl(bucketId, b2);

    const token = authorizationToken;

    const response = await uploadImage(name, token, uploadUrl, data, b2);

    // here we can store the url in any place to show the images later
    console.log(`${downloadUrl}/file/${bucketName}/${response.fileName}`);
  } catch (err) {
    console.error('Error', err);
  }
}

main();
