import { petData } from "./animal-data.js";

const showPet = [];

const pets = petData;


window.onload = main;


moreInfo.addEventListener('click', ()=> {
    
});



function main(){
    console.log(pets);
    
    displayPet(pets);
}




function displayPet(pets){
    console.log(pets);
    let count = 0;
    while(count === 0){
        const random = Math.trunc(Math.random()*12);
        console.log(random);

        if(!showPet.includes(pets[random].id)){
            count ++;
            showPet.push(pets[random].id);

            petName.textContent = pets[random].name;
            age.textContent  = pets[random].age;
            breed.textContent = pets[random].breed;
            petImg.src = pets[random].image;
            
        }

        console.log(pets[random].name);
        
    }

    if(showPet.length === pets.length){
        document.querySelector('.petInfo').display = 'none';
        notification.textCotent = 'No data.';
        const backtoHome = document.createElement('button');
        const linktoHome = document.createElement('a');
        backtoHome.textContent = 'Back to Home';
        linktoHome.setAttribute('href', 'home.html')
        notification.appendChild(backtoHome);
    }
}

