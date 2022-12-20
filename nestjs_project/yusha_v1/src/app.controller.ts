import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//creates a new URL
@Controller("hi")
export class AppController {
  //it adds to the first one made
  constructor(private readonly appService2: AppService) {}

  @Get()
  //send an hello
  getHello(): string {
    return this.appService2.getHello();
  }
}

@Controller("hey")
export class AppController2 {
  //it adds to the first one made
  constructor(private readonly appService2: AppService) {}

  @Get()
  getHello(): string {
    return this.appService2.getHello();
  }
}
