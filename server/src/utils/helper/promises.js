import Jwt from 'jsonwebtoken';
import { } from 'dotenv/config';

const { SECRET } = process.env;

export const verify = (token) => new Promise((resolve, reject) => {
  Jwt.verify(token, SECRET, (error, decoded) => {
    if (error)  reject(error)
      resolve(decoded)
  })
})

export const signToken = ({ email, id, username }) =>
  new Promise((resolve, reject) => {
    Jwt.sign({ email, id, username }, SECRET, (error, token) => {
     
      if (error) reject(error)
      
      resolve(token)
    })
})

