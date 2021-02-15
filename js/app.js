'use strict';
              // 9   // 8  
let hours = ['6am','7pm','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let container = document.getElementById('container');
function randomGenrator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// let table = document.createElement('table');


let seattle = {
    location:'Seattle',
    minCustomer:23,
    maxCustomer:65,
    avgPerSale:6.3,
    randomCustomers:[],
    numOfCookiesSoldPerHour: [],
    total:0,
    randomCustomerPerHour:function(){
        for(let i = 0 ; i < hours.length ; i++){
            this.randomCustomers.push(randomGenrator(this.minCustomer,this.maxCustomer));
        }
    },
    cookiesSoldPerHour:function(){
        for(let i = 0 ; i < hours.length; i++){
        this.numOfCookiesSoldPerHour.push(Math.ceil(this.randomCustomers[i]*this.avgPerSale));
        this.total = this.total + this.numOfCookiesSoldPerHour[i];
        // undifined = undifined + 35 
        }

    },
    render:function(){
        let headerEl = document.createElement('h2');
        container.appendChild(headerEl);
        headerEl.textContent = this.location;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        let liEl;
        for(let i =0 ; i<this.numOfCookiesSoldPerHour.length; i++){
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]} : ${this.numOfCookiesSoldPerHour[i]} Cookies`;
        }
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent =  'Total : ' + this.total + ' Cookies';

    }
}
seattle.randomCustomerPerHour();
seattle.cookiesSoldPerHour();
seattle.render();



let tokyo = {
    location:'Tokyo',
    minCustomer:3,
    maxCustomer:24,
    avgPerSale:1.2,
    randomCustomers:[],
    numOfCookiesSoldPerHour: [],
    total:0,
    randomCustomerPerHour:function(){
        for(let i = 0 ; i < hours.length ; i++){
            this.randomCustomers.push(randomGenrator(this.minCustomer,this.maxCustomer));
        }
    },
    cookiesSoldPerHour:function(){
        for(let i = 0 ; i < hours.length; i++){
        this.numOfCookiesSoldPerHour.push(Math.ceil(this.randomCustomers[i]*this.avgPerSale));
        this.total = this.total + this.numOfCookiesSoldPerHour[i];
        // undifined = undifined + 35 
        }

    },
    render:function(){
        let headerEl = document.createElement('h2');
        container.appendChild(headerEl);
        headerEl.textContent = this.location;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        let liEl;
        for(let i =0 ; i<this.numOfCookiesSoldPerHour.length; i++){
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]} : ${this.numOfCookiesSoldPerHour[i]} Cookies`;
        }
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent =  'Total : ' + this.total + ' Cookies';

    }
}
tokyo.randomCustomerPerHour();
tokyo.cookiesSoldPerHour();
tokyo.render();

let dubai = {
  location:'Dubai',
  minCustomer:11,
  maxCustomer:38,
  avgPerSale:3.7,
  randomCustomers:[],
  numOfCookiesSoldPerHour: [],
  total:0,
  randomCustomerPerHour:function(){
      for(let i = 0 ; i < hours.length ; i++){
          this.randomCustomers.push(randomGenrator(this.minCustomer,this.maxCustomer));
      }
  },
  cookiesSoldPerHour:function(){
      for(let i = 0 ; i < hours.length; i++){
      this.numOfCookiesSoldPerHour.push(Math.ceil(this.randomCustomers[i]*this.avgPerSale));
      this.total = this.total + this.numOfCookiesSoldPerHour[i];
      // undifined = undifined + 35 
      }

  },
  render:function(){
      let headerEl = document.createElement('h2');
      container.appendChild(headerEl);
      headerEl.textContent = this.location;
      let ulEl = document.createElement('ul');
      container.appendChild(ulEl);
      let liEl;
      for(let i =0 ; i<this.numOfCookiesSoldPerHour.length; i++){
          liEl = document.createElement('li');
          ulEl.appendChild(liEl);
          liEl.textContent = `${hours[i]} : ${this.numOfCookiesSoldPerHour[i]} Cookies`;
      }
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent =  'Total : ' + this.total + ' Cookies';

  }
}
dubai.randomCustomerPerHour();
dubai.cookiesSoldPerHour();
dubai.render();

let paris = {
  location:'Paris',
  minCustomer:20,
  maxCustomer:38,
  avgPerSale:2.3,
  randomCustomers:[],
  numOfCookiesSoldPerHour: [],
  total:0,
  randomCustomerPerHour:function(){
      for(let i = 0 ; i < hours.length ; i++){
          this.randomCustomers.push(randomGenrator(this.minCustomer,this.maxCustomer));
      }
  },
  cookiesSoldPerHour:function(){
      for(let i = 0 ; i < hours.length; i++){
      this.numOfCookiesSoldPerHour.push(Math.ceil(this.randomCustomers[i]*this.avgPerSale));
      this.total = this.total + this.numOfCookiesSoldPerHour[i];
      // undifined = undifined + 35 
      }

  },
  render:function(){
      let headerEl = document.createElement('h2');
      container.appendChild(headerEl);
      headerEl.textContent = this.location;
      let ulEl = document.createElement('ul');
      container.appendChild(ulEl);
      let liEl;
      for(let i =0 ; i<this.numOfCookiesSoldPerHour.length; i++){
          liEl = document.createElement('li');
          ulEl.appendChild(liEl);
          liEl.textContent = `${hours[i]} : ${this.numOfCookiesSoldPerHour[i]} Cookies`;
      }
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent =  'Total : ' + this.total + ' Cookies';

  }
}
paris.randomCustomerPerHour();
paris.cookiesSoldPerHour();
paris.render();


let lima = {
  location:'Lima',
  minCustomer:2,
  maxCustomer:16,
  avgPerSale:4.6,
  randomCustomers:[],
  numOfCookiesSoldPerHour: [],
  total:0,
  randomCustomerPerHour:function(){
      for(let i = 0 ; i < hours.length ; i++){
          this.randomCustomers.push(randomGenrator(this.minCustomer,this.maxCustomer));
      }
  },
  cookiesSoldPerHour:function(){
      for(let i = 0 ; i < hours.length; i++){
      this.numOfCookiesSoldPerHour.push(Math.ceil(this.randomCustomers[i]*this.avgPerSale));
      this.total = this.total + this.numOfCookiesSoldPerHour[i];
      // undifined = undifined + 35 
      }

  },
  render:function(){
      let headerEl = document.createElement('h2');
      container.appendChild(headerEl);
      headerEl.textContent = this.location;
      let ulEl = document.createElement('ul');
      container.appendChild(ulEl);
      let liEl;
      for(let i =0 ; i<this.numOfCookiesSoldPerHour.length; i++){
          liEl = document.createElement('li');
          ulEl.appendChild(liEl);
          liEl.textContent = `${hours[i]} : ${this.numOfCookiesSoldPerHour[i]} Cookies`;
      }
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent =  'Total : ' + this.total + ' Cookies';

  }
}
lima.randomCustomerPerHour();
lima.cookiesSoldPerHour();
lima.render();

