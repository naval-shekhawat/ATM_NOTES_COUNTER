import { Component } from '@angular/core';
import { Notes } from '../notes';
import { ATMService } from '../services/atm-service';

@Component({
  selector: 'detail-panel',
  templateUrl: './detail-panel.component.html',
  styleUrls: ['./detail-panel.component.css']
})
export class DetailPanel  {
  availableCurrency: { denomination:number, count: number }[] = [];
  numberOfNotesDispenced : number;

  constructor(private atmService: ATMService) { }

  ngOnInit() {
    this.resetDenomination();
    this.atmService.withdrawalRequest.
                subscribe(amount => this.calculateNotes(amount));
  }

  resetDenomination(){
    this.availableCurrency = [
      { denomination : 2000, count :0},
      { denomination : 500, count :0},
      { denomination : 200, count :0},
      { denomination : 100, count :0},
      { denomination : 50, count :0},
      { denomination : 20, count :0},
      { denomination : 10, count :0},
      { denomination : 5, count :0},
      { denomination : 2 , count :0},
      { denomination :1 , count :0}
    ];
  }

  calculateNotes(amount : number) {
    this.resetDenomination();
    for (let i = 0; i < 9; i++) {
      if (amount >= this.availableCurrency[i].denomination) {
        this.availableCurrency[i].count = Math.floor(amount / this.availableCurrency[i].denomination);
        amount = amount - this.availableCurrency[i].count * this.availableCurrency[i].denomination;
      }
    }

    this.numberOfNotesDispenced = this.availableCurrency
                                  .reduce((totalNotesDispenced, note) => totalNotesDispenced + note.count, 0)
  }
}