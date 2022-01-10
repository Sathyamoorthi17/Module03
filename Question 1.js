// 1.For the given JSON iterate over all for loops (for, for in, for of, forEach)

var data = [
  {
    "_id": "61dc32775586cb257a86449c",
    "index": 0,
    "guid": "ae711f03-861d-4c8c-9c0b-a5f636c0dbc7",
    "isActive": false,
    "balance": "$3,660.80",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "green",
    "name": "Mills Nichols",
    "gender": "male",
    "company": "SPACEWAX",
    "email": "millsnichols@spacewax.com",
    "phone": "+1 (962) 581-2503",
    "address": "982 Cox Place, Snelling, Nebraska, 2637",
    "about": "Proident est culpa irure sit irure. Sunt sunt velit reprehenderit ipsum magna deserunt excepteur id culpa non. Occaecat ipsum ipsum ipsum eu do eu aute duis. Id laborum voluptate fugiat aliqua labore.\r\n",
    "registered": "2016-02-05T07:19:02 -06:-30",
    "latitude": -49.775494,
    "longitude": -125.862064,
    "tags": [
      "minim",
      "aute",
      "et",
      "elit",
      "voluptate",
      "incididunt",
      "sint"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Macias Dunlap"
      },
      {
        "id": 1,
        "name": "Lesley Trujillo"
      },
      {
        "id": 2,
        "name": "Oconnor Avery"
      }
    ],
    "greeting": "Hello, Mills Nichols! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "61dc3277231ab15b4f108f99",
    "index": 1,
    "guid": "3f98fba5-7539-4fd3-bfe9-d3ed88e2020e",
    "isActive": true,
    "balance": "$2,505.83",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "brown",
    "name": "Ester Mayo",
    "gender": "female",
    "company": "EQUITAX",
    "email": "estermayo@equitax.com",
    "phone": "+1 (850) 573-2643",
    "address": "375 Sandford Street, Ebro, Oregon, 6457",
    "about": "Deserunt est sint cupidatat commodo. Quis consectetur labore pariatur reprehenderit laborum elit deserunt commodo occaecat mollit magna minim. Veniam occaecat ex labore Lorem. Eiusmod exercitation amet reprehenderit deserunt veniam qui dolore. Reprehenderit nisi sit esse occaecat irure. Nisi aute ex reprehenderit adipisicing esse laborum laboris deserunt et ullamco cupidatat id. Eu in Lorem fugiat voluptate minim adipisicing laborum.\r\n",
    "registered": "2018-08-23T05:23:24 -06:-30",
    "latitude": -21.485795,
    "longitude": 158.026015,
    "tags": [
      "incididunt",
      "ea",
      "irure",
      "sit",
      "ea",
      "deserunt",
      "Lorem"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Velez Hodges"
      },
      {
        "id": 1,
        "name": "Pennington Cameron"
      },
      {
        "id": 2,
        "name": "Mayo Reed"
      }
    ],
    "greeting": "Hello, Ester Mayo! You have 7 unread messages.",
    "favoriteFruit": "apple"
  }
];

// For loop

for(let i=0; i<data.length; i++){
    console.log(`Name : ${data[i].name} , Age : ${data[i].age} , Gender : ${data[i].gender}`);
}
// Output : 

// Name : Mills Nichols , Age : 24 , Gender : male
// Name : Ester Mayo , Age : 22 , Gender : female

// For in loop

for (const i in data){
    console.log(`Name : ${data[i].name} , Email : ${data[i].email} , Ph : ${data[i].phone}`);
}
// Output : 

// Name : Mills Nichols , Email : millsnichols@spacewax.com , Ph : +1 (962) 581-2503
// Name : Ester Mayo , Email : estermayo@equitax.com , Ph : +1 (850) 573-2643

// For of loop

for (const value of data ){
    console.log(value.friends);
}
// Output : 

// [ { id: 0, name: 'Macias Dunlap' },
//   { id: 1, name: 'Lesley Trujillo' },
//   { id: 2, name: 'Oconnor Avery' } ]
// [ { id: 0, name: 'Velez Hodges' },
//   { id: 1, name: 'Pennington Cameron' },
//   { id: 2, name: 'Mayo Reed' } ]

// For Each loop

var details = data.forEach ( (ele) => {
    console.log(`Name : ${ele.name} , FavoriteFruit : ${ele.favoriteFruit}`);
});
// Output : 

// Name : Mills Nichols , FavoriteFruit : strawberry
// Name : Ester Mayo , FavoriteFruit : apple
