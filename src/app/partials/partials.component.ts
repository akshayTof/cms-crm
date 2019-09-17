import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, Event} from '@angular/router';
import {Inject} from '@angular/core';

@Component({
  selector: 'app-partials',
  templateUrl: './partials.component.html',
  styleUrls: ['./partials.component.css']
})
export class PartialsComponent implements OnInit {
  title = 'app';
  showLogin = true;
  currentUrl: string;
  constructor(@Inject(Router) private router: Router, @Inject(Location) private location: Location) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd ) {
        this.currentUrl = event.url;
        console.log(this.currentUrl);
	    }
	  });
   }

  ngOnInit() {
    console.log(this.location.path());

    console.log('asdasdasdasdasdasd');
    console.log(this.router.url );
    if (this.location.path() === '/login' || this.location.path() === '/') {
      console.log('sdfsdfsdfsdf');
      this.showLogin = false;
    }
  }

}
