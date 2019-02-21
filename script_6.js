const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

let seventies = [];
entrepreneurs.forEach(e => {
    if (e.year < 1980 && e.year >= 1970) {
        seventies.push(e)
    }
})
console.log(seventies);

let name = [];
let x = 0;
entrepreneurs.forEach(e => {
    name.push(e.first + " " + e.last)
})
console.log(name);

let age = []
entrepreneurs.map((e, i) => {
    age[i] = 2019 - e.year;
})
entrepreneurs.map((e, i) => {
    console.log(e.last + ":" + age[i])
});

entrepreneurs.sort((a, b) => {
    if (a.last < b.last) {
        return -1
    } else if (a.last === b.last) {
        return 0
    } else {
        return 1
    }
})
console.log(entrepreneurs);