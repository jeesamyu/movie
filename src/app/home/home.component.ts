import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

total=[12,13,45,67,23]

hello='this is that'





//   isSpecial=true;
//   isUnchanged=true;
//   canSave=true;
 
//   currentItem={name:''}

//   getValue(hello: Event): string {
//     return (hello.target as HTMLInputElement).value;
//   }

//   currentClasses: Record < string , string > = {} ;

// setCurrentClasses() {

//   this.currentClasses={
//     'font-size' : this.isSpecial ? '30px' : '18px',
   
//   };
// }

// valueget(event: Event){
//   return (event.target as HTMLInputElement).value;
// }




// style1={
//    'color':'green'
// }

// change(id:number)
// {
//   let val = id < 4 ? 'under4' : 'above4';
//   switch(val){
//     case 'under4' : 
//     return 'green';
//     case 'above4 ' : 
//     return 'red';
//   }

// }
// stateflag = false;

// togglestate(){
//   this.stateflag = !this.stateflag;
// }

// submit(){
//   console.log('button sumbitted')
// }

// calculatclass(){
//   return{
//     btn : true ,
//     'btn-primary':true ,
//     'btn-extra-class': this.stateflag
//   }
// }

// showSad:any;

// hero=[{name:'a1', emotion:'sad'},{name:'b1',emotion:'happy'},{name:'c1',emotion:'confused'}];

// color1:any = '' ;

// getcolor(){
//   this.color1 = 'color2';
  
// }
// jeeva=['jeesamyu'];

//   tables = [
//     {id:1, name: 'jee'},
//     {id:2, name: 'samyu'},
//     {id:3, name: 'jeesamyu'},
//     {id:4, name: 'sample'},
//     {id:5, name: 'sample 2'},
//     {id:6, name: 'name3'}
//   ];

// birthday =new Date (2001,8,27);




//   nested:any=[
//     {type:'games',collections:[{no:'cod'},{no:'t2t'}]},
//   {type2:'books',collections:[{no1:'ps'},{no1:'jungle'}]}]


//   styles: Record<string,boolean>= {};
//   setCurrent():any;
//   setCurrent(){
//     this.styles= {
      
//     };

//   }
check=false;

// Loggin= false;
// Logout = false;
// loginlogout(){
//   this.Loggin = true;
// }
// logout(){
//   this.Loggin = false;
// }
  name:any= {name:'a', class:'bca'};
  viewofthepage = 'wew';
    // onAdd(){
    //   this.tables.push({id:7 , name:'item7'})
    // }

image1 = true;
image2 = false; 

first(){
  this.image1 = !this.image1;
  this.image2 = false
}

second(){
  this.image2 = !this.image2;
  this.image1 = false;
}

color = 'yellow';

color1 = 'blue';

a1='#black';
a2='';
a3='';
a4='';

mystyle={};

change(){
  this.mystyle={background:'pink' , color:'green' }

}








// change(table: { name: string; }){
//   table.name = 'hello';
// }
    // onRemove(table:any){
    //   let index = this.tables.indexOf(table)
    //   this.tables.splice(index , 1)
    // }
  constructor() { }

  ngOnInit(): void {
  }

}
