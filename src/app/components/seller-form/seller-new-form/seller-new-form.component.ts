import { Component, OnInit } from '@angular/core';
import { currencies } from '../currencies';
import { offices } from '../offices';
import { SellerdataService } from 'src/app/services/sellerdata.service.js';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-new-form',
  templateUrl: './seller-new-form.component.html',
  styleUrls: ['./seller-new-form.component.css']
})
export class SellerNewFormComponent implements OnInit {

  // used for populating offices and currencies select options
  countryCodes = offices;
  currencyCodes = currencies;

  // form group for form validation
  newSellerForm: FormGroup = new FormGroup({
    sellerName: new FormControl('', Validators.required),
    contactName: new FormControl(''),
    currency: new FormControl('', Validators.required),
    offices: new FormControl('', Validators.required),
    biddedDeal: new FormControl(false),
    guaranteedDeal: new FormControl(false),
    email: new FormControl('', Validators.email)
  });

  constructor(private sellerService: SellerdataService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
    
    const validTextFields = this.newSellerForm.valid;
    const dealTypeSelected = this.newSellerForm.value.biddedDeal || this.newSellerForm.value.guaranteedDeal;
    const validSubmission = validTextFields && dealTypeSelected;

    if (validSubmission) {
      this.sellerService.insertItem(this.newSellerForm.value).then(_ => {
        window.alert('The item was added');
        this.newSellerForm.reset();
        this.router.navigate(['/']);
      }).catch(err => {
        alert('Error adding the item');
        console.log(err);
      });;
    }
    else {
      window.alert('Please correct the form errors');
    }
  }

  onCancel() {
    this.newSellerForm.reset();
  }
}
