import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Games } from 'src/entities/games.entity';
import { GamesService } from 'src/services/games/games.service';
import { MatchesService } from 'src/services/matches/matches.service';
import { MatchesController } from './matches.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Games]), HttpModule],
    providers: [MatchesService, GamesService],
    controllers: [MatchesController],
    exports: [TypeOrmModule]
})
export class MatchesModule {}
