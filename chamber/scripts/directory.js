document.addEventListener('DOMContentLoaded', () => {
  const memberContainer = document.getElementById('memberContainer');
  const toggleViewButton = document.getElementById('toggleView');
  let isGridView = true;

  fetch('./data/members.json')
      .then(response => response.json())
      .then(members => {
          displayMembers(members);
      });

  toggleViewButton.addEventListener('click', () => {
      isGridView = !isGridView;
      memberContainer.className = isGridView ? 'grid-view' : 'list-view';
  });

  function displayMembers(members) {
      memberContainer.innerHTML = '';
      members.forEach(member => {
          const memberCard = document.createElement('div');
          memberCard.className = 'member-card';
          memberCard.innerHTML = `
              <img src="images/${member.image}" alt="${member.name}">
              <h2>${member.name}</h2>
              <p>${member.address}</p>
              <p>${member.phone}</p>
              <p><a href="${member.website}" target="_blank">${member.website}</a></p>
              <p>Membership Level: ${member.membership_level}</p>
          `;
          memberContainer.appendChild(memberCard);
      });
  }
});













// const data = JSON.parse(fs.readFileSync("./data/directory.json"));
// const cards = document.querySelector('#cards');

// async function getDirectory() {
//   const response = await fetch(data);
//   if(response.ok){
//     const data = await response.json();
//     getDirectory(data.directory);  
//   } else{
//     console.error("There is no data.");
//     const cards = document.getElementById("cards");
//     cards.innerHTML = "<section><h1>There is no data to be returned.</h1></section>";
//   }
// }

// getDirectory
// ();


// const getDirectory = (directory) => {
//   directory.forEach((directory) => {
//     // Create elements to add to the div.cards element
//     let card = document.createElement('section');
//     let name = document.createElement('h2'); // fill in the blank
//     let portrait = document.createElement('img');

//     name.textContent = `${directory.name}`; 
//     portrait.setAttribute('src',directory.image);
//     portrait.setAttribute('alt', `image of ${directory.image}`);
//     portrait.setAttribute('loading', 'lazy');
//     portrait.setAttribute('width', '340');
//     portrait.setAttribute('height', '440');

//     // Append the section(card) with the created elements
//     card.appendChild(name); //fill in the blank
//     card.appendChild(address);
//     card.appendChild(phone);
//     card.appendChild(website);
//     card.appendChild(image);
//     card.appendChild(membership);
//   }); // end of arrow function and forEach loop
// }
