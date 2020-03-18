import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
@Module({
  imports: [ClientsModule],
  controllers: [RegisterController],
  providers: [RegisterService],
  exports: [ClientsModule],
})
export class RegisterModule {}
