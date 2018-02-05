import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  accounts: Account[];

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService) { }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    const customerId = this.route.snapshot.paramMap.get('customerId');

    this.accountService
    .getAccounts(customerId)
    .subscribe(accounts => this.accounts = accounts);
  }
}