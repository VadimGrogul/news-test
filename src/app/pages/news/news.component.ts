import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { ActivatedRoute } from "@angular/router";
import { NewsData } from "../../interfaces";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public news: NewsData[];

  constructor(private data: DataService, private router: ActivatedRoute ) { }

  ngOnInit(): void {
    this.router.data
      .subscribe((res) => {
        this.news = res.newsData.news
      })
  }

}
