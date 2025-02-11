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
 <div class="container-sm" id="picContainer">
  <div class="row">
   <h3 img src= >Welcome To Hogwart's Virtual Sorting Ceremony</h3>
  <div class="row">
  <img src="https://media.tenor.com/vkDuuNm40XoAAAAM/hogwarts-legacy-warner-bros-interactive-entertainment.gif" class="img-fluid" alt="Animated Sorting Hat">
 </div>
 </div>
 `;
renderToDom('#picContainer', domString);
}; 

//Form Field//
const formField = () => {
const domString = `
 <h5 class="card-text">
  Welcome to sorting session at Hogwarts School of Witchcraft and Wizardry.
  <p>The sorting hat will sort each student by name, into one of the four houses: Gryffindor, Hufflepuff, Ravenclaw, and Slytherin.</p>
  <p>The sorting hat will take into account your personality, values, and preferences to determine the house that best suits you.</p>
  <p>Good luck!</p>
 </h5>
 <div class="card-body">
  <div class="d-flex justify-content-center">
   <input class="form-control form-control-sm" type="text" id="studentName" placeholder="Student's Name">
  </div>
  <button class="btn btn-outline-light" id="sort">Sort</button>  
  <button class="btn btn-light" id="reset">Reset</button>
 </div>
 `;
renderToDom('#forceField', domString);


 // Add event listener for the sort button
document.querySelector('#sort').addEventListener('click', (e) => {
 e.preventDefault();
  const studentName = document.querySelector('#studentName').value;
  if (studentName) {
   sortHat(studentName);
   }
 });
};

//Sorting Hat- MVP//
const sortHat = (studentName) => {
 const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
 const randomHouse = Math.floor(Math.random() * houses.length);
 const house = houses[randomHouse];

// Create a new student object
const newStudent = {
 id: data.length + 1, // Generate a new id
 name: studentName,
 house: house,
 imageUrl: 'https://www.urbanbodyjewelry.com/cdn/shop/files/14kt-gold-sorting-hat-threadless-top_600x.jpg' // Placeholder image URL
};

// Add the new student to the data array
data.push(newStudent);

// Update the DOM with the new student card
cardsOnDom(data);

return house;
};
// Create a new student object

//Filter Button Row//
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

//First Year cards
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
}

//Volds Army
const voldsArmy = () => {
 const domString = `
  <div class="card-group">
  <div class="card-body">
  <div class="card" style="width: auto;">
   <img src="https://media3.giphy.com/media/BnhIfw9hBDlLi/giphy.gif" class="card-img-top" alt="Voldemort">
  <div class="card-body">
   <h3 class="card-title">Voldemort's Militia</h3>
  </div>
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
    expelCardsOnDom(expelledStudent);
  }
});


const expelCardsOnDom = (array) =>{
 let domString = '';
 array.forEach((item) => {
  domString += `
   <div class="card-group">
    <div class="card">
    <h5 class="card-title">Voldemort's Militia</h5>
    <div class="card-body">
    <div class="card" style="width: 9rem;">
     <img src="${item.imageUrl}" class="card-img-top" alt="${item.name}">
     <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.house}</p>
      <button class="btn btn-dark" id="delete--${item.id}">Expel</button>
      </div>
      </div>
    </div>
    `;
  });
  renderToDom('#cardVoldy', domString);
};

//Expel Student//
const displayStudent = document.querySelector('#cardFirstYear');
const expelledStudent =[];

displayStudent.addEventListener('click', (e) => {
  if (e.target.id.includes('delete')) {
    const studentId = e.target.id.split('--')[1];
    const studentIndex = data.findIndex((item) => item.id === parseInt(studentId));
    expelledStudent.push(data[studentIndex]);
    data.splice(studentIndex, 1);
    cardsOnDom(data);
    expelCardsOnDom(expelledStudent); //puts expelled students in Voldey's Militia//
  }
});


const startApp = () => {
 picArea();
 formField();
 sortHat();
 filterButtons();
 cardsOnDom(data);
 voldsArmy();
 document.querySelector('#cardFirstYear').addEventListener('click', expelledStudent);
};

startApp();
