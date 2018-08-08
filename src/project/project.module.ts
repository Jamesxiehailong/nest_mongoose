import { Module } from '@nestjs/common';
import { ProjectsController } from './project.controller';
import { ProjectsService } from './project.service';
import { ProjectsProviders } from './project.providers';
import { DatabaseModule } from '../database/database.module';
//各种注入服务
@Module({
  imports: [DatabaseModule],
  controllers: [ProjectsController],
  providers: [ProjectsService, ...ProjectsProviders],
})
export class ProjectModule {}
