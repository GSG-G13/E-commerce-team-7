import Jwt from 'jsonwebtoken';
import { } from 'dotenv/config'

const { SECRET } = process.env

export const verify = (token) => new Promise((resolve, reject) => {
  Jwt.verify(token, SECRET, (error, decoded) => {
    if (error) {
      reject(error)
    } else {
      resolve(decoded)
    }

  })
})
export const signToken = ({ email, id, username }) =>
  new Promise((resolve, reject) => {
    Jwt.sign({ email, id, username }, "privateKey", (error, token) => {
      if (error) reject(error)
      resolve(token)
    })
})


