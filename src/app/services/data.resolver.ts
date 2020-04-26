import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "./data.service";
import { NewsData } from "../interfaces";

@Injectable({providedIn: 'root'})

export class DataResolver implements Resolve<any>{
  constructor(private data: DataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<NewsData[]> {
    return this.data.getNewsData();
  }
}
