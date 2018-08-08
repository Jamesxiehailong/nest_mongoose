import { Module } from '@nestjs/common';
import { ProjectModule } from './project/project.module';
import { ScoreModule } from './Score/score.module'

@Module({
  imports: [ProjectModule],
})
export class AppliProjectionModule {}
