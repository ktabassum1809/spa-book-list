const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Norman, Don",
    img: "images/camp-7103189_640.png",
  },
  {
    title: "The Most Human Human",
    author: "Christian, Brian",
    img: "images/cupcakes-2887270_640.jpg",
  },
  {
    title: "Thinking with Type",
    author: "Lupton, Ellen",
    img: "images/manufacturing-35087_640.png",
  },
  {
    title: "Eloquent JavaScript",
    author: "Haverbeke, Marijn",
    img: "images/snake-eagle-6591348_640.jpg",
  },
];
let ul1 = document.querySelector("ul");

let books1 = books.sort(function(a, b){
   return a.author.localeCompare(b.author);
});
console.log(books1);

 books1.forEach(function (item) {
  const l1 = document.createElement("li");
  l1.classList.add("book"); 
  l1.style.width = "250px";
  l1.style.height = "500px";
  l1.border = "3px solid black";
  console.log(l1);// Add a class to the list item
  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.title;
  img.style.border = "3px solid black";
  img.style.width = "250px";
  img.style.height = "350px";

  const h2 = document.createElement("h4");
  h2.textContent = item.title;
  h2.style.padding = "10px";
  h2.style.textAlign = "center";
   
  const p = document.createElement("p");
  p.textContent = item.author;
  p.style.textAlign = "center";



  l1.appendChild(img);
  l1.appendChild(h2);
  l1.appendChild(p);

  ul1.appendChild(l1);
}
); 

