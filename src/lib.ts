import Backblaze from 'backblaze-b2';

type B2 = Backblaze;

export async function uploadImage(
  fileName: string,
  uploadAuthToken: string,
  uploadUrl: string,
  data: any,
  b2: B2
) {
  try {
    const params = {
      uploadUrl,
      uploadAuthToken,
      fileName,
      data,
    };

    let response = await b2.uploadFile(params);
    return response.data;
  } catch (err) {
    console.log('Error:', err);
  }
}

export async function getUploadUrl(bucketId: string, b2: B2) {
  try {
    let response = await b2.getUploadUrl({ bucketId });

    return response.data;
    // {
    //   authorizationToken: '',
    //   bucketId: '',
    //   uploadUrl: ''
    // }
  } catch (err) {
    console.log('Error:', err);
  }
}

export async function listFileNames(b2: B2, bucketId) {
  try {
    let response = await b2.listFileNames({
      bucketId,
      startFileName: '',
      maxFileCount: 100,
      delimiter: '',
      prefix: '',
    });
    //const fileNames = response.data.files.map((file) => file.fileName);
    return response.data;
  } catch (err) {
    console.log('Error:', err);
  }
}

export async function getBucket(bucketName, b2: B2) {
  try {
    let response = await b2.getBucket({ bucketName });
    return response.data;
    // {
    //   buckets: [
    //     {
    //       accountId: '',
    //       bucketId: '',
    //       bucketInfo: {},
    //       bucketName: '',
    //       bucketType: '',
    //       corsRules: [Array],
    //       defaultServerSideEncryption: [Object],
    //       fileLockConfiguration: [Object],
    //       lifecycleRules: [],
    //       options: [Array],
    //       replicationConfiguration: [Object],
    //       revision: 4,
    //     },
    //   ];
    // }
  } catch (err) {
    console.log('Error getting bucket:', err);
  }
}

export async function listBuckets(b2: B2) {
  try {
    let response = await b2.listBuckets();
    return response.data;
    // {
    //   buckets: [
    //     {
    //       accountId: '',
    //       bucketId: '',
    //       bucketInfo: {},
    //       bucketName: '',
    //       bucketType: '',
    //       corsRules: [Array],
    //       defaultServerSideEncryption: [Object],
    //       fileLockConfiguration: [Object],
    //       lifecycleRules: [],
    //       options: [Array],
    //       replicationConfiguration: [Object],
    //       revision: 4,
    //     },
    //     {
    //       accountId: '',
    //       bucketId: '',
    //       bucketInfo: {},
    //       bucketName: '',
    //       bucketType: '',
    //       corsRules: [Array],
    //       defaultServerSideEncryption: [Object],
    //       fileLockConfiguration: [Object],
    //       lifecycleRules: [],
    //       options: [Array],
    //       replicationConfiguration: [Object],
    //       revision: 3,
    //     },
    //   ];
    // }
  } catch (err) {
    console.log('Error:', err);
  }
}
