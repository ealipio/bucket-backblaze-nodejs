import dotenv from 'dotenv';
import B2 from 'backblaze-b2';
import multer from 'multer';

dotenv.config();

// The memory storage engine stores the files in memory as Buffer objects.
export const multerAnyInMemory = multer({
  storage: multer.memoryStorage(),
}).any();

export const multerSingleInMemory = multer({
  storage: multer.memoryStorage(),
}).single('photo');

export const multerAnyInDisk = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './my-uploads');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname);
    },
  }),
}).any();

// B2 requirements
const applicationKeyId = process.env.KEY_ID;
const applicationKey = process.env.APPLICATION_KEY;

const b2 = new B2({
  applicationKeyId,
  applicationKey,
});

export const uploadFilesToDisk = async (req, res, next) => {
  console.log(req.files);

  next();
};
// middleware to upload files
export const uploadFiles = async (req, res, next) => {
  const authResponse = await b2.authorize();
  const { downloadUrl } = authResponse.data;

  const fileIds = [];
  const urls = [];
  const uploadPromises = req.files.map(async (file) => {
    const response = await b2.getUploadUrl({ bucketId: process.env.BUCKET_ID });
    const { authorizationToken, uploadUrl } = response.data;
    const params = {
      uploadUrl,
      uploadAuthToken: authorizationToken,
      fileName: file.originalname,
      data: file.buffer,
    };

    const fileInfo = await b2.uploadFile(params);
    fileIds.push(fileInfo.data.fileId);
    const url = `${downloadUrl}/file/${process.env.BUCKET_NAME}/${fileInfo.data.fileName}`;
    urls.push(url);
  });
  await Promise.all(uploadPromises);
  // save photo ids to the res
  res.locals.ids = fileIds;
  // save the actual photo to the res
  //res.locals.photos = photoFiles;
  res.locals.urls = urls;
  next();
};

export const uploadSingleFile = async (req, res, next) => {
  const authResponse = await b2.authorize();
  const { downloadUrl } = authResponse.data;

  const fileId = [];
  //const photoFile = [];
  //const file = req.file;
  //const buffer = req.file.buffer;
  if (req.file.buffer) {
    const response = await b2.getUploadUrl({ bucketId: process.env.BUCKET_ID });
    const { authorizationToken, uploadUrl } = response.data;

    const params = {
      uploadUrl,
      uploadAuthToken: authorizationToken,
      fileName: req.file.originalname,
      data: req.file.buffer,
    };
    const fileInfo = await b2.uploadFile(params);
    fileId.push(fileInfo.data.fileId);
    //photoFile.push(file.buffer);
    // console.log(fileInfo.data);
    // save photo ids to the res
    //res.locals.ids = fileId;
    // save the actual photo to the res
    //res.locals.photos = photoFile;
    const url = `${downloadUrl}/file/${process.env.BUCKET_NAME}/${fileInfo.data.fileName}`;
    console.log(url);

    res.locals.url = url;
  }
  res.locals.url = 'peru';

  next();
};

export function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}
