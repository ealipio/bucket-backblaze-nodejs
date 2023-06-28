import dotenv from 'dotenv';
import { Event, User, Moments, Instant } from './models';

dotenv.config();

export const testSIngleFile = (req, res) => {
  //console.log(res.locals.id);
  console.log(res.locals);

  res.send('OK testSIngleFile');
};

export const testMedia = (req, res) => {
  console.log(res.locals);

  res.json(res.locals.urls);
  //res.send('OK Files to backBlaze');
};

const displayAllEvents = (req, res) => {
  // @ts-ignore
  User?.findById(req.user._id).populate('events').populate({
    path: 'moments',
    model: 'moments',
  });
};
