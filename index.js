const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers=(drivers)=>{
    let firstTwo ;
                
        return firstTwo =drivers.slice(0,2)
   
    
     }

     const returnLastTwoDrivers =(drivers)=>{
      let lastTwoDriver;
                    
            return lastTwoDriver= drivers.slice(-2)
        
        
         }
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 function createFareMultiplier(multipleFare){
    return multipleFare=(fare)=>{ return fare*fare}

 }
 function createFareMultiplier(fare) {
   return function (multiplier) {
     return fare * multiplier;
   }
   };
 const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, twoDrivers) {
  return twoDrivers(drivers);
  console.log(twoDrivers);
};
