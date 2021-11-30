import { Module } from '@nestjs/common';
import { ExampleController } from './example/example.controller';

@Module({
  imports: [],
  controllers: [ExampleController],
})
export class AppModule {}
