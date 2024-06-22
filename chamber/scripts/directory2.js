const jsonObject = './data/members.json'

// async function getMemember(){
//     const response = await fetch(jsonObject);
//     if(response.ok){
//       const data = await response.json();
//       getMemember(data.members);  
//     } else{
//       console.error("There is no data.");
//       const cards = document.getElementById("cards");
//       cards.innerHTML = "<section><h1>There is no data to be returned.</h1></section>";
//     }
// }
async function getMemember(){
  const response = await fetch(jsonObject);
  const data = await response.json
  console.log(data)
}




getMemember();
