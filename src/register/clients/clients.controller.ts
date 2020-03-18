import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Delete,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Clients } from './clients.entity';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clients: ClientsService) {}
  @Post()
  save(@Body() clients: Clients) {
    return this.clients.save(clients);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    const clients = new Clients();
    clients.id = id;

    return this.clients.findOne(clients);
  }

  @Get()
  list() {
    return this.clients.list();
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.clients.delete(id);
  }
}
