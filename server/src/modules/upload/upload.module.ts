import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature()],
  controllers: [UploadController],
})
export class UploadModule {}
