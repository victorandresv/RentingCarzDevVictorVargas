import { Area } from "./area.interface";
import { Competition } from "./competition.interface";
import { Score } from "./score.interface";
import { Season } from "./season.interface";
import { Team } from "./team.interface";

export interface Match {
    area: Area
    competition: Competition
    season: Season
    id: number
    utcDate: string
    status: string
    matchday: number
    stage: string
    group: any
    lastUpdated: string
    homeTeam: Team
    awayTeam: Team
    score: Score
    odds: any
    references: Array<any>
}
