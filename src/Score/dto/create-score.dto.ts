/*
 * @Author: 谢海龙 / Jamesxiehailong
 * @Date: 2018-08-14 12:01:05
 * @Last Modified by:   谢海龙 / Jamesxiehailong
 * @Last Modified time: 2018-08-14 12:01:05
 */

export class CreateScoreDto {
  readonly projectId: String;
  readonly createdTime: Date;
  readonly voterName: String;
  readonly score:Number;
  readonly personName:String;
  readonly projectName:String
}
