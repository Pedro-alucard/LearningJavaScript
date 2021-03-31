
 var hotel = {

    name = 'quayy',
    rooms = 40,
    booked = 25,
    gym = true,
    roomTypes = ['twin', 'double', 'suite'],

    checkAvaliability : function(){
        return this.rooms - this.booked;
     }
 }

 var hotelName = hotel.name;
 var hotelName = hotel['name'];
// var roomsFree = hotel.checkAvaliability();

// Creating a Object with constructor notation

var house = new Object();

house.rooms = 3;
house.bathRooms = 2;
house.color = 'blue';
house.rent = false;

house.isRent = function(){
    return this.rent;
};

// updating properties

house.rooms = 5;

// deleting a property

delete house.color;


// creating a empty object var house = {}

// creating many objects

function House(rooms, bathRooms, rent){

    this.rooms = rooms;
    this.bathRooms = bathRooms;
    this.rent = rent;

    House.isRent = function(){
        return this.rent;
    };
}

var house1 = new House(5, 4, true);
var house2 = new House(1, 1, false);

house1.color = 'blue';

