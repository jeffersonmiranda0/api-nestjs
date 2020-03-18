import { Controller, Get, Query, Param } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clients: ClientsService) {}
  @Get()
  save() {
    return this.clients.save();
  }
}
