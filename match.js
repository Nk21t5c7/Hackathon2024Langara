import { petData } from "./animal-data.js";

let value = '';
window.addEventListener('DOMContentLoaded', async (event) => {
    const urlParams = await new URLSearchParams(window.location.search);
    value = urlParams.get("value");
    console.log("受け取った値:", value);
});

const showPet = [];
const pets = petData;
window.onload = main;

moreInfo.addEventListener('click', ()=> {
    
});
next.addEventListener('click', ()=> {
    console.log(showPet);
    
    displayPet();
});

const dogData = pets.filter(pet => pet.species === 'Dog');
const catData = pets.filter(pet => pet.species === 'Cat');
console.log(dogData);


function main(){
    console.log(pets);
    displayPet();
}


function displayPet(){
    let count = 0;
    while(count === 0){
        console.log(showPet);
        const random = Math.trunc(Math.random()*(dogData.length));

        if(value == 'dog'){
            if(!showPet.includes(dogData[random].id)){
                console.log(random);
                count ++;
                showPet.push(dogData[random].id);

                petName.textContent = dogData[random].name;
                age.textContent  = dogData[random].age;
                breed.textContent = dogData[random].breed;
                petImg.src = dogData[random].image;
                petImg.alt = value;
            }
            console.log(catData[random].name);

        }
        else if(value == 'cat'){

            console.log(showPet);
            const random = Math.trunc(Math.random()*(catData.length));

            if(!showPet.includes(catData[random].id)){
                console.log(catData[random].id);
                count ++;
                showPet.push(catData[random].id);

                petName.textContent = catData[random].name;
                age.textContent  = catData[random].age;
                breed.textContent = catData[random].breed;
                petImg.src = catData[random].image;
                petImg.alt = value;
            
            }
            console.log('count', count);
            
        } 
        
        if(showPet.length === (pets.length)/2){
            document.querySelector('.petInfo').style.display = 'none';
            notification.textContent = `We currently have no more ${value} to show you.`;
            const backtoHome = document.createElement('button');
            const linktoHome = document.createElement('a');
            backtoHome.textContent = 'Back to Home';
            linktoHome.setAttribute('href', 'home.html')
            notification.appendChild(backtoHome);
        }
    }
    console.log(showPet);
    
}

