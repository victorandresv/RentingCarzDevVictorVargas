import { Controller, Get } from '@nestjs/common';
import { MatchesService } from 'src/services/matches/matches.service';
import { Result } from 'src/interfaces/result.interface';

@Controller('matches')
export class MatchesController {
    constructor(private matchesService: MatchesService){

    }

    @Get('next-dates')
    async GetNextDates(){
        const response = await this.matchesService.getAllMatches()
        const matches: Result = response.data
        return matches;
    }
}