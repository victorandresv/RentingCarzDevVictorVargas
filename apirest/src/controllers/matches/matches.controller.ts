import { Controller, Get } from '@nestjs/common';
import { MatchesService } from 'src/services/matches/matches.service';
import { Result } from 'src/interfaces/result.interface';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('matches')
export class MatchesController {
    constructor(
        private matchesService: MatchesService, 
        private eventEmitter: EventEmitter2
    ){ }

    @Get('next-dates')
    async GetNextDates(){
        const response = await this.matchesService.getAllMatches()
        const matches: Result = response.data
        this.eventEmitter.emit('saveOnDatabase', matches)
        return matches;
    }
}
