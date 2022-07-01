import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Result } from 'src/interfaces/result.interface';

@Injectable()
export class MatchesService {

    constructor(private readonly httpService: HttpService){

    }

    getAllMatches(): Observable<AxiosResponse<Result>>{
        return this.httpService.get(process.env["url_matches"], {
            headers: {
                 "X-Auth-Token": process.env["apikey"]
            }
        });
    }

}
