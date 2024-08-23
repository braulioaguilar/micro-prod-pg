import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>
  ){}

  async all(): Promise<Product[]>{
    return this.productRepository.find()
  }

  async create(data:any): Promise<Product> {
    return this.productRepository.save(data)
  }

  async get(id: string): Promise<Product> {
    return this.productRepository.findOneBy({
      id: id,
    })
  }

  async update(id: string, data:any): Promise<any> {
    return this.productRepository.update(id, data)
    // TODO: returns product affected
  }

  async delete(id: string): Promise<any> {
    return this.productRepository.delete(id)
  }
}
