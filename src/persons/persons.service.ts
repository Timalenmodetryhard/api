import { Injectable, NotFoundException } from '@nestjs/common';
import { PersonsRepository } from './persons.repository';
import { Person } from './persons.entity';

@Injectable()
export class PersonsService {
  constructor(private readonly personRepository: PersonsRepository) {}

  public async getAllPersons(): Promise<Person[]> {
    return await this.personRepository.getAllPersons();
  }

  public async getPerson(id: number): Promise<Person> {
    const person = this.personRepository.getPerson(id);

    if (!person) {
      throw new NotFoundException('Person not found.');
    }

    return person;
  }

  public async addPerson(
    lastName: string, 
    firstName: string, 
    email: string, 
    phoneNumber: string
  ): Promise<Person> {
    return this.personRepository.addPerson(lastName, firstName, email, phoneNumber);
  }

  public async updatePerson(person: Person) {
    return await this.personRepository.updatePerson(person);
  }

  public async deletePerson(id: number): Promise<void> {
    await this.personRepository.deletePerson(id);
  }
}
