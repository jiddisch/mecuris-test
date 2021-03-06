import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/core/history/history.service';
import { History } from 'src/app/core/history/history.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  displayedColumns = ['name', 'price', 'amount', 'totalPrice', 'date'];
  dataSource: MatTableDataSource<History>;
  isData: boolean;

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.historyService.history$().subscribe((res) => {
      this.isData = res.length > 0 ? true : false;
      this.dataSource = new MatTableDataSource(res);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
