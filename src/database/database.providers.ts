/*
 * @Author: hanlike 
 * @Date: 2018-08-15 10:57:07 
 * @Last Modified by:   hanlike 
 * @Last Modified time: 2018-08-15 10:57:07 
 */

import * as mongoose from 'mongoose';
/**
 * 链接池
 */
export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://127.0.0.1:27017/nest'),
  },
];
