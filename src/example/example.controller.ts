import {
  Controller,
  MessageEvent,
  Query,
  Sse,
  UseInterceptors,
} from '@nestjs/common';
import { interval, mapTo, Observable } from 'rxjs';
import { ExampleInterceptor } from './example.interceptor';

@Controller('example')
@UseInterceptors(ExampleInterceptor)
export class ExampleController {
  @Sse()
  public events(@Query('id') id: string): Observable<MessageEvent> {
    console.log(id);
    return interval(300).pipe(mapTo({ data: 'Example' }));
  }
}
