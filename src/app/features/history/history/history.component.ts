import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/core/history/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
  }

}
