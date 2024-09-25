import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './persons/persons.entity';
import { PersonsRepository } from './persons/persons.repository';
import { PersonsService } from './persons/persons.service';
import { PersonsController } from './persons/persons.controller';
import { AnimalsController } from './animals/animals.controller';
import { AnimalsService } from './animals/animals.service';
import { AnimalsRepository } from './animals/animals.repository';
import { Animal } from './animals/animals.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'Leevee*97232',
      database: 'nest_next',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Person, Animal]),
  ],
  controllers: [PersonsController, AnimalsController],
  providers: [PersonsService, PersonsRepository, AnimalsService, AnimalsRepository],
})
export class AppModule {}