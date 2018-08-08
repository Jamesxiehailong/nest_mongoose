import { NestFactory } from '@nestjs/core';
import { AppliProjectionModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppliProjectionModule);
  await app.listen(3001);
}
bootstrap();
