'use strict';
             
let hours = ['6am','7pm','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function randomGenrator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
let gTotal=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let table = document.getElementById('table1');
let newLocation ;
let arr=[];


function Location(locationName,minCustomer,maxCustomer,avgPerSale){
    this.name = locationName;
    this.min  = minCustomer;
    this.max  = maxCustomer;
    this.avg  = avgPerSale;
    this.randomCustomers=[];
    this.numOfCookiesSoldPerHour= [];
    this.total = 0;
    arr.push(this);
   
    }
    Location.prototype.randomCustomerPerHour=function(){
                for(let i = 0 ; i < hours.length ; i++){
                    this.randomCustomers.push(randomGenrator(this.min,this.max));
                }
            }
    Location.prototype.cookiesSoldPerHour=function(){
               for(let i = 0 ; i < hours.length; i++){
                this.numOfCookiesSoldPerHour.push(Math.ceil(this.randomCustomers[i]*this.avg));
                this.total = this.total + this.numOfCookiesSoldPerHour[i];
                gTotal[i]=  gTotal[i]+this.numOfCookiesSoldPerHour[i];   
                     }
                }          
    Location.prototype.render = function(){
                   table = document.getElementById('table1');
                   let tr1=document.createElement('tr');
                   table.appendChild(tr1);
                   let td1 =document.createElement('td')
                   tr1.appendChild(td1);
                   td1.textContent=this.name;
                   let td2;
                   for(let i=0;i<hours.length;i++){
                    td2=document.createElement('td');
                    tr1.appendChild(td2);
                    td2.textContent=this.numOfCookiesSoldPerHour[i];
                   }
                   let td3=document.createElement('td');
                   tr1.appendChild(td3);
                   td3.textContent=this.total;
                    
                }

         function header(){
          table = document.getElementById('table1');
            let trh =document.createElement('tr');
            table1.appendChild(trh);
            let thEl;
            thEl=document.createElement('th');
            trh.appendChild(thEl);
           
            for(let i=0;i<hours.length;i++){
              thEl=document.createElement('th');
            trh.appendChild(thEl);
            thEl.textContent=hours[i];
                         }
                         thEl=document.createElement('th');
                         trh.appendChild(thEl);
                         thEl.textContent='Daily Location Total';
           }  
           
          function footer(){
            table = document.getElementById('table1');
            let trf=document.createElement('tr');
            table1.appendChild(trf);
            let thEl;
            thEl=document.createElement('th');
            trf.appendChild(thEl);
            thEl.textContent="Totals";
            let sumOfSum=0;
            for(let i=0;i<gTotal.length;i++){
              sumOfSum +=gTotal[i];
            thEl=document.createElement('th');
            trf.appendChild(thEl);
            thEl.textContent=gTotal[i];
            }
            thEl=document.createElement('th');
            trf.appendChild(thEl);
            thEl.textContent=sumOfSum;
          } 
               header(); 
               let Seattle = new Location('seattle',23,65, 6.3);  
               let Tokyo = new Location('Tokyo',3,24, 1.2);    
               let Dubai = new Location('Dubai',11,38,3.7);    
               let Paris = new Location('Paris',20,38,2.3);    
               let Lima = new Location('Lima',2,16,4.6);  

              for(let i=0;i<arr.length;i++){
                arr[i].randomCustomerPerHour();
                arr[i].cookiesSoldPerHour();
                arr[i].render();
              }

            function deleterow(tableID) {
              let table = document.getElementById(tableID);
              let rowCount = table.rows.length;
          
              table.deleteRow(rowCount -2);
          }

            const form =document.getElementById('locationform');
            form.addEventListener('submit',locationcreate);
            function locationcreate(event){
              event.preventDefault();
              // for(let i=0;i<arr.length;i++){
              //   if(arr[i][0]===locationName){

              //   }
              // }
              const locationName =event.target.nameField.value;
              const minCustomer =event.target.minField.value;
              const maxCustomer =event.target.maxField.value;
              const avgCustomer =event.target.avgField.value;
               
               newLocation = new Location(locationName, minCustomer, maxCustomer, avgCustomer);
                newLocation.randomCustomerPerHour();
                newLocation.cookiesSoldPerHour();
                newLocation.render();
                deleterow('table1');
                footer();
            }
           
       
            footer();
        // console.log(arr[4].name);