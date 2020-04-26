import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {DataService} from "../../services/data.service";
import { Profile } from "../../interfaces";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profileUser: Profile;

  constructor(private authService: AuthService, private data: DataService) { }

  ngOnInit(): void {
    this.data.getProfileData()
      .subscribe((profile: Profile) => {
        this.profileUser = profile;
      })
  }

}
