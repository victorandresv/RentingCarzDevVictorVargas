import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Result } from 'src/interfaces/result.interface';

@Injectable()
export class MatchesService {

    constructor(private readonly httpService: HttpService){

    }

    getAllMatches(): Promise<AxiosResponse<Result>>{
        return this.httpService.axiosRef.get(process.env["url_matches"], {
            headers: {
                 "X-Auth-Token": process.env["apikey"]
            }
        });
    }

}
