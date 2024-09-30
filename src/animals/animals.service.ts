import { Injectable, NotFoundException } from '@nestjs/common';
import { AnimalsRepository } from './animals.repository';
import { Animal } from './animals.entity';

@Injectable()
export class AnimalsService {
  constructor(private readonly animalsRepository: AnimalsRepository) {}

  public async getAllAnimals(): Promise<Animal[]> {
    return await this.animalsRepository.getAllAnimals();
  }

  public async getAnimal(id: number): Promise<Animal> {
    const animal = this.animalsRepository.getAnimal(id);

    if (!animal) {
      throw new NotFoundException('Person not found.');
    }

    return animal;
  }

  public async addAnimal(
    name: string, 
    dateOfBirth: string,
    species: string,
    breed: string,
    color: string,
    weight: string,
    ownerId: number
  ): Promise<Animal> {
    return this.animalsRepository.addAnimal(name, dateOfBirth, species, breed, color, weight, ownerId);
  }

  public async updateAnimal(animal: Animal) {
    return this.animalsRepository.updateAnimal(animal);
  }

  public async deleteAnimal(id: number): Promise<void> {
    await this.animalsRepository.deleteAnimal(id);
  }
}
