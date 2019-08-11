import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
@Injectable({
  providedIn: 'root'
})
export class SellerdataService {

  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {

  }

  getItems() {
    this.items = this.db.list('items').snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    return this.items;
  }

  getItem(itemKey) {
    return this.db.list(`items/${itemKey}`).valueChanges();
  }

  insertItem(data) {
    let newItem = data;
    newItem.biddedDeal = newItem.biddedDeal ? "Yes" : "No";
    newItem.guaranteedDeal = newItem.guaranteedDeal ? "Yes" : "No";
    return this.db.list('items').push(newItem);
  }
  
  updateItem(itemKey, data) {
    let updatedData = data;
    updatedData.biddedDeal = updatedData.biddedDeal ? "Yes" : "No";
    updatedData.guaranteedDeal = updatedData.guaranteedDeal ? "Yes" : "No";
    return this.db.list('items').set(itemKey, updatedData);
  }

  deleteItem(itemKey) {
    return this.db.list('items').remove(itemKey);
  }

}
