import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './modules/customer/customer.module';
import { UploadModule } from './modules/upload/upload.module';
import { MulterModule } from '@nestjs/platform-express';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://hotrongson:son123456@cluster0.xbgjyux.mongodb.net/vueDemo',
      { useNewUrlParser: true },
    ),
    MulterModule.register({
      dest: './uploads',
    }),
    CustomerModule,
    UploadModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
