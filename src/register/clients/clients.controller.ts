import { Controller, Get, Query, Param } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clients: ClientsService) {}
  @Get()
  list() {
    return this.clients.messageClient();
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `param passed in url 1 ${params.id}`;
  }

  @Get('/teste/:abc')
  findOne2(@Param() params): string {
    console.log(params.id);
    return `param passed in url 2 ${params.abc}`;
  }
}
