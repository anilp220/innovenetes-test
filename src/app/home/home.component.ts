import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username = '';
  repos = [];
  errorMsg = ''
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.username)
    this.homeService.getUser(this.username)
      .then((result: any[]) => {
        if (result.length) {
          this.repos = [...result]
          console.log(this.repos)
        } else {
          this.errorMsg = 'Not found'
        }
      }).catch((err) => {
        console.log(err)
        this.errorMsg = err?.error?.message
      })
  }

}
