import { getPets } from "./index.js";

const dogData = [
  {
    id:1,
    name:
  },
];
const showPet = [];

async function main() {
  const pets = await getPets();
  displayPet(pets);
}

function displayPet(pets) {
  console.log(pets);
  const random = Math.trunc(Math.random() * 12);
  let count = 0;
  // while(count === 1){
  //     if(!showPet.include(pets[random].id)){
  //         showPet.push(pets[random].id);

  //         petName.textContent = pets[random].name;
  //         age.textContent  = pets[random].age;
  //         breed.textContent = pets[random].breed;
  //         // petImg.src = ''
  //         count ++;
  //     }

  //     console.log(petName.textContent);

  // }

  // if(showPet.length === 12){
  //     document.querySelector('.petInfo').display = 'none';
  //     notification.textCotent = 'No data.';
  //     const backtoHome = document.createElement('button');
  //     const linktoHome = document.createElement('a');
  //     backtoHome.textContent = 'Back to Home';
  //     linktoHome.setAttribute('href', 'home.html')
  //     notification.appendChild(backtoHome);
  // }
}
main();
