import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: 'change-detection.component.html',
})
export class ChangeDetectionComponent {
  color: string = '#000000';
  colorChild: string = '#000000';
  user = { name: 'Gabriel', like: 'pizza' };

  constructor() { }

  randomColor(): string {
    const red = Number((255 * Math.random()).toFixed(0)).toString(16);
    const blue = Number((255 * Math.random()).toFixed(0)).toString(16);
    const green = Number((255 * Math.random()).toFixed(0)).toString(16);
    return `#${red}${green}${blue}`.toUpperCase();
  }

  randomColorParent(): void {
    this.color = this.randomColor()
  }

  randomColorChild(): void {
    this.colorChild = this.randomColor();
  }

  randomUser(): void {
    const randomNames = [ 'Gabriel', 'Ana', 'Nabucodonosor' ];
    const randomLikes = [ 'Barbacue', 'Pizza', 'Beer' ];

    this.user.name = randomNames[(Math.random() * (randomNames.length - 1)).toFixed(0)]
    this.user.like = randomLikes[(Math.random() * (randomNames.length - 1)).toFixed(0)]
  }

}
