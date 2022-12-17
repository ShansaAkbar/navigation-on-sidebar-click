import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Peopledata } from 'src/app/peopleData';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  peopledata = Peopledata
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  navigateToProfile(item) {
    this.route.navigate(['profile', item.id]);
  }
}
