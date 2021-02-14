'use strict';

let arrOfHours=[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function numOfCustomer (min,max){
 return Math.floor(Math.random() * (max - min + 1) + min)
}
let seattle ={
   locationName:'Seattle',
   minCust    :23,
   maxCust    :65,
   avgCookies :6.3,
   totalfinal:0,
   arrOfseattle:[],
   numOfCust :function(){
       let lastIndex=0;
       for(let i=0;i<arrOfHours.length;i++){
           lastIndex++;
      this.avgCookies =numOfCustomer(this.minCust,this.maxCust);
      let total=this.avgCookies;
      this.totalfinal=this.totalfinal+total
      if(i<=6){
      this.arrOfseattle[i]= `${arrOfHours[i]}am :${this.avgCookies} cookies`;}
      else{
        this.arrOfseattle[i]=`${arrOfHours[i]}pm :${this.avgCookies} cookies`;  
      }
    }
    this.arrOfseattle[lastIndex++]=`Total is :${this.totalfinal}cookies`;
   },
   
   render:function(){
    let div =document.getElementById('div1');
    let hOneEl =document.createElement('h1');
    div.appendChild(hOneEl);
    hOneEl.textContent=this.locationName;
    let ulEl =document.createElement('ul');
    hOneEl.appendChild(ulEl);
    ulEl.textContent=this.locationName;
    
    for(let i=0;i<this.arrOfseattle.length;i++){
        let liEl=document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent=this.arrOfseattle[i];
    }

   

   }
   
}
seattle.numOfCust();
console.log (seattle.arrOfseattle);
seattle.render();

let tokyo ={
    locationName:'tokyo',
    minCust    :3,
    maxCust    :24,
    avgCookies :1.2,
    totalfinal:0,
    arrOftokyo:[],
    numOfCust :function(){
        let lastIndex=0;
        for(let i=0;i<arrOfHours.length;i++){
            lastIndex++;
       this.avgCookies =numOfCustomer(this.minCust,this.maxCust);
       let total=this.avgCookies;
       this.totalfinal=this.totalfinal+total
       if(i<=6){
       this.arrOftokyo[i]= `${arrOfHours[i]}am :${this.avgCookies} cookies`;}
       else{
         this.arrOftokyo[i]=`${arrOfHours[i]}pm :${this.avgCookies} cookies`;  
       }
     }
     this.arrOftokyo[lastIndex++]=`Total is :${this.totalfinal}cookies`;
    },
    
    render:function(){
     let div =document.getElementById('div1');
     let hOneEl =document.createElement('h1');
     div.appendChild(hOneEl);
     hOneEl.textContent=this.locationName;
     let ulEl =document.createElement('ul');
     hOneEl.appendChild(ulEl);
     ulEl.textContent=this.locationName;
     
     for(let i=0;i<this.arrOftokyo.length;i++){
         let liEl=document.createElement('li');
         ulEl.appendChild(liEl);
         liEl.textContent=this.arrOftokyo[i];
     } } }
     

     tokyo.numOfCust();
//console.log (tokyo.arrOftokyo);
    tokyo.render();


    let dubai ={
        locationName:'dubai',
        minCust    :11,
        maxCust    :38,
        avgCookies :3.7,
        totalfinal:0,
        arrOfdubai:[],
        numOfCust :function(){
            let lastIndex=0;
            for(let i=0;i<arrOfHours.length;i++){
                lastIndex++;
           this.avgCookies =numOfCustomer(this.minCust,this.maxCust);
           let total=this.avgCookies;
           this.totalfinal=this.totalfinal+total
           if(i<=6){
           this.arrOfdubai[i]= `${arrOfHours[i]}am :${this.avgCookies} cookies`;}
           else{
             this.arrOfdubai[i]=`${arrOfHours[i]}pm :${this.avgCookies} cookies`;  
           }
         }
         this.arrOfdubai[lastIndex++]=`Total is :${this.totalfinal}cookies`;
        },
        
        render:function(){
         let div =document.getElementById('div1');
         let hOneEl =document.createElement('h1');
         div.appendChild(hOneEl);
         hOneEl.textContent=this.locationName;
         let ulEl =document.createElement('ul');
         hOneEl.appendChild(ulEl);
         ulEl.textContent=this.locationName;
         
         for(let i=0;i<this.arrOfdubai.length;i++){
             let liEl=document.createElement('li');
             ulEl.appendChild(liEl);
             liEl.textContent=this.arrOfdubai[i];
         } } }
         
         dubai.numOfCust();
    // console.log (tokyo.arrOftokyo);
    dubai.render();

    let paris ={
        locationName:'paris',
        minCust    :11,
        maxCust    :38,
        avgCookies :3.7,
        totalfinal:0,
        arrOfparis:[],
        numOfCust :function(){
            let lastIndex=0;
            for(let i=0;i<arrOfHours.length;i++){
                lastIndex++;
           this.avgCookies =numOfCustomer(this.minCust,this.maxCust);
           let total=this.avgCookies;
           this.totalfinal=this.totalfinal+total
           if(i<=6){
           this.arrOfparis[i]= `${arrOfHours[i]}am :${this.avgCookies} cookies`;}
           else{
             this.arrOfparis[i]=`${arrOfHours[i]}pm :${this.avgCookies} cookies`;  
           }
         }
         this.arrOfparis[lastIndex++]=`Total is :${this.totalfinal}cookies`;
        },
        
        render:function(){
         let div =document.getElementById('div1');
         let hOneEl =document.createElement('h1');
         div.appendChild(hOneEl);
         hOneEl.textContent=this.locationName;
         let ulEl =document.createElement('ul');
         hOneEl.appendChild(ulEl);
         ulEl.textContent=this.locationName;
         
         for(let i=0;i<this.arrOfparis.length;i++){
             let liEl=document.createElement('li');
             ulEl.appendChild(liEl);
             liEl.textContent=this.arrOfparis[i];
         } } }
         
         paris.numOfCust();
    // console.log (tokyo.arrOftokyo);
    paris.render();

    let Lima ={
        locationName:'Lima',
        minCust    :11,
        maxCust    :38,
        avgCookies :3.7,
        totalfinal:0,
        arrOfLima:[],
        numOfCust :function(){
            let lastIndex=0;
            for(let i=0;i<arrOfHours.length;i++){
                lastIndex++;
           this.avgCookies =numOfCustomer(this.minCust,this.maxCust);
           let total=this.avgCookies;
           this.totalfinal=this.totalfinal+total
           if(i<=6){
           this.arrOfLima[i]= `${arrOfHours[i]}am :${this.avgCookies} cookies`;}
           else{
             this.arrOfLima[i]=`${arrOfHours[i]}pm :${this.avgCookies} cookies`;  
           }
         }
         this.arrOfLima[lastIndex++]=`Total is :${this.totalfinal}cookies`;
        },
        
        render:function(){
         let div =document.getElementById('div1');
         let hOneEl =document.createElement('h1');
         div.appendChild(hOneEl);
         hOneEl.textContent=this.locationName;
         let ulEl =document.createElement('ul');
         hOneEl.appendChild(ulEl);
         ulEl.textContent=this.locationName;
         
         for(let i=0;i<this.arrOfLima.length;i++){
             let liEl=document.createElement('li');
             ulEl.appendChild(liEl);
             liEl.textContent=this.arrOfLima[i];
         } } }
         
         Lima.numOfCust();
    // console.log (tokyo.arrOftokyo);
    Lima.render();