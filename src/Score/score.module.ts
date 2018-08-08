import { Module } from '@nestjs/common';
import { ScoresController } from './score.controller';
import { ScoresService } from './score.service';
import { ScoresProviders } from './score.providers';
import { DatabaseModule } from '../database/database.module';
//各种注入服务
@Module({
  imports: [DatabaseModule],
  controllers: [ScoresController],
  providers: [ScoresService, ...ScoresProviders],
})
export class ScoreModule {}
