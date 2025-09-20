import { Module } from '@nestjs/common';
import { TarefaController } from './dto/tarefa.controller';
import { PrismaService } from 'src/database/prisma.service';
import { TarefaService } from './tarefa.service';

@Module({
    providers: [TarefaService, PrismaService],
    controllers:[TarefaController],
})
export class TarefaModule {}
