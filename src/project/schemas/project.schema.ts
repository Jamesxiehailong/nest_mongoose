import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
   projectName: String,
   createdTime: Date,
   personName: String,
   lastTime: Date,
   projectStatus:Boolean,
   scoreMes : [{ type: mongoose.Schema.Types.ObjectId, ref: 'scores' }]
});
ProjectSchema.statics = {
    // deleteDataByProjectId:function(,callback){
    //     return this.remove(condition)
    // }
    // find:function(params,cb){
    //     return this.find(params,cb).populate('scores').exec(cb)
    // }
}