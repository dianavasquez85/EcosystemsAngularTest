import { Component, OnInit } from '@angular/core';
import { HttpAccountsService } from 'src/app/services/http-accounts.service';
import { accountTitles } from './constants/accounts.constants';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  accountsListTitle = accountTitles;
  accountsList: any = [];

  constructor(private httpAccountsService: HttpAccountsService) { }

  ngOnInit(): void {
    this.httpAccountsService.getAccountsList().subscribe({next: (list) => this.accountsList = list});
  }

}
