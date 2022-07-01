import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Games } from './entities/games.entity';
import { MatchesModule } from './controllers/matches/matches.module';
import { GamesService } from './services/games/games.service';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    HttpModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env["database_host"],
      port: parseInt(process.env["database_port"]),
      username: process.env["database_user"],
      password: process.env["database_pass"],
      database: process.env["database_name"],
      entities: [Games],
      synchronize: true,
      autoLoadEntities: true
    }),
    MatchesModule
  ],
  controllers: [AppController],
  providers: [AppService, GamesService],
})
export class AppModule {}
