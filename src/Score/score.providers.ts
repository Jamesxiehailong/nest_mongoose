/*
 * @Author: 谢海龙 / Jamesxiehailong
 * @Date: 2018-08-14 11:52:56
 * @Last Modified by:   谢海龙 / Jamesxiehailong
 * @Last Modified time: 2018-08-14 11:52:56
 */

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
