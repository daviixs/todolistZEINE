import { Body, Controller, Post } from '@nestjs/common';
import type { TarefaDto } from './tarefa.dto';
import { TarefaService } from '../tarefa.service';

@Controller('tarefa')
export class TarefaController {

    constructor(private readonly tarefaService: TarefaService){}

    @Post()
    
    async create(@Body() data: TarefaDto) {
        return this.tarefaService.create(data);
    }
}
