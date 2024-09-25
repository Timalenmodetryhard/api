import { Test, TestingModule } from '@nestjs/testing';
import { PersonsController } from './persons/persons.controller';
import { PersonsService } from './persons/persons.service';

describe('AppController', () => {
  let personController: PersonController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PersonsController],
      providers: [PersonsService],
    }).compile();

    personController = app.get<PersonsController>(PersonsController);
  });

  describe('root', () => {
    it('should return a list of persons []', () => {
      expect(personController.getAllPersons()).toBe([]);
    });
  });
});
