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

  public async addAnimal(
    name: string, 
    dateOfBirth: string,
    species: string,
    breed: string,
    color: string,
    weight: string,
    ownerId: number
  ): Promise<Animal> {
    return this.animalsRepository.save({ 
      name: name, 
      dateOfBirth: dateOfBirth, 
      species: species, 
      breed: breed,
      color: color,
      weight: weight,
      ownerId: ownerId 
    });
  }

  public async updateAnimal(animal: Animal) {
    return this.animalsRepository.save(animal);
  }

  public async deleteAnimal(id: number): Promise<void> {
    await this.animalsRepository.delete({ id });
  }
}
