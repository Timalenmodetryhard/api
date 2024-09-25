import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './persons.entity';

@Injectable()
export class PersonsRepository {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ){}

  public async getAllPersons(): Promise<Person[]> {
    return this.personRepository.find();
  }

  public async getPerson(id: number): Promise<Person> {
    return this.personRepository.findOne({ where: { id: id } });
  }
}
