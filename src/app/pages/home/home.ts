import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
  }
}
