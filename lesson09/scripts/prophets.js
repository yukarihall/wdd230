const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  if(response.ok){
    const data = await response.json();
    displayProphets(data.prophets);  
  } else{
    console.error("There is no data.");
    const cards = document.getElementById("cards");
    cards.innerHTML = "<section><h1>There is no data to be returned.</h1></section>";
  }
}

getProphetData();


const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2'); // fill in the blank
    let portrait = document.createElement('img');
    let birthday = document.createElement('h3');
    let place = document.createElement('h3');
    
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
    birthday.textContent = `Date of Birth:${prophet.birthdate}`;
    place.textContent = `Place of Birth:${prophet.birthplace}`;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(fullName); //fill in the blank
    card.appendChild(birthday); //fill in the blank
    card.appendChild(place); //fill in the blank    
    card.appendChild(portrait);
    cards.appendChild(card);
  }); // end of arrow function and forEach loop
}
