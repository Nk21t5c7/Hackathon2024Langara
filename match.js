import { petData } from "./animal-data.js";
let value = "";
window.addEventListener("DOMContentLoaded", async (event) => {
  const urlParams = await new URLSearchParams(window.location.search);
  value = urlParams.get("value");
  backToSwipe.setAttribute("href", `match.html?value=${value}`);
});

document.querySelectorAll(".mainMenu li a").forEach((e) => {
    e.addEventListener("click", () => {
      // event.preventDefault();
    sessionStorage.clear();
  });
});
document.querySelectorAll("footer ul li a").forEach((e) => {
e.addEventListener("click", () => {
  sessionStorage.clear();
});
});

let showPet = [];
const pets = petData;
window.onload = function () {

  console.log(sessionStorage);
  // const currentUrl = window.location.href;
  // if (!currentUrl.includes('match.html')) {
  //   // 'match.html'が含まれていない場合はsessionStorageをクリア
  //   sessionStorage.clear();
  //   console.log("sessionStorage cleared!");
  // } else {
  //     // 'match.html'の場合、sessionStorageを保持
  //     console.log("sessionStorage retained.");
  //   const displayedBefore = JSON.parse(sessionStorage.getItem("displayedPet"));
  //   if (displayedBefore && displayedBefore.length > 0) {
  //     showPet = displayedBefore;
  // let prevPet = pets.find((p) => p.id == showPet[showPet.length - 1]);
  // petName.textContent = prevPet.name;
  // age.textContent = prevPet.age;
  // breed.textContent = prevPet.breed;
  // petImg.src = prevPet.image;
  // petImg.alt = value;
  // petName.textContent = pets[showPet.length - 1].name;
  // age.textContent = pets[showPet.length - 1].age;
  // breed.textContent = pets[showPet.length - 1].breed;
  // petImg.src = pets[showPet.length - 1].image;
  //   }
  // }
  main();
};
// document.querySelectorAll('a').forEach((link) => {
//   link.addEventListener('click', (e)=> {
//     const href = link.getAttribute('href');
//     if(href.includes('match.html')){
//       sessionStorage.clear();
//       console.log("sessionStorage cleared!");
//     }
//   });
// })
// moreInfo.addEventListener("click", () => {});
next.addEventListener("click", () => {
  displayPet();
});
const dogData = pets.filter((pet) => pet.species === "Dog");
const catData = pets.filter((pet) => pet.species === "Cat");

function main() {
  console.log(pets);
  const displayedBefore = JSON.parse(sessionStorage.getItem("displayedPet"));
  if (displayedBefore && displayedBefore.length > 0) {
    showPet = displayedBefore;
    let prevPet = pets.find((p) => p.id == showPet[showPet.length - 1]);
    petName.textContent = prevPet.name;
    age.textContent = prevPet.age;
    breed.textContent = prevPet.breed;
    petImg.src = prevPet.image;
    petImg.alt = value;

    displayPetInfo(prevPet);

    return;
  }
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
    const notify = document.createElement('p');

    notify.textContent = `We currently have no more ${value} to show you.`;
    notification.appendChild(notify);
    const backtoHome = document.createElement("button");
    const linktoHome = document.createElement("a");
    linktoHome.textContent = "Back to Home";
    linktoHome.setAttribute("href", "home.html");
    notification.appendChild(backtoHome);
    backtoHome.appendChild(linktoHome);

    backtoHome.addEventListener('click', ()=> {
      sessionStorage.clear();
      window.location.href = "home.html"; 
    });
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
    sessionStorage.setItem("displayedPet", JSON.stringify(showPet));
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
  shelterLink.setAttribute("target", "_blank"); // 新しいウィンドウで開く
  shelterLink.addEventListener("click", function (event) {
    event.preventDefault(); // デフォルトのリンク動作を防ぐ
    window.open(petData.link, "_blank"); // 新しいウィンドウを開く
  });
  if (petData.sex === "Male") {
    icon.classList.add("fa-mars");
  } else {
    icon.classList.add("fa-venus");
  }
}

document.querySelectorAll(".mainMenu li a").forEach((e) => {
  e.addEventListener("click", () => {
    sessionStorage.clear();
  });
});
document.querySelectorAll("footer ul li a").forEach((e) => {
  e.addEventListener("click", () => {
    sessionStorage.clear();
  });
});

  
