import { Controller, Get, Post, Body, Response,HttpStatus,Query,Delete} from '@nestjs/common';
// import { CreateScoreDto } from './dto/create-score.dto';
import { ScoresService } from './score.service';
import {dateRes} from './../until'

@Controller('Scores')
export class ScoresController {
  constructor(private readonly ScoresService: ScoresService ) {}

  /**
   * 点评项目
   * @param body 
   * @param createScoreDto 
   * @param res 
   */
  @Post('addProjectScore')
  async create(@Body() body , @Response() res) {
    const newParams = Object.assign(body,{
      createdTime:new Date()
    })
    console.log(newParams)
    let ScorePromise = this.ScoresService.create(newParams);
    ScorePromise
    .then( Score=>{
      console.log(`成功${Score}`)
      const resData = {
        status:'success',
        data:Score
      }
      res.status(HttpStatus.OK).json(resData);//返回新创建的doc
    })
    .catch( err=>{
      console.log(err)
      res.status(HttpStatus.OK).json(err);//返回错误
    }); 
  }

  @Get('getDetailsData')
  async findAll(@Query() query, @Response() res){
    const createdTime = dateRes(query.createdTime)
    let findAll = this.ScoresService.findAll({
      $or : [ //多条件，数组
        {projectName : {$regex : query.projectName || ''}},
        {personName: {$regex : query.personName || ''}},
        {createdTime:query.createdTime === undefined ? '': createdTime}
    ],
  });
    findAll.then(Score=>{
      res.status(HttpStatus.OK).json(Score);
    }).catch( err=>{
      console.log(err)
      res.status(HttpStatus.OK).json(err);//返回错误
    }); 
  }

  @Delete('deleteDataByProjectId')
  async deleteDataByProject(@Body() body , @Response() res){
    let ScorePromise = this.ScoresService.deleteDataByProjectId(body);
    ScorePromise
    .then( Score=>{
      console.log(`成功${Score}`)
      const resData = {
        status:'success',
        data:Score
      }
      res.status(HttpStatus.OK).json(resData);//返回新创建的doc
    })
    .catch( err=>{
      console.log(err)
      res.status(HttpStatus.OK).json(err);//返回错误
    }); 
  }

}
