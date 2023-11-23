import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async getAllProduct(): Promise<Product[]> {
    const products = await this.productModel.find().exec();
    return products;
  }

  async getProduct(productId: string): Promise<Product> {
    const product = await this.productModel.findById(productId).exec();
    return product;
  }

  async createProduct(body: CreateProductDTO): Promise<Product> {
    const newProduct = new this.productModel(body);
    return newProduct.save();
  }

  async updateProduct(
    productId: string,
    body: CreateProductDTO,
  ): Promise<Product> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      productId,
      body,
    );

    return updatedProduct;
  }

  async deleteProduct(productId: string): Promise<any> {
    const product = await this.productModel.findByIdAndRemove(productId);
    return product;
  }
}
