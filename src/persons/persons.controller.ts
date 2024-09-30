import { 
  Controller, 
  Param, 
  Get, 
  Put,
  Delete,
  Post,
  Body,
  ParseIntPipe 
} from '@nestjs/common';
import { PersonsService } from './persons.service';
import { Person } from './persons.entity';

@Controller('/persons')
export class PersonsController {
  constructor(private readonly personService: PersonsService) {}

  @Get('')
  async getAllPersons(): Promise<Person[]> {
    return this.personService.getAllPersons();
  }

  @Get(':id')
  async getPerson(
    @Param('id', ParseIntPipe) id: number
  ): Promise<Person> {
    return this.personService.getPerson(id);
  }

  @Post('')
  async addPerson(
    @Body() person: Partial<Person>
  ): Promise<Person> {
    return this.personService.addPerson(
      person.lastName,
      person.firstName,
      person.email,
      person.phoneNumber
    );
  }

  @Put('')
  async updatePerson(
    @Body() person: Promise<Person>
  ) {
    return this.personService.updatePerson(await person);
  }

  @Delete(':id')
  async deletePerson(
    @Param('id', ParseIntPipe) id: number
  ): Promise<void> {
    await this.personService.deletePerson(id);
  }
}
