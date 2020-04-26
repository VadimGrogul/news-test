import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NewsData, Profile, profileJson } from "../interfaces";
import { map, pluck } from "rxjs/operators";

@Injectable({providedIn: 'root'})

export class DataService {
  constructor(private http: HttpClient) {}

  getNewsData(): Observable<NewsData[]> {
    return this.http.get<NewsData[]>('./assets/data.json')
  }

  getProfileData(): Observable<Profile> {
    return this.http.get<Profile>('./assets/data.json')
      .pipe(
        pluck('profile'),
        map((res: profileJson) => Profile.fromJson(res))
      )
  }
}
