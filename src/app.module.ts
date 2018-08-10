import { Module } from '@nestjs/common';
import { ProjectModule } from './project/project.module';
import { ScoreModule } from './Score/score.module'
import { TokenModules } from './token/token.modules'

@Module({
  imports: [ProjectModule,ScoreModule,TokenModules],
})
export class AppliProjectionModule {}
