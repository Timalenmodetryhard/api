import { Injectable, NotFoundException } from '@nestjs/common';
import { PersonsRepository } from './persons.repository';
import { Person } from './persons.entity';

@Injectable()
export class PersonsService {
  constructor(private readonly personReposotory: PersonsRepository) {}

  public async getAllPersons(): Promise<Person[]> {
    return await this.personReposotory.getAllPersons();
  }

  public async getPerson(id: number): Promise<Person> {
    const person = this.personReposotory.getPerson(id);

    if (!person) {
      throw new NotFoundException('Person not found.');
    }

    return person;
  }
}
