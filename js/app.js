'use strict';
             
let hours = ['6am','7pm','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// let container = document.getElementById('container');
function randomGenrator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


function Location(locationName,minCustomer,maxCustomer,avgPerSale){
    this.name = locationName;
    this.min  = minCustomer;
    this.max  = maxCustomer;
    this.avg  = avgPerSale;
    this.randomCustomers=[];
    this.numOfCookiesSoldPerHour= [];
    this.total = 0;
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
                       
                     }
                }
    Location.prototype.render = function(){

                  
                  let table = document.getElementById('table1');
                   let tr1=document.createElement('tr');
                   table.appendChild(tr1);
                   let td1 =document.createElement('td')
                   tr1.appendChild(td1);
                   td1.textContent=this.name;
                   let td2;
                   for(let i=0;i<hours.length;i++){
                    td2=document.createElement('td');
                    tr1.appendChild(td2);
                    td2.textContent=this.randomCustomers[i];
                   }
                   let td3=document.createElement('td');
                   tr1.appendChild(td3);
                   td3.textContent=this.total;

                }
               let Seattle = new Location('seattle',23,65, 6.3);    
               Seattle.randomCustomerPerHour();
               Seattle.cookiesSoldPerHour();
               Seattle.render();
               let Tokyo = new Location('Tokyo',3,24, 1.2);    
               Tokyo.randomCustomerPerHour();
               Tokyo.cookiesSoldPerHour();
               Tokyo.render();
               let Dubai = new Location('Dubai',11,38,3.7);    
               Dubai.randomCustomerPerHour();
               Dubai.cookiesSoldPerHour();
               Dubai.render();
               let Paris = new Location('Paris',20,38,2.3);    
               Paris.randomCustomerPerHour();
               Paris.cookiesSoldPerHour();
               Paris.render();
               let Lima = new Location('Lima',2,16,4.6);    
               Lima.randomCustomerPerHour();
               Lima.cookiesSoldPerHour();
               Lima.render();
               