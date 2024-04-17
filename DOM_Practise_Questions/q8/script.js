// Create a search bar that displays live search results as users type, updating the results without requiring a full page reload.

/* <div class="person">
                <img src="https://picsum.photos/40/40/?random1&category=people" alt="">
                <div class="name">sarthaks</div>
            </div> */
let input = document.querySelector("#searchBar");
let people = document.querySelector('.people');
let person = '';
let count = 0;

let names = [
    'Lilly',
    'Uriah',
    'Laylani',
    'Zaire',
    'Juliana',
    'Mathias',
    'Joanna',
    'Colter',
    'Kimberly',
    'Greyson',
    'Dulce',
    'Eli',
    'Itzayana',
    'Trey',
    'Frances',
    'Maison',
    'Piper',
    'Maximus',
    'Charley',
    'Sylas',
    'Jessica',
    'Nicolas',
    'Navy',
    'Colby',
    'Saoirse',
    'Nikolas',
    'Harlow',
    'Beau',
    'Mabel',
    'Ali',
    'Zara',
    'Raphael',
    'Amora',
    'Rayan',
    'Frankie',
    'Jericho',
    'River',
    'Jaxson',
    'Talia',
    'Shawn',
    'Milena',
    'Mauricio',
    'Kenna',
    'Lochlan',
    'Phoenix',
    'Sutton',
    'Skyler',
    'Joziah',
    'Princess',
    'Xavier',
    'Yareli',
    'Aden',
    'Ember',
    'Ian',
    'Veda',
    'Fisher',
    'Anne',
    'Jagger',
    'Ray',
    'Cleo',
    'Samuel',
    'Sara',
    'Dallas',
    'Octavia',
    'Ian',
    'Rosalia',
    'Langston',
    'Reina',
    'Krew',
    'Baylee',
    'Edison',
    'Lyric',
    'Shane',
    'Jocelyn',
    'Armani',
    'Hope',
    'Edgar',
    'Shiloh',
    'Joziah',
    'Halle',
    'Devon',
    'Bristol',
    'Sam',
    'Dallas',
    'Leo',
    'Reagan',
    'Malcolm',
    'Treasure',
    'Abdullah',
    'Izabella',
    'Lian',
    'Ryann',
    'Avery',
    'Rory',
    'Rohan',
    'Celia',
    'Jonas',
    'Nayeli',
    'Colten'
];
names.forEach(function (name) {
    person += `<div class="person">
    <img src="https://picsum.photos/40/40/?random${count}&category=people" alt="">
    <div class="name">${name}</div>
</div>`
    count++;
})

count = 0;
people.innerHTML = person;

let filteredNames;
input.addEventListener('input', function () {
    filteredNames = names.filter(function (name) {
        return name.toUpperCase().startsWith(input.value.toUpperCase());
    })
    let matchedPerson = '';
    filteredNames.forEach(function (name) {
        matchedPerson += `<div class="person">
        <img src="https://picsum.photos/40/40/?random${count}&category=people" alt="">
        <div class="name">${name}</div>
    </div>`
        count++;
    })
    people.innerHTML = matchedPerson;

})


