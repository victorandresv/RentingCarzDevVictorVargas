import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { Result } from "src/interfaces/result.interface";
import { GamesService } from "src/services/games/games.service";
import { Games } from "src/entities/games.entity";

@Injectable()
export class SaveDatabaseListener{

    constructor(private service: GamesService){}

    @OnEvent('saveOnDatabase')
    handleOrderCreatedEvent(event: Result) {
        if(event.matches.length > 0){
            event.matches.forEach(async item => {
                const result = await this.service.findOne(item.id);
                if (result == null){
                    const game: Games = {
                        area: item.area.name,
                        area_flag: item.area.flag,
                        away_team: item.awayTeam.name,
                        away_team_logo: item.awayTeam.crest,
                        date: item.utcDate,
                        game_id: item.id,
                        home_team: item.homeTeam.name,
                        home_team_logo: item.homeTeam.crest
                    }
                    await this.service.save(game);
                } else {
                    console.log("Game already saved: ID:"+result.id)
                }
            });
        }
     }
}