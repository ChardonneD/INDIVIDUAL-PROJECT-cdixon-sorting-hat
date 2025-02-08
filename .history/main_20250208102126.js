const data = [ 
{
  id: 1,
  name: 'Harry Potter', 
  house: 'Gryffindor', 
  imageUrl: 'https://static.wikia.nocookie.net/neoencyclopedia/images/4/44/HarryPotter5poster.jpg',
},  
{
  id: 2,
  name: 'Hermione Granger', 
  house: 'Gryffindor', 
  imageUrl: 'https://static.wikia.nocookie.net/characters/images/a/a5/Latest_%2810%29.jpg',
},  
{
  id: 3,
  name: 'Ron Weasley', 
  house: 'Gryffindor', 
  imageUrl: 'https://static.wikia.nocookie.net/harrypotterfanon/images/5/56/Ron_Weasley_%28Scopatore%29.jpg',
},  
{
  id: 4,
  name: 'Draco Malfoy',
  house: 'Slytherin', 
  imageUrl: 'https://media.harrypotterfanzone.com/draco-malfoy-order-of-the-phoenix-portrait-3.jpg',
},  
{
  id: 5,
  name: 'Luna Lovegood', 
  house: 'Ravenclaw', 
  imageUrl: 'https://images.shoutwiki.com/harrypotter/e/e9/Luna_Lovegood.png',
},  
{
  id: 6,
  name: 'Cedric Diggory', 
  house: 'Hufflepuff', 
  imageUrl: 'https://static.wikia.nocookie.net/harrypotter/images/9/90/Cedric_Diggory_Profile.png',
 }
];

//Utility//
function renderToDom(divId, textToRender) {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToRender;
}
//Pic Container// 
const picArea = () => {
const domString = `
 <div class="container-lg" id="picContainer">
  <div class="row">
   <h3>Welcome To Hogwart's Virtual Sorting Ceremony</h3>
 <div class="row">
  <img src="https://media.tenor.com/vkDuuNm40XoAAAAM/hogwarts-legacy-warner-bros-interactive-entertainment.gif" class="img-fluid" alt="Animated Sorting Hat">
 </div>
 </div>
 `;
renderToDom('#picContainer', domString);
};  
//field/sort/reset//
const formField = () => {
const domString = `
<h5 class="card-text">
  Welcome to sorting session at Hogwarts School of Witchcraft and Wizardry.
  <p>The sorting hat will sort each student by name, into one of the four houses: Gryffindor, Hufflepuff, Ravenclaw, and Slytherin.</p>
  <p>The sorting hat will take into account your personality, values, and preferences to determine the house that best suits you.</p>
    <p>Good luck!</p>
<div class="card-body">
  <div class="d-flex justify-content-center">
   <input class="form-control form-control-sm" type="text" placeholder="Student's Name" aria-label=".form-control-sm example">
  </div>
    <button class="btn btn-outline-light" id="sort">Sort</button>  
    <button class="btn btn-light" id="reset">Reset</button>
  </div>`;
renderToDom('#forceField', domString); 
};

//SortingHat//
const sortHat = () => {
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
const randomHouse = Math.floor(Math.random() * houses.length);
const house = houses[randomHouse];
renderToDom('#sortHat', house);
return house;
};



//filter Button Row//
const filterButtons = () => {    
const domString = `
<div class="container text-center">
  <h6>Filter Students by House</h6>
  <button class="btn btn-outline-danger" id="gryffindor">Gryffindor</button>
  <button class="btn btn-outline-warning" id="hufflepuff">Hufflepuff</button>
  <button class="btn btn-outline-info" id="ravenclaw">Ravenclaw</button>
  <button class="btn btn-outline-success" id="slytherin">Slytherin</button>
  <button class="btn btn-dark" id="all">All</button>  
</div>
`;
renderToDom('#filterContainer', domString);
};

//first Year cards//
const cardsOnDom = (data) => {
  let domString = '';
  for (const item of data) {
    domString += `
    <div class="card-group">
   <div class="card">
    <div class="card-body">
    <div class="card" style="width: 10rem;">
     <img src="${item.imageUrl}" class="card-img-top" alt="${item.name}">
     <h5 class="card-title">${item.name}</h5>
     <p class="card-text">${item.house}</p>
     <button class="btn btn-dark" id="delete--${item.id}">expel</button>
    </div>
    </div>
  </div>
   `;
  }
  renderToDom('#cardFirstYear', domString);
};


//Volds Army//
const voldsArmy = () => {
 const domString = `
  <div class="card-group">
   <div class="card-body">
   <div class="card" style="width: auto;">
    <img src="https://media3.giphy.com/media/BnhIfw9hBDlLi/giphy.gif" class="card-img-top" alt="Voldemort">
    <div class="card-body">
      <h3 class="card-title">Voldemort's Militia</h3>
      <button class="btn btn-light" id="Voldemoldy">Rebound Army</button>
    </div>
  </div>
  `;
  renderToDom('#cardVoldy', domString);
};



//Event Listeners//
let cardVoldy = (arr) => {
  let domString = '';
  for (const item of arr) {
    domString += `
    <div class="card-group">
   <div class="card">
    <div class="card-body">
    <div class="card" style="width: 9rem;">
     <img src="${item.imageUrl}" class="card-img-top" alt="${item.name}">
     <h5 class="card-title">${item.name}</h5>
     <p class="card-text">${item.house}</p>
     <button class="btn btn-dark" id="delete--${item.id}">expel</button>
    </div>
    </div>
  </div>
   `;
  }
  renderToDom('#cardVoldy', domString);
};

//Filter Button Row//
document.querySelector('#filterContainer').addEventListener('click', (e) => {
  if (e.target.id === 'gryffindor') {
    const gryffindor = data.filter((item) => item.house === 'Gryffindor');
    cardsOnDom(gryffindor);
  }   else if (e.target.id === 'hufflepuff') {
    const hufflepuff = data.filter((item) => item.house === 'Hufflepuff');
    cardsOnDom(hufflepuff);
  } else if (e.target.id === 'ravenclaw') {
    const ravenclaw = data.filter((item) => item.house === 'Ravenclaw');
    cardsOnDom(ravenclaw);
  } else if (e.target.id === 'slytherin') {
    const slytherin = data.filter((item) => item.house === 'Slytherin');
    cardsOnDom(slytherin);
  } else if (e.target.id === 'all') {
    cardsOnDom(data);
  }
 
});


let expelStudent = (e) => { 
 e.preventDefault();
 if (e.target.id.includes("delete")) {
 const [, id] = e.target.id.split('--');
 const index = data.findIndex((item) => item.id === Number(id));
 arr.push(data.splice(index, 1)[0]);
 cardVoldy(arr)
}
cardsOnDom(data);
};
let startApp = () => {
  picArea();
  formField();
  sortHat();
  filterButtons();
  cardsOnDom(data);
  voldsArmy();
  expelStudent();
 };

startApp();
