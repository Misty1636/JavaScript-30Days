const inventors = [
  {
    first: 'Albert', last: 'Einstein', year: 1879, passed: 1955,
  },
  {
    first: 'Isaac', last: 'Newton', year: 1643, passed: 1727,
  },
  {
    first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642,
  },
  {
    first: 'Marie', last: 'Curie', year: 1867, passed: 1934,
  },
  {
    first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630,
  },
  {
    first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543,
  },
  {
    first: 'Max', last: 'Planck', year: 1858, passed: 1947,
  },
  {
    first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979,
  },
  {
    first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852,
  },
  {
    first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905,
  },
  {
    first: 'Lise', last: 'Meitner', year: 1878, passed: 1968,
  },
  {
    first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909,
  },
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const ans = inventors.filter(item => item.year >= 1500 && item.year < 1600);
console.table('1', ans);


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const ans2 = inventors.map(item => `${item.first} ${item.last}`);
console.table('2', ans2);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const ans3 = inventors.sort((a, b) => b.year - a.year);
console.table('3', ans3);


// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const ans4 = inventors.reduce((total, obj) => total + obj.passed - obj.year, 0);
console.table('4', ans4);

// 5. Sort the inventors by years lived

const ans5 = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
inventors.forEach((item) => {
  item.live = item.passed - item.year;
});
console.table('5', ans5);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const ans6 = document.querySelectorAll('.mw-category-group li a');
const ary = [];
ans6.forEach((item) => { ary.push(item.title); });

ary.filter(item => item.indexOf('de') !== -1);


// 7. sort Exercise
// Sort the people alphabetically by last name

const ans7 = people.sort((a, b) => (a.split(',')[1] > b.split(',')[1] ? 1 : -1));
console.log('7', ans7);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const ans8 = data.reduce((total, obj) => {
  if (!total[obj]) total[obj] = 0;
  total[obj] += 1;
  return total;
}, {});

console.log('8', ans8);
