import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainComponent } from '../main/main.component';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  name = new FormControl('', [Validators.required , Validators.maxLength(20)] );
  name1 =new FormControl('' , [Validators.maxLength(20)]);
  
  email = new FormControl( '', [Validators.required, Validators.maxLength(30),Validators.minLength(11)]);
  sumbit(){
    console.log('error' , this.email.errors)
    console.log( 'valid', this.email.valid)
  }
  

  non(){

    
  }

  onSubmit(thistForm:any){
    document.getElementById('printed')
  }
reset(thist:any,thist1:any,thist2:any){
 thist.value=''; thist1.value=''; thist2.value='';
}

getimage='https://thumbs.dreamstime.com/b/example-red-tag-example-red-square-price-tag-117502755.jpg';
value:any;
submit(value:any){
  if(value >= 0 && value <= 5){
    return 'low';
  }else if(value > 6 && value <= 10 ){
    return 'medium';
  }else {
    return 'high';
  }

}


datas:any = ['hello','get','some','games'];

rout(){
  this.router.navigate([MainComponent]);
  
}

errors:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
