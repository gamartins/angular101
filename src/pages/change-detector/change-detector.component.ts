import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-change-detector',
  template: `
    <div class="bar-full">
      <div class="bar-value px-2 py-1" [ngStyle]="{ 'max-width': value + '%' }">
        {{ value }}%
      </div>
    </div>
    <div class="mt-1">I have been rendered {{ renderCount }} times</div>
  `,
  styles: [`
    .bar-full {
      background: #ecf0f1;
    }
    
    .bar-value {
      background-color: #6363ce;
      color: white;
    }
  `]
})
export class ChangeDetectorComponent implements OnInit, OnChanges {
  @Input() value = 10;

  renderCount = 1;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }
  
  ngOnInit(): void {
    setInterval(() => this.changeDetectorRef.detectChanges(), 5000)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.renderCount++;
    
    console.log(changes)
  }
  
  ngAfterViewChecked() {
    this.changeDetectorRef.detach();
  }

}
