import { Controller, Get, Post, UseInterceptors, UploadedFile} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import { AppService } from './app.service';

//creates a new URL
@Controller("cat")
export class AppController {
  //it adds to the first one made
  constructor(private readonly appService2: AppService) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('../pictures/cat.jpeg'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}

@Controller("")
export class AppController2 {
  //it adds to the first one made
  constructor(private readonly appService2: AppService) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
  @Get()
  body(): string {
    return this.appService2.body();
  }
}
