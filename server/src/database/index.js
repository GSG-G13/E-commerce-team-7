import { connection } from './config/connection.js';
import { signupQuery } from './query/auth/index.js';
import { decrementCount, getProduct, incrementCount } from './query/index.js';
import { getUserByEmailQuery } from './query/users/index.js';

export {
  decrementCount,
  connection,
  signupQuery,
  getUserByEmailQuery,
  incrementCount,
  getProduct,
};
