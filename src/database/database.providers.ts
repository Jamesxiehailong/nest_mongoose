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
