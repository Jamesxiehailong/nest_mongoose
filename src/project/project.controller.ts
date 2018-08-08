import { Controller, Get, Post, Body, Param , Response,HttpStatus,Request,Query} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsService } from './project.service';
// import {dateRes} from './../until'

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
      createdTime:new Date()
    })
    console.log(newParams)
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

  @Get('getData')
  async findAll(@Query() query, @Response() res){
    let findAll = this.ProjectsService.findAll({
      $or : [ //多条件，数组
        {name : {$regex : query.name}},
        {breed: {$regex : query.breed}}
    ]
    });
    findAll.then(Project=>{
      res.status(HttpStatus.OK).json(Project);
    }).catch( err=>{
      console.log(err)
      res.status(HttpStatus.OK).json(err);//返回错误
    }); 
  }
}
