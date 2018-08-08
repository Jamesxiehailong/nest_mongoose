import { Document } from 'mongoose';

export interface Project extends Document {
  readonly projectName: String;
  readonly createdTime: Date;
  readonly personName: String;
  readonly lastTime: Date
}
