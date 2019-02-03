import { Component } from '@angular/core';
import { ATMService } from '../services/atm-service';

@Component({
  selector: 'left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent{
  constructor(private atmService: ATMService) { }

  getMoney(moneyToWithdraw) {
    this.atmService.getMoney(+moneyToWithdraw)
  }
}
