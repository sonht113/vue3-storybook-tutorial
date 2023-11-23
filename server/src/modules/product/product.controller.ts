import { ProductService } from './product.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/products')
  async getAllProduct(@Res() res) {
    const products = await this.productService.getAllProduct();
    return res.status(HttpStatus.OK).json(products);
  }

  @Get('/product/:productId')
  async getProduct(@Res() res, @Param('productId') productId) {
    const product = await this.productService.getProduct(productId);
    if (!product) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json(product);
  }

  @Post('/create')
  async createProduct(@Res() res, @Body() body: CreateProductDTO) {
    const product = await this.productService.createProduct(body);
    return res.status(HttpStatus.OK).json({
      message: 'Created successfully',
      product,
    });
  }

  @Put('/update')
  async updateProduct(
    @Res() res,
    @Query('productId') productId,
    @Body() body: CreateProductDTO,
  ) {
    const product = await this.productService.updateProduct(productId, body);
    if (!product) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Updated successfully',
      product,
    });
  }

  @Delete('/delete')
  async deleteProduct(@Res() res, @Query('productId') productId) {
    const product = await this.productService.deleteProduct(productId);
    if (!product) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Deleted successfully',
      product,
    });
  }
}
