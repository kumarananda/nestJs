import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller('users') or
@Controller({
  path: 'users',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all')
  getHello(): string {
    return this.appService.getHello();
  }
}

// /user/all
