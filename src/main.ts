import { NestFactory } from '@nestjs/core';
import { AppliProjectionModule } from './app.module';
import {access} from './middlewares/access'
import {TokenMiddleware} from './token.middleware'
async function bootstrap() {
  const app = await NestFactory.create(AppliProjectionModule);
  app.use(access,TokenMiddleware)
  await app.listen(3001);
}
bootstrap();
