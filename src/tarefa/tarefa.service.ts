import { Injectable } from '@nestjs/common';
import { TarefaDto } from './dto/tarefa.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TarefaService {

    constructor (private prisma: PrismaService) {}
    async create (data: TarefaDto) {
        const tarefa = await this.prisma.tarefa.create({
            data
        })

        return tarefa;
    }
}