import { Document } from 'mongoose';

export interface Project extends Document {
   projectName: String,
   createdTime: Date,
   personName: String,
   lastTime: Date,
   projectStatus:Boolean
}

