import { 
  Controller, 
  Param, 
  Get, 
  ParseIntPipe, 
  Query
} from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { Animal } from './animals.entity';

@Controller('/animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Get('')
  async getAllAnimals(
  ): Promise<Animal[]> {
    return this.animalsService.getAllAnimals();
  }

  @Get(':id')
  async getAnimal(
    @Param('id', ParseIntPipe) id: number
  ): Promise<Animal> {
    return this.animalsService.getAnimal(id);
  }
}
