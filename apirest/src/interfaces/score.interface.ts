import { FullHalfTime } from "./full_half_time.interface"

export interface Score {
    winner: any
    duration: string
    fullTime: FullHalfTime
    halfTime: FullHalfTime
}
