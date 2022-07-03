import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Games } from 'src/entities/games.entity';
import { GamesService } from 'src/services/games/games.service';
import { MatchesService } from 'src/services/matches/matches.service';
import { MatchesController } from './matches.controller';
import { SaveDatabaseListener } from './save-database.listener';

@Module({
    imports: [TypeOrmModule.forFeature([Games]), HttpModule, EventEmitterModule],
    providers: [MatchesService, GamesService, SaveDatabaseListener],
    controllers: [MatchesController],
    exports: [TypeOrmModule]
})
export class MatchesModule {}
