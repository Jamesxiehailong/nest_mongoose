import { Connection } from 'mongoose';
import { ProjectSchema } from './schemas/project.schema';

export const ProjectsProviders = [
  //创建表
  {
    provide: 'ProjectModelToken',
    useFactory: (connection: Connection) => connection.model('Projects', ProjectSchema),
    inject: ['DbConnectionToken'],
  },
];
