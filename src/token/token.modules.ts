// token模块定义

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { TokenController } from './token.controller'
import { TokenService } from './token.service'

@Module({
  controllers: [TokenController],
  providers: [TokenService],
  exports: [TokenService]
})

export class TokenModules implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply().forRoutes(TokenController)
  }
}