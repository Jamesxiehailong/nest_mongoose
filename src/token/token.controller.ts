import { Controller, Get, Param, Post, Body, Req } from '@nestjs/common'
import { TokenService } from './token.service'

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService:TokenService){}

  @Get(':id')
  getToken(@Param() param){
    //  token签名
    let paramId:string = param.id
    let token:string = this.tokenService.tokenSign(paramId)
    return JSON.stringify({
      success:true,
      message:'请使用授权码',
      token:token
    })
  }
}