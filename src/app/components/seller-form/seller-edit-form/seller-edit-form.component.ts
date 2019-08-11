import { Component, OnInit } from '@angular/core';
import {currencies} from '../currencies';
import {offices} from '../offices';
import { SellerdataService } from 'src/app/services/sellerdata.service.js';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-seller-edit-form',
  templateUrl: './seller-edit-form.component.html',
  styleUrls: ['./seller-edit-form.component.css']
})
export class SellerEditFormComponent implements OnInit {
  
  // used for populating offices and currencies select options
  countryCodes = offices;
  currencyCodes = currencies;

  // firebase key for the item that will be modified
  itemToEditKey;

  // form group for form validation 
  editSellerForm = new FormGroup({
    sellerName: new FormControl('', Validators.required),
    contactName: new FormControl(''),
    currency: new FormControl([] || '', Validators.required),
    offices: new FormControl([] || '', Validators.required),
    biddedDeal: new FormControl(false),
    guaranteedDeal: new FormControl(false),
    email: new FormControl('', Validators.email)
  });

  constructor(private sellerService: SellerdataService, private router: Router, private route: ActivatedRoute) {

    // attempt to populate the form for the key specified in the current route 
    this.route.params.subscribe(params => {
      this.itemToEditKey = params.key;
     
      this.sellerService.getItem(this.itemToEditKey).subscribe(currentItem => {
        if(currentItem.length < 1){
          console.log('invalid key',currentItem);
          this.router.navigate(['/']);
        }
        else{
        this.editSellerForm.patchValue({
          sellerName: currentItem[6],
          contactName: currentItem[1],
          currency: currentItem[2],
          offices: currentItem[5],
          biddedDeal: true ? currentItem[0] === 'Yes' : false,
          guaranteedDeal: true ? currentItem[4] === 'Yes' : false,
          email: currentItem[3],
        });
      }
      });
    });
  }

  ngOnInit() {

  }

  onEdit() {
    const validTextFields = this.editSellerForm.valid;
    const dealTypeSelected = this.editSellerForm.value.biddedDeal || this.editSellerForm.value.guaranteedDeal;
    const validSubmission = validTextFields && dealTypeSelected;

    if (validSubmission) {
      this.sellerService.updateItem(this.itemToEditKey, this.editSellerForm.value).then(_ => {
        alert('The item was updated.')
        this.router.navigate(['/']);
      }).catch(err => {
        alert('Error updating the item');
        console.log(err);
      });;

    }
    else {
      window.alert('Please correct the form errors');
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }

}
