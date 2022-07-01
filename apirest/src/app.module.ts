import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchesService } from './services/matches/matches.service';
import { MatchesController } from './controllers/matches/matches.controller';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [AppController, MatchesController],
  providers: [AppService, MatchesService],
})
export class AppModule {}
