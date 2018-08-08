import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Score } from './interfaces/Score.interface';
import { CreateScoreDto } from './dto/create-Score.dto';

@Injectable()
export class ScoresService {
  constructor(@Inject('ScoreModelToken') private readonly ScoreModel: Model<Score>) {}
  /**
   * 添加项目
   * @param {ScoreName:String, personName:String, createdTime:Date}params
   */
  async create(params): Promise<Score> {
    const createdScore = new this.ScoreModel(params);
    return await createdScore.save();
  }

  async findAll(params): Promise<Score[]> {
    return await this.ScoreModel.find(params).exec();
  }
}
