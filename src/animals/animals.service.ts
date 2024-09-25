import { Injectable, NotFoundException } from '@nestjs/common';
import { AnimalsRepository } from './animals.repository';
import { Animal } from './animals.entity';

@Injectable()
export class AnimalsService {
  constructor(private readonly animalsReposotory: AnimalsRepository) {}

  public async getAllAnimals(): Promise<Animal[]> {
    return await this.animalsReposotory.getAllAnimals();
  }

  public async getAnimal(id: number): Promise<Animal> {
    const animal = this.animalsReposotory.getAnimal(id);

    if (!animal) {
      throw new NotFoundException('Person not found.');
    }

    return animal;
  }
}
