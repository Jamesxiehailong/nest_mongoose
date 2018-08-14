/*
 * @Author: 谢海龙 / Jamesxiehailong
 * @Date: 2018-08-14 11:50:34
 * @Last Modified by: 谢海龙 / Jamesxiehailong
 * @Last Modified time: 2018-08-14 11:51:22
 */

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
    let ScorePromise = this.ScoresService.create(newParams);
    ScorePromise
    .then( Score=>{
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
    const curDate = new Date()
    interface ExportObj {
      projectId:String,
      projectName:String,
      personName:String,
      createdTime:Date,
      scores:Array<any>
    }
    let findAll = this.ScoresService.findAll({
      $or : [ //多条件，数组
        {projectName : {$regex : query.projectName || ''}},
        {personName: {$in : query.personName || ''}},
        {createdTime:query.createdTime === undefined ? '': dateRes(query.createdTime)}
    ],
  });
    findAll.then(Score=>{
      console.log(Score)
    const projectIDArr = []
    Score.map(item=>{
      projectIDArr.push(item.projectId)
    })
    const new_projectIDArr = Array.from(new Set(projectIDArr))
    const resData = []
    new_projectIDArr.map(ele=>{
      const curObj : ExportObj = {
        projectId:'',
        projectName:'',
        personName:'',
        createdTime:curDate,
        scores:[]
      }
      Score.map(item => {
        if(item.projectId === ele){
          curObj.scores.push({
            voterName:item.voterName,
            score:item.score,
            _id:item._id
          })
          curObj.projectId = item.projectId
          curObj.projectName = item.projectName
          curObj.personName = item.personName
          curObj.createdTime = item.createdTime
        } 
      })
      resData.push(curObj)
    })
    const resoloveData = {
      status:'success',
      data:resData
    }
      res.status(HttpStatus.OK).json(resoloveData);
    }).catch( err=>{
      console.log('err')
      console.log(err)
      res.status(HttpStatus.OK).json(err);//返回错误
    }); 
  }

  @Delete('deleteDataByProjectId')
  async deleteDataByProject(@Query() query , @Response() res){

    const condition = {
      _id:query.projectId
    }
    if(query.projectId === undefined){
      const rejectData = {
        status:'flase',
        data:{
          mes:'请输入正确的ID'
        }
      }
      res.status(200).json(rejectData)
    }else{
      let ScorePromise = this.ScoresService.deleteDataByProjectId(condition);
      ScorePromise
      .then( Score=>{
        const resData = {
          status:'success',
          data:Score
        }
        res.status(HttpStatus.OK).json(resData);//返回新创建的doc
      })
      .catch( err=>{
        const resData = {
          status :'error',
          data:err
        }
        console.log('error')
        console.log(resData)
        res.status(HttpStatus.OK).json(resData);//返回错误
      }); 
    }
  }
}
