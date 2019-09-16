function Scooter(year, color, model){
    this.year = year;
    this.color = color;
    this.model = model
  }
  
  function Driver(name, age, experience){
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  function PickupLocation(address, city){
    this.address = address;
    this.city = city;
  }

  //Tried it with the arrow function. it did not pass any of the tests
  // const Scooter = (year, color, model) => {
//     this.year = year;
//     this.color = color;
//     this.model = model
// };

// const Driver = (name, age, experience) => {
//     this.name = name;
//     this.age = age;
//     this.experience = experience
// };

// const PickupLocation = (address, city) => {
//     this.address = address;
//     this.city = city
// };
