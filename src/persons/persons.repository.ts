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

  public async addPerson(
    lastName: string, 
    firstName: string, 
    email: string, 
    phoneNumber: string
  ): Promise<Person> {
    return this.personRepository.save({ 
      lastName: lastName, 
      firstName: firstName, 
      email: email, 
      phoneNumber: phoneNumber 
    });
  }

  public async updatePerson(person: Person) {
    return this.personRepository.save(person);
  }

  public async deletePerson(id: number): Promise<void> {
    await this.personRepository.delete({ id });
  }
}
