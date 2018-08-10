import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common'
var jwt = require('jsonwebtoken')

interface backError {
  message:String,
  success:Boolean
}

export function TokenMiddleware(req,res,next){
  let rex:RegExp = /\/token\/[0-9a-zA-Z]+/
  //  token获取接口不进行token验证
  if(rex.test(req.path)){
    next()
    return
  }
  //  获取请求头中token接口并验证
  let token:String = req.headers['x-access-token']
  if(token){
    jwt.verify(token,'mysecret',(err,decoded) => {
      if(err){
        let errInfo:backError = {
          message: 'token无效',
          success: false
        }
        res.send(errInfo)
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    let errInfo:backError = {
      message: '没有获取到token',
      success: false
    }
    res.send(errInfo)
  }
} 