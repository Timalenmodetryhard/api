import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './animals.entity';

@Injectable()
export class AnimalsRepository {
  constructor(
    @InjectRepository(Animal)
    private readonly animalsRepository: Repository<Animal>,
  ){}

  public async getAllAnimals(): Promise<Animal[]> {
    return this.animalsRepository.find();
  }

  public async getAnimal(id: number): Promise<Animal> {
    return this.animalsRepository.findOne({ where: { id: id } });
  }
}
