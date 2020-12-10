import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { AddProductService } from '../add-product.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {


  get productId(){
    return this.createForm.get('productId');
  }
  get productName(){
    return this.createForm.get('productName');
  }
  get type(){
    return this.createForm.get('type');
  }

  get price(){
    return this.createForm.get('price');
  }

  get description(){
    return this.createForm.get('description')
  }

  get startDate(){
    return this.createForm.get('startDate')
  }

  get endDate(){
    return this.createForm.get('endDate')
  }


  
  
  constructor(private fb:FormBuilder, private _addProductService: AddProductService, private cd: ChangeDetectorRef) { }

  createForm = this.fb.group({
    productId: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(6)]],
    productName: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(30)]],
    type: ['',[Validators.required]],
    price: ['',[Validators.required,Validators.min(1)]],
    description : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(100)]],
    startDate : ['',[Validators.required]],
    endDate : ['',[Validators.required]],
    fileSource: ['',[Validators.required]],
    fileName: '',
  },{
    validator:this.dateLessThan('startDate','endDate')
  })



  ngOnInit(): void {
  }

  dateLessThan(from: string, to: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[from];
      let t = group.controls[to];
      if (f.value > t.value) {
        return {
          dates: "End date should be greater than start date"
        };
      }
      return {};
    }
}

  public selectedfile =null;
  
  onFileSelected(event){
    
    // if(event.target.files.length > 0) 
    //  {
    //    this.createForm.patchValue({
    //       fileName: event.target.files[0].name,
    //    })
    //  }
    
    console.log(event);
    this.selectedfile=event.target.files[0];
    document.getElementById('show-file-name').innerHTML=this.selectedfile.name;
    console.log(this.selectedfile.name)
    console.log(this.selectedfile)

  }
    

  create(){
    const formData = new FormData();
    formData.append('productId',this.createForm.get('productId').value);
    formData.append('productName',this.createForm.get('productName').value)
    formData.append('type',this.createForm.get('type').value);
    formData.append('price',this.createForm.get('price').value);
    formData.append('description',this.createForm.get('description').value);
    formData.append('startDate',this.createForm.get('startDate').value);
    formData.append('endDate',this.createForm.get('endDate').value);
    formData.append('image',this.selectedfile,this.selectedfile.name)

    console.log(this.createForm.value)
    this._addProductService.create(formData)
      .subscribe(
        response => console.log("success",response),
        error => console.log("error!",error)
      )

  }

}
