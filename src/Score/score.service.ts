/*
 * @Author: 谢海龙 / Jamesxiehailong
 * @Date: 2018-08-14 11:53:12
 * @Last Modified by:   谢海龙 / Jamesxiehailong
 * @Last Modified time: 2018-08-14 11:53:12
 */

import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Score } from './interfaces/Score.interface';
// import { CreateScoreDto } from './dto/create-Score.dto';

@Injectable()
export class ScoresService {
  constructor(@Inject('ScoreModelToken') private readonly ScoreModel: Model<Score>) {}
/**
 * 
 * @param {projectId: String,createdTime: Date,voterName: String,score:Number} params 
 */
  async create(params): Promise<Score> {
    const createdScore = new this.ScoreModel(params);
    return await createdScore.save();
  }


  async findAll(params): Promise<Score[]> {
    return await this.ScoreModel.find(params).exec();
  }


  async deleteDataByProjectId(params):Promise<Score[]> {
    return await this.ScoreModel.remove(params).exec();
  }
}