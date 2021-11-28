// Contacts and Address Book

function AddressBook(){
  this.contacts={};
  this.currentId = 0;

AddressBook.prototype.addContact = function(contact){
    contact.id = this.assignId();  
    this.contacts[contact.id] = contact;
  };
  
}

AddressBook.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
};

function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};




//Objects within Objects

let pdx = {name: "Portland"};
let sfo = {name: "San Francisco"};
let sea = {name: "Seattle"};
let mke = {name: "Milwaukee"};
let cso = {name: "Aktau"};
let dzn = {name: "Zhezkazgan"};
let usa = {name: "United States of America", cities: [pdx, sfo, sea, mke] };
let kazakhstan= {name: "Kazakhstan", cities: [cso, dzn] };
let uruguay = {name: "Uruguay", cities: [] };

let boxOfStuff = {
  book: "Object-Oriented JAvascript",
  smallerBox: {
    stuff: ["pencils", "pens"],
    smallestBox: {
      stuff: ["paper clips", "thumbtacks"]
    }
  }
};