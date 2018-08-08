import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Project } from './interfaces/project.interface';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(@Inject('ProjectModelToken') private readonly ProjectModel: Model<Project>) {}
  /**
   * 添加项目
   * @param {projectName:String, personName:String, createdTime:Date}params
   */
  async create(params): Promise<Project> {
    const createdProject = new this.ProjectModel(params);
    return await createdProject.save();
  }

  async findAll(params): Promise<Project[]> {
    return await this.ProjectModel.find(params).exec();
  }
}
