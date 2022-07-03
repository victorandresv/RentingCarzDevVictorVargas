import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Games } from 'src/entities/games.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(Games)
        private gamesRepository: Repository<Games>
    ) { }

    async findOne(id: number): Promise<Games> {
        return await this.gamesRepository.findOneBy({ game_id: id });
    }

    async save(data:Games){
        return await this.gamesRepository.save(data)
    }
}
