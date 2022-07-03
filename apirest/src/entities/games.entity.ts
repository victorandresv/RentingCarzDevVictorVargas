import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Games{
    @PrimaryGeneratedColumn('increment')
    id?: number;

    @Column()
    game_id: number

    @Column()
    date: string

    @Column()
    area: string

    @Column()
    area_flag: string

    @Column()
    home_team: string

    @Column()
    home_team_logo: string

    @Column()
    away_team: string

    @Column()
    away_team_logo: string
}