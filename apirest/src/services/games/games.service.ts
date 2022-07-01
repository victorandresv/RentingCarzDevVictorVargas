import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Games } from 'src/entities/games.entity';
import { Match } from 'src/interfaces/match.interface';
import { Repository } from 'typeorm';

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(Games)
        private gamesRepository: Repository<Games>
    ) {}

    async findOne(id: number): Promise<Games> {
        return await this.gamesRepository.findOneBy({ game_id: id });
    }

    async save(data:Match){
        return await this.gamesRepository.save({
            game_id: data.id,
            area: data.area.name,
            area_flag: data.area.flag,
            away_team: data.awayTeam.name,
            away_team_logo: data.awayTeam.crest,
            date: data.utcDate,
            home_team: data.homeTeam.name,
            home_team_logo: data.homeTeam.crest,
        })
    }
}
