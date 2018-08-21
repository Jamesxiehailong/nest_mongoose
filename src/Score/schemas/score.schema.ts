/*
 * @Author: Jamesxiehailong 
 * @Date: 2018-08-15 11:06:20 
 * @Last Modified by:   Jamesxiehailong 
 * @Last Modified time: 2018-08-15 11:06:20 
 */

import * as mongoose from 'mongoose';

export const ScoreSchema = new mongoose.Schema({
    projectId: String,
    createdTime: Date,
    voterName: String,
    score:Number,
    personName:String,
    projectName:String
});
