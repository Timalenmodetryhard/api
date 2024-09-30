import { 
  Controller, 
  Param, 
  Get, 
  Post,
  Put,
  Delete,
  Body,
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

  @Post('')
  async addAnimal(
    @Body() animal: Partial<Animal>
  ): Promise<Animal> {
    return this.animalsService.addAnimal(
      animal.name,
      animal.dateOfBirth,
      animal.species,
      animal.breed,
      animal.color,
      animal.weight,
      animal.ownerId
    );
  }

  @Put('')
  async updateAnimal(
    @Body() animal: Promise<Animal>
  ) {
    return this.animalsService.updateAnimal(await animal);
  }

  @Delete(':id')
  async deleteAnimal(
    @Param('id', ParseIntPipe) id: number
  ): Promise<void> {
    await this.animalsService.deleteAnimal(id);
  }
}
