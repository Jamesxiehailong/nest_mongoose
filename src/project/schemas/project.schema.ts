import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
   projectName: String,
   createdTime: Date,
   personName: String,
   lastTime: Date,
   projectStatus:Boolean
});
