import { Component, OnInit } from '@angular/core';
import { SellerdataService } from 'src/app/services/sellerdata.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-table',
  templateUrl: './seller-table.component.html',
  styleUrls: ['./seller-table.component.scss']
})

export class SellerTableComponent implements OnInit {
  displayedColumns: string[] = ['sellerName', 'currency', 'offices', 'biddedDeal', 'guaranteedDeal', 'deleteItem','editItem'];
 
  items: Observable<any[]>;
  constructor(private sellerDataService: SellerdataService, private router:Router) {
    this.items = this.sellerDataService.getItems();
  }

  ngOnInit() {
  
  }

  deleteItem(key) {
    let confirmDelete = confirm('Are you sure you want to delete this item?');
    if(confirmDelete){
    this.sellerDataService.deleteItem(key).then(_ => {
      alert('The item was deleted.');
      this.router.navigate(['/']);
    }).catch(err => {
      alert('Error deleting the item');
      console.log(err);
    });
  }
  }
}
