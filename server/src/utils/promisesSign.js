import * as Jwt from 'jsonwebtoken';
import {} from 'dotenv/config'

const { SECRET } = process.env

export const verify = (token) => new Promise((resolve, reject) => {
  Jwt.verify(token, SECRET, (error, decoded) => {
    if (error) {
      reject(error)
    }else {
      resolve(decoded)
    }

  })
})

export const sign = (payload) => new Promise((resolve, reject) => {
  Jwt.verify(token, SECRET, (error, token) => {
    if (error) {
      reject(error)
    }else {
      resolve(token)
    }

  })
})

