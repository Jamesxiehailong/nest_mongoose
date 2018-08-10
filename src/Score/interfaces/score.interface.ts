import { Document } from 'mongoose'

export interface Score extends Document {
  readonly projectId: String;
  readonly createdTime: Date;
  readonly voterName: String;
  readonly score:Number
  readonly personName:String
}
