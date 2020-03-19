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

  async save(clients: Clients) {
    let { cpf } = clients;

    const cli = await this.clientRepository.findOne({
      where: [
        {
          cpf,
        },
      ],
    });

    if (cli) return cli;
    return await this.clientRepository.save(clients);
  }

  async findOne(clients: Clients) {
    const { id } = clients;

    if (id === 0 || id === undefined) return [];

    const register = await this.clientRepository.findOne(id);
    if (!register) return [];

    return register;
  }

  async list() {
    return await this.clientRepository.find();
  }

  async delete(id: number) {
    const client = await this.clientRepository.findOne(id);
    return await this.clientRepository.remove(client);
  }
}
