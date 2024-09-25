import { 
  Controller, 
  Param, 
  Get, 
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
}
