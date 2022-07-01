import { Competition } from "./competition.interface"
import { Match } from "./match.interface"
import { ResultSet } from "./result_set.interface"

export interface Result {
    filters: any
    resultSet: ResultSet
    competition: Competition
    matches: Array<Match>
}
