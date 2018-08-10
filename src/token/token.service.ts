import { Injectable } from '@nestjs/common';
var jwt = require('jsonwebtoken')
//  token服务
@Injectable()
export class TokenService {
  public tokenSign (paramId:string) {
    let token = jwt.sign({openId:paramId},'mysecret',{
      expiresIn: 60*60*5
    })
    return token
  }
}