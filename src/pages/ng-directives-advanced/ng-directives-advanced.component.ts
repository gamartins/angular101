import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directives-advanced',
  templateUrl: 'ng-directives-advanced.component.html',
  styles: [`
    .topic { margin-left: 16px; }
    .subtopic { padding-left: 16px; }
  `]
})
export class NgDirectivesAdvancedComponent implements OnInit {
  showContent = false;
  songList = [
    { name: 'Could Have Been Me', artist: 'The Struts', album: 'The Struts' },
    { name: 'Seven Nation Army', artist: 'The White Stripes', album: 'Elephant' },
    { name: 'Dani California', artist: 'Red Hot Chili Peppers', album: 'Stadium Arcadium' },
    { name: 'Feel Good Inc.', artist: 'Gorillaz', album: 'Demon Days' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
