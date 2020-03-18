import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clients } from './clients.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Clients)
    private clientRepository: Repository<Clients>,
  ) {}

  async save() {
    const clients = new Clients();
    clients.age = 29;
    clients.firstName = 'Jefferson';
    clients.lastName = 'Miranda';
    await this.clientRepository.save(clients);
  }
}
