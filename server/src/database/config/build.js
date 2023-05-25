import { connection } from './connection';
const { join } = require('path');
const { readFileSync } = require('fs');

export const Build = () => {
  const sql = readFileSync(join(__dirname, 'build.sql')).toString();
  return connection.query(sql);
};

