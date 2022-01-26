// i % 5 will give results 0-4, which are the indices of friends
var friends = [
  "Erwin Howell",
  "Samurai Cop",
  "Amir Shervan",
  "Steven Ayromlooi",
  "Robert Z'Dar",
];
// i % 10 will give results 0-9, which are the indices of locations
var locations = [
  "Bedroom",
  "Kitchen",
  "Living Room",
  "Dining Room",
  "Sitting Room",
  "Bathroom",
  "Garage",
  "Sun Room",
  "Reading Room",
  "Hallway",
];
// i % 20 will give results 0-19, which are the indices of weapons
var weapons = [
  "Club",
  "Dagger",
  "Axe",
  "Whip",
  "Pike",
  "Halberd",
  "Trident",
  "Flail",
  "Candlestick",
  "Revolver",
  "Can of Soup",
  "Chancla",
  "Gravity Hammer",
  "Energy Sword",
  "Garrote",
  "Chain",
  "Stone",
  "Fish",
  "Good ol' Fists",
  "Atomic Bomb",
];

for (var i = 1; i <= 100; i++) {
  //this loop goes from 1-100
  //console.log(`i is ${i}`);

  var newH3 = $("<h3>");

  newH3
    .text(`Accusation ${i}`)
    .addClass("m-auto border border-dark border-3 rounded")
    .click(function () {
      alert("alert text here");
    });

  $("#container").append(newH3);

  /*
  $("<div>")
    .append("h3")
    .addClass("m-auto border border-dark border-3 rounded-pill")
    .text(`Accusation ${i}`);
    */
}

//*************************************************Requirements********************************************************** */

//*todo - When the page first loads, insert 100 h3 elements onto the page

//*todo - When an accusation is clicked, an alert will appear that shows the full text of the accusation:
//* Accusation i: I accuse FRIEND_NAME, with the WEAPON_NAME in the LOCATION_NAME!

//*todo - Due to the way scoping works when using var, you will need to use closure to solve this problem
//* You need to create a function that returns a function that specializes in displaying an alert for a particular loop iteration
//* That returned function can be set as the click listener for the h3

//*todo - You will use the value of i in the loop to determine which of the above array items to use
//* Make sure you only select valid array indexes

//? done - You need an array of 5 friend names
//? done - You need an array of 10 location names
//? done - You need an array of 20 weapon/object names (feel free to be silly/absurd)
