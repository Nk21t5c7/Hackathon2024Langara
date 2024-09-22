import { petData } from "./animal-data.js";

let value = "";
window.addEventListener("DOMContentLoaded", async (event) => {
  const urlParams = await new URLSearchParams(window.location.search);
  value = urlParams.get("value");
  backToSwipe.setAttribute("href", `match.html?value=${value}`);
});

const showPet = [];
const pets = petData;
window.onload = main;

moreInfo.addEventListener("click", () => {});
next.addEventListener("click", () => {
  console.log(showPet);

  displayPet();
});

const dogData = pets.filter((pet) => pet.species === "Dog");
const catData = pets.filter((pet) => pet.species === "Cat");
console.log(dogData);

function main() {
  console.log(pets);
  displayPet();
}

function displayPet() {
  let petCount = 0;
  if (value === "dog") {
    petCount = dogData.length;
  } else {
    petCount = catData.length;
  }

  if (showPet.length === petCount) {
    document.querySelector(".petInfo").style.display = "none";
    notification.textContent = `We currently have no more ${value} to show you.`;
    const backtoHome = document.createElement("button");
    const linktoHome = document.createElement("a");
    linktoHome.textContent = "Back to Home";
    linktoHome.setAttribute("href", "home.html");
    notification.appendChild(backtoHome);
    backtoHome.appendChild(linktoHome);
    return;
  }

  let count = 0;
  while (count === 0) {
    console.log(showPet);
    const random = Math.trunc(Math.random() * dogData.length);

    if (value == "dog") {
      if (!showPet.includes(dogData[random].id)) {
        console.log(random);
        count++;
        showPet.push(dogData[random].id);

        petName.textContent = dogData[random].name;
        age.textContent = dogData[random].age;
        breed.textContent = dogData[random].breed;
        petImg.src = dogData[random].image;
        petImg.alt = value;

        displayPetInfo(dogData[random]);
      }
      console.log(catData[random].name);
    } else if (value == "cat") {
      console.log(showPet);
      const random = Math.trunc(Math.random() * catData.length);

      if (!showPet.includes(catData[random].id)) {
        console.log(catData[random].id);
        count++;
        showPet.push(catData[random].id);

        petName.textContent = catData[random].name;
        age.textContent = catData[random].age;
        breed.textContent = catData[random].breed;
        petImg.src = catData[random].image;
        petImg.alt = value;

        displayPetInfo(catData[random]);
      }
      console.log("count", count);
    }
  }
  console.log(showPet);
}

// SPA
const allPages = document.querySelectorAll("div.page");
allPages[0].style.display = "block";

function navigateToPage(event) {
  const pageId = location.hash ? location.hash : "#page1";
  for (let page of allPages) {
    if (pageId === "#" + page.id) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  }
  return;
}
navigateToPage();

//init handler for hash navigation
window.addEventListener("hashchange", navigateToPage);

function displayPetInfo(petData) {
  petImage.src = petData.image;
  displayName.innerText = petData.name;
  displayBreed.innerText = petData.breed;
  displayAge.innerText = petData.age;
  sex.innerText = petData.sex;
  description.innerText = petData.description;
  infoBreed.innerText = petData.breed;
  infoAge.innerText = petData.age;
  infoSize.innerText = petData.size;
  infoSex.innerText = petData.sex;
  infoShelter.innerText = petData.shelter;
  shelterLink.setAttribute("href", `${petData.link}`);
  if (petData.sex === "Male") {
    icon.classList.add("fa-mars");
  } else {
    icon.classList.add("fa-venus");
  }
}
