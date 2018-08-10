import { Connection } from 'mongoose';
import { ScoreSchema } from './schemas/score.schema';

export const ScoresProviders = [
  //创建得分表
  {
    provide: 'ScoreModelToken',
    useFactory: (connection: Connection) => connection.model('scores', ScoreSchema),
    inject: ['DbConnectionToken'],
  },
];
