import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  body(): string {
    return "Hello World!\n\n yusha is here\n Robin is also here!!?";
  }
}
