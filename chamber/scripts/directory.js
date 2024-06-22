const jsonObject = 'https://yukarihall.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMember() {
    const response = await fetch(jsonObject);
    if (response.ok) {
        const data = await response.json();
        displayMembers(data.members); // Corrected function call
    } else {
        console.error("There is no data.");
        const cards = document.getElementById("cards");
        cards.innerHTML = "<section><h1>There is no data to be returned.</h1></section>";
    }
}

getMember();

const displayMembers = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('h3');
        let phone = document.createElement('h3');
        let website = document.createElement('h3');
        let portrait = document.createElement('img');
        let membership_level = document.createElement('h3');

        
        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;
        portrait.setAttribute('src', `./images/${member.image}`);
        portrait.setAttribute('alt', `Portrait of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        membership_level.textContent = `${member.membership_level}`;
        
        // console.log(member.image);

        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(address); // Added address element
        card.appendChild(phone);   // Added phone element
        card.appendChild(website); // Added website element
        card.appendChild(portrait); // Corrected from image to portrait
        card.appendChild(membership_level); // Added membership level element

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
};
