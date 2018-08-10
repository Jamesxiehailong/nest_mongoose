import { Controller, Get, Post, Body, Response,HttpStatus,Query,Put,Delete} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsService } from './project.service';
import {dateRes} from './../until'

@Controller('projects')
export class ProjectsController {
  constructor(private readonly ProjectsService: ProjectsService ) {}

  /**
   * 新增项目
   * @param body 
   * @param createProjectDto 
   * @param res 
   */
  @Post('add')
  async create(@Body() body ,createProjectDto: CreateProjectDto, @Response() res) {
    const newParams = Object.assign(body,{
      createdTime:new Date(),
      projectStatus:true
    })
    let ProjectPromise = this.ProjectsService.create(newParams);
    ProjectPromise
    .then( project=>{
      console.log(`成功${project}`)
      const resData = {
        status:'success',
        data:project
      }
      res.status(HttpStatus.OK).json(resData);//返回新创建的doc
    })
    .catch( err=>{
      console.log(err)
      res.status(HttpStatus.OK).json(err);//返回错误
    }); 
  }
/**
 * 
 * @param query  查询条件{projectName,personName，模糊查询} {createdTime:'yyyy-mm-dd hh:MM:ss'}
 * @param res 返回值
 */
  @Get('getData')
  async findAll(@Query() query, @Response() res){
    let findAll = this.ProjectsService.findAll({
      $or : [ //多条件，数组
        {projectName : {$regex : query.projectName || ''}},
        {personName: {$regex : query.personName || ''}},
        {createdTime:query.createdTime === undefined ? '': dateRes(query.createdTime)}
    ],
    });
    findAll.then(Project=>{
      console.log(Project)
      res.status(HttpStatus.OK).json(Project);
    }).catch( err=>{
      console.log(err)
      res.status(HttpStatus.OK).json(err);//返回错误
    }); 
  }


  /**
   * 
   * @param body 修改项目的东西
   * @param res 
   */
  @Put('modifyDataById')
  async modifyDataById(@Body() body, @Response() res){
    const condition = {
      _id:body.projectId
    };
    const updates = {
      projectName:body.projectName,
      projectStatus:body.projectStatus
    };
    let ProjectPromise = this.ProjectsService.modifyDataById(condition,updates);
    ProjectPromise
    .then( project=>{
      console.log(`成功${project}`)
      const resData = {
        status:'success',
        data:project
      }
      res.status(HttpStatus.OK).json(resData);//返回新创建的doc
    })
    .catch( err=>{
      console.log(err)
      res.status(HttpStatus.OK).json(err);//返回错误
    }); 
  }

  /**
   * 通过id删除项目
   * @param body 
   * @param res 
   */
  @Delete('deleteDataById')
  async deleteDataById(@Body() body, @Response() res){
    const condition = {
      _id:body.projectId
    }
    console.log(condition)
    let ProjectPromise = this.ProjectsService.deleteDataById(condition);
    ProjectPromise
    .then( project=>{
      console.log(`成功${project}`)
      const resData = {
        status:'success',
        data:project
      }
      res.status(HttpStatus.OK).json(resData);//返回新创建的doc
    })
    .catch( err=>{
      console.log(err)
      res.status(HttpStatus.OK).json(err);//返回错误
    });
  }
}

