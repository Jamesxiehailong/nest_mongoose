import * as mongoose from 'mongoose';

export const ScoreSchema = new mongoose.Schema({
    projectId: String,
    createdTime: Date,
    voterName: String,
    score:Number,
    personName:String,
    projectName:String
});
