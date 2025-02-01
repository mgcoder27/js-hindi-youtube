const nums = [1,2,3,4,5,6];

const newnums = nums.filter((num) => num%2==0)
console.log(newnums);
// yahan par jo humne kiya uski help se humne jo elements chahiye the whi liye condition ko dekar

const books = [
    {
      title: "The Great Gatsby",
      genre: "Fiction",
      publishYear: 1925,
      editionYear: 2021
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publishYear: 1960,
      editionYear: 2015
    },
    {
      title: "1984",
      genre: "Dystopian",
      publishYear: 1949,
      editionYear: 2020
    },
    {
      title: "The Catcher in the Rye",
      genre: "Coming-of-Age",
      publishYear: 1951,
      editionYear: 2019
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      genre: "Non-Fiction",
      publishYear: 2011,
      editionYear: 2022
    }
  ];

  const userbooks = books.filter((bk) =>bk.genre ==='Fiction');
  console.log(userbooks);
  const userbooks2 = books.filter((bk) =>bk.publishYear>1950);
  console.log(userbooks2);

const newnum = [1,2,3,4];
const newnum2 = newnum.map((num) => num + 10);
console.log(newnum2);

const mytotal = newnum.reduce(function(acc,currval){
    console.log(`acc : ${acc}, currval : ${currval}`);
    
    return acc+currval;
}, 0)

console.log(mytotal);
