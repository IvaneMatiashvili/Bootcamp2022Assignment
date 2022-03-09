const goBackBtn = document.querySelectorAll('.arrow-left');
const nextPage = document.querySelectorAll('.arrow-right');
const startBtn = document.getElementById('start-questionnare');
const startPage = document.getElementById('start-page');
const firstPage = document.getElementById('first-page');
const pages = document.querySelectorAll('.pages');
const button = document.querySelectorAll('.current__page');
const arrowLeft = document.querySelectorAll('.arrow.left');
const arrowRight = document.querySelectorAll('.arrow.right');


// form first-page

const firstName = document.getElementById('first-name');
const fErrorOne = document.querySelectorAll('.f-error--one');
const fErrorTwo = document.querySelectorAll('.f-error--two');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const number = document.getElementById('phone');

// form second-page

const experienceGenerator = document.getElementById('experience-generator');
const addSkills = document.getElementById('add-skills');
const experience = document.getElementById('experience');
const skills = document.querySelector('.skills');

//third-page
const when = document.querySelectorAll('.when');
const covid = document.querySelectorAll('.covid');
const vaccinated = document.querySelectorAll('.vaccinated');

//last page vars

const submit = document.getElementById('submit');


// start page


function startQuestionnare() {

   startPage.style.display = 'none';
   firstPage.style.display = 'flex'
}

startBtn.addEventListener('click', startQuestionnare);


// first page

let counterOne = 0;

let firstNameArr = [];
let lastNameArr = [];
let emailArr = [];
let numberArr = [];

function pageControlOne(event) {

   let el = event.target;

   let firstNameValue = firstName.value.trim();
   let lastNameValue = lastName.value.trim();
   let emailValue = email.value.trim();
   let numberValue = number.value.trim();
   firstNameArr.push(firstNameValue);
   lastNameArr.push(lastNameValue);
   emailArr.push(emailValue);
   numberArr.push(numberValue);

   if (firstNameValue === '') {
      firstName.style.borderColor = '#ff3860';
      fErrorOne[0].style.display = 'block';
      fErrorTwo[0].style.display = 'none';
   } else if (firstNameValue.length < 2) {
      fErrorOne[0].style.display = 'none';
      fErrorTwo[0].style.display = 'block';
      firstName.style.borderColor = '#ff3860';
   } else if (firstNameValue.length >= 2) {
      fErrorOne[0].style.display = 'none';
      fErrorTwo[0].style.display = 'none';
      firstName.style.borderColor = '#525557';

      counterOne = 1;
   }

   if (lastNameValue === '') {

      lastName.style.borderColor = '#ff3860';
      fErrorOne[1].style.display = 'block';
      fErrorTwo[1].style.display = 'none';
   } else if (lastNameValue.length < 2) {
      fErrorOne[1].style.display = 'none';
      fErrorTwo[1].style.display = 'block';
      lastName.style.borderColor = '#ff3860';
   } else if (lastNameValue.length >= 2) {
      fErrorOne[1].style.display = 'none';
      fErrorTwo[1].style.display = 'none';
      lastName.style.borderColor = '#525557';

      if (counterOne === 1) counterOne = 2;
   }

   const isValidEmail = email => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
   }

   if (emailValue === '') {

      email.style.borderColor = '#ff3860';
      fErrorOne[2].style.display = 'block';
      fErrorTwo[2].style.display = 'none';
   } else if (!isValidEmail(emailValue)) {
      fErrorOne[2].style.display = 'none';
      fErrorTwo[2].style.display = 'block';
      email.style.borderColor = '#ff3860';
   } else {
      fErrorOne[2].style.display = 'none';
      fErrorTwo[2].style.display = 'none';
      email.style.borderColor = '#525557';

      if (counterOne === 2) counterOne = 3;
   }

   if (numberValue.length > 0 && +numberValue === NaN) {

      number.style.borderColor = '#ff3860';
      fErrorOne[3].style.display = 'block';
   } else if (numberValue !== '' && numberValue.length !== 9) {
      fErrorOne[3].style.display = 'block';
      number.style.borderColor = '#ff3860';
   } else if (numberValue !== '' && +numberValue[0] !== 5) {
      fErrorOne[3].style.display = 'block';
   } else {
      fErrorOne[3].style.display = 'none';
      email.style.borderColor = '#525557';
      if (counterOne === 3) counterOne = 4;
   }
   if (counterOne === 4) {
      if (el === button[1]) {
         pages[1].style.display = 'none';
         pages[2].style.display = 'flex';
         pages[3].style.display = 'none';
         pages[4].style.display = 'none';
         pages[5].style.display = 'none';
      }
      if (el === button[2]) {
         pages[1].style.display = 'none';
         pages[2].style.display = 'none';
         pages[3].style.display = 'flex';
         pages[4].style.display = 'none';
         pages[5].style.display = 'none';
      }
      if (el === button[3]) {
         pages[1].style.display = 'none';
         pages[2].style.display = 'none';
         pages[3].style.display = 'none';
         pages[4].style.display = 'flex';
         pages[5].style.display = 'none';
      }
      if (el === button[4]) {
         pages[1].style.display = 'none';
         pages[2].style.display = 'none';
         pages[3].style.display = 'none';
         pages[4].style.display = 'none';
         pages[5].style.display = 'block';
      }
      if(el === nextPage[0] || el === arrowRight[0]) {
         pages[1].style.display = 'none';
         pages[2].style.display = 'flex';
      }
   }
}

button[1].addEventListener('click', pageControlOne)
button[2].addEventListener('click', pageControlOne)
button[3].addEventListener('click', pageControlOne)
button[4].addEventListener('click', pageControlOne)

// arrow right  first page


nextPage[0].addEventListener('click', pageControlOne);
arrowRight[0].addEventListener('click', pageControlOne);



// left arrow buttons

function leftArrowClick(event) {
   let el = event.target;
   if (el === goBackBtn[0] || el === arrowLeft[0]) {
      pages[1].style.display = 'none';
      pages[0].style.display = 'block';
   }
   if (el === goBackBtn[1] || el === arrowLeft[1]) {
      pages[2].style.display = 'none';
      pages[1].style.display = 'flex';
   }
   if (el === goBackBtn[2] || el === arrowLeft[2]) {
      pages[3].style.display = 'none';
      pages[2].style.display = 'flex';
   }
   if (el === goBackBtn[3] || el === arrowLeft[3]) {
      pages[4].style.display = 'none';
      pages[3].style.display = 'flex';
   }
   if (el === goBackBtn[4]) {
      pages[5].style.display = 'none';
      pages[4].style.display = 'flex';
   }
}


goBackBtn[0].addEventListener('click', leftArrowClick);
goBackBtn[1].addEventListener('click', leftArrowClick);
goBackBtn[2].addEventListener('click', leftArrowClick);
goBackBtn[3].addEventListener('click', leftArrowClick);
goBackBtn[4].addEventListener('click', leftArrowClick);
arrowLeft[0].addEventListener('click', leftArrowClick);
arrowLeft[1].addEventListener('click', leftArrowClick);
arrowLeft[2].addEventListener('click', leftArrowClick);
arrowLeft[3].addEventListener('click', leftArrowClick);


// second page

async function getSkillsData() {

   let getData = await fetch('https://bootcamp-2022.devtest.ge/api/skills')
      .then(function (response) {
         return response.json();
      })
      .then(data => skillsResult = data);

   skillsResult.forEach((elm, idx) => {

      let el = document.createElement('option');

      let node = document.createTextNode(elm.title);

      el.value = elm.title;
      el.appendChild(node);
      skills.appendChild(el);
   })

}
getSkillsData();

let skillsResult = [];
let sum = 0;
let sPreviousEl = '';
let sCurrentEl = '';

let arr = [];

function addSkillsF() {

   sCurrentEl = skills.value.trim();


   if (sCurrentEl !== sPreviousEl) {
      sPreviousEl = skills.value.trim();


      sum++;

      let el = document.createElement('li');

      let elChiledOne = document.createElement('p');
      let elChiledTwo = document.createElement('p');
      elChiledTwo.classList.add('second-chiled');
      let elChiledThree = document.createElement('p');
      elChiledThree.classList.add('third-chiled');

      elChiledOne.textContent = skills.value;
      elChiledTwo.textContent = `Years of Experience: ${experience.value.trim()}`;
      elChiledThree.textContent = '-';


      el.classList.add('skills-experience');

      el.appendChild(elChiledOne);
      el.appendChild(elChiledTwo);
      el.appendChild(elChiledThree);

      experienceGenerator.appendChild(el);
      if (sum === 1) {
         if (experienceGenerator.childNodes[7].childNodes[2]) {
            experienceGenerator.childNodes[7].childNodes[2].addEventListener('click', () => {
               experienceGenerator.childNodes[7].remove();
               sum--;
               sPreviousEl = '';
            })
         }
      }
      if (sum === 2) {
         if (experienceGenerator.childNodes[8].childNodes[2]) {
            experienceGenerator.childNodes[8].childNodes[2].addEventListener('click', () => {
               if (sum === 1) {
                  experienceGenerator.childNodes[7].remove();
                  sum--;
                  sPreviousEl = '';
               }
               if (sum === 2) {
                  experienceGenerator.childNodes[8].remove();
                  sum--;
                  sPreviousEl = '';
               }
            })
         }
      }
      if (sum === 3) {
         if (experienceGenerator.childNodes[9].childNodes[2]) {
            experienceGenerator.childNodes[9].childNodes[2].addEventListener('click', () => {
               experienceGenerator.childNodes[9].remove();
               sum--;
               sPreviousEl = '';
            })
         }
      }
      if (sum === 4) {
         if (experienceGenerator.childNodes[10].childNodes[2]) {
            experienceGenerator.childNodes[10].childNodes[2].addEventListener('click', () => {
               experienceGenerator.childNodes[10].remove();
               sum--;
               sPreviousEl = '';
            })
         }
      }
      if (sum === 5) {
         if (experienceGenerator.childNodes[11].childNodes[2]) {
            experienceGenerator.childNodes[11].childNodes[2].addEventListener('click', () => {
               experienceGenerator.childNodes[11].remove();
               sum--;
               sPreviousEl = '';
            })
         }
      }
      if (sum === 6) {
         if (experienceGenerator.childNodes[12].childNodes[2]) {
            experienceGenerator.childNodes[12].childNodes[2].addEventListener('click', () => {
               experienceGenerator.childNodes[12].remove();
               sum--;
               sPreviousEl = '';
            })
         }
      }
      if (sum === 7) {
         if (experienceGenerator.childNodes[13].childNodes[2]) {
            experienceGenerator.childNodes[13].childNodes[2].addEventListener('click', () => {
               experienceGenerator.childNodes[13].remove();
               sum--;
               sPreviousEl = '';
            })
         }
      }
      if (sum === 8) {
         if (experienceGenerator.childNodes[14].childNodes[2]) {
            experienceGenerator.childNodes[14].childNodes[2].addEventListener('click', () => {
               experienceGenerator.childNodes[14].remove();
               sum--;
               sPreviousEl = '';
            })
         }
      }
   }
}

addSkills.addEventListener('click', addSkillsF);

// nav control second page

function pageControlTwo(event) {

   let el = event.target;
    if (el === button[5]) {
         pages[1].style.display = 'flex';
         pages[2].style.display = 'none';
         pages[3].style.display = 'none';
         pages[4].style.display = 'none';
         pages[5].style.display = 'none';
      }
      if (el === button[7]) {
         pages[1].style.display = 'none';
         pages[2].style.display = 'none';
         pages[3].style.display = 'flex';
         pages[4].style.display = 'none';
         pages[5].style.display = 'none';
      }
      if (el === button[8]) {
         pages[1].style.display = 'none';
         pages[2].style.display = 'none';
         pages[3].style.display = 'none';
         pages[4].style.display = 'flex';
         pages[5].style.display = 'none';
      }
      if (el === button[9]) {
         pages[1].style.display = 'none';
         pages[2].style.display = 'none';
         pages[3].style.display = 'none';
         pages[4].style.display = 'none';
         pages[5].style.display = 'block';
      }
      if(el === nextPage[1] || el === arrowRight[1]) {
         pages[2].style.display = 'none';
         pages[3].style.display = 'flex';
      }
}


button[5].addEventListener('click', pageControlTwo)
button[7].addEventListener('click', pageControlTwo)
button[8].addEventListener('click', pageControlTwo)
button[9].addEventListener('click', pageControlTwo)

// arrow right  second page


nextPage[1].addEventListener('click', pageControlTwo);
arrowRight[1].addEventListener('click', pageControlTwo);

// third page

// nav control third page
let covidValue;
let vaccinatedValue;

function covidCheck(event) { 
   let el = event.target;
   if(el === covid[0]){
       covidValue = 1;
   }
   if(el === covid[1]){
       covidValue = 0;
   }

if(covidValue === 1) {
   when[0].style.display = 'block'
}
if(covidValue === 0) {
   when[0].style.display = 'none'
}
   if(el === vaccinated[0]){
       vaccinatedValue = 1;
   }
   if(el === vaccinated[1]){
       vaccinatedValue = 0;
   }
if(vaccinatedValue === 1) {
   when[1].style.display = 'block'
}
if(vaccinatedValue === 0) {
   when[1].style.display = 'none'
}
}

covid[0].addEventListener('click', covidCheck);
covid[1].addEventListener('click', covidCheck);
vaccinated[0].addEventListener('click', covidCheck);
vaccinated[1].addEventListener('click', covidCheck);

function pageControlThree(event) {

   let el = event.target;
    if (el === button[10]) {
         pages[1].style.display = 'flex';
         pages[2].style.display = 'none';
         pages[3].style.display = 'none';
         pages[4].style.display = 'none';
         pages[5].style.display = 'none';
      }
      if (el === button[11]) {
         pages[1].style.display = 'none';
         pages[2].style.display = 'flex';
         pages[3].style.display = 'none';
         pages[4].style.display = 'none';
         pages[5].style.display = 'none';
      }
      if (el === button[13]) {
         pages[1].style.display = 'none';
         pages[2].style.display = 'none';
         pages[3].style.display = 'none';
         pages[4].style.display = 'flex';
         pages[5].style.display = 'none';
      }
      if (el === button[14]) {
         pages[1].style.display = 'none';
         pages[2].style.display = 'none';
         pages[3].style.display = 'none';
         pages[4].style.display = 'none';
         pages[5].style.display = 'block';
      }
      if(el === nextPage[2] || el === arrowRight[2]) {
         pages[3].style.display = 'none';
         pages[4].style.display = 'flex';
      }
}


button[10].addEventListener('click', pageControlThree)
button[11].addEventListener('click', pageControlThree)
button[13].addEventListener('click', pageControlThree)
button[14].addEventListener('click', pageControlThree)

// arrow right  third page


nextPage[2].addEventListener('click', pageControlThree);
arrowRight[2].addEventListener('click', pageControlThree);

// fourth page

// nav control fourth page

function pageControlFour(event) {

   let el = event.target;
    if (el === button[15]) {
         pages[1].style.display = 'flex';
         pages[2].style.display = 'none';
         pages[3].style.display = 'none';
         pages[4].style.display = 'none';
         pages[5].style.display = 'none';
      }
      if (el === button[16]) {
         pages[1].style.display = 'none';
         pages[2].style.display = 'flex';
         pages[3].style.display = 'none';
         pages[4].style.display = 'none';
         pages[5].style.display = 'none';
      }
      if (el === button[17]) {
         pages[1].style.display = 'none';
         pages[2].style.display = 'none';
         pages[3].style.display = 'flex';
         pages[4].style.display = 'none';
         pages[5].style.display = 'none';
      }
      if (el === button[19]) {
         pages[1].style.display = 'none';
         pages[2].style.display = 'none';
         pages[3].style.display = 'none';
         pages[4].style.display = 'none';
         pages[5].style.display = 'block';
      }
      if(el === nextPage[3] || el === arrowRight[3]) {
         pages[4].style.display = 'none';
         pages[5].style.display = 'block';
      }
}


button[15].addEventListener('click', pageControlFour)
button[16].addEventListener('click', pageControlFour)
button[17].addEventListener('click', pageControlFour)
button[19].addEventListener('click', pageControlFour)

// arrow right  Fourth page


nextPage[3].addEventListener('click', pageControlFour);
arrowRight[3].addEventListener('click', pageControlFour);

// last page

submit.addEventListener('click', () => {
   pages[5].style.display = 'none';
   pages[6].style.display = 'flex';
   setTimeout(function () {
      pages[6].style.display = 'none';
      pages[0].style.display = 'block';
   }, 3000)
})


/* function pageControlThree() {

   let inputValue = firstName.value;
   resultArr.push(inputValue);

   if (inputValue === '') {
      firstName.style.borderColor = '#ff3860';
      fErrorOne.style.display = 'block';
      fErrorTwo.style.display = 'none';
   } else if (inputValue.length < 2) {
      fErrorOne.style.display = 'none';
      fErrorTwo.style.display = 'block';
      firstName.style.borderColor = '#ff3860';
   } else {
      fErrorOne.style.display = 'none';
      fErrorTwo.style.display = 'none';
      firstName.style.borderColor = '#525557';
      pages[1].style.display = 'none';
      pages[2].style.display = 'none';
      pages[3].style.display = 'flex';
      pages[4].style.display = 'none';
      pages[5].style.display = 'none';
   }
}

button[2].addEventListener('click', pageControlThree);


function pageControlFour() {

   let inputValue = firstName.value;
   resultArr.push(inputValue);

   if (inputValue === '') {
      firstName.style.borderColor = '#ff3860';
      fErrorOne.style.display = 'block';
      fErrorTwo.style.display = 'none';
   } else if (inputValue.length < 2) {
      fErrorOne.style.display = 'none';
      fErrorTwo.style.display = 'block';
      firstName.style.borderColor = '#ff3860';
   } else {
      fErrorOne.style.display = 'none';
      fErrorTwo.style.display = 'none';
      firstName.style.borderColor = '#525557';

      pages[1].style.display = 'none';
      pages[2].style.display = 'none';
      pages[3].style.display = 'none';
      pages[4].style.display = 'flex';
      pages[5].style.display = 'none';
   }
}

button[3].addEventListener('click', pageControlThree);


function pageControlFifth() {
   pages[1].style.display = 'none';
   pages[2].style.display = 'none';
   pages[3].style.display = 'none';
   pages[4].style.display = 'none';
   pages[5].style.display = 'block';
}

button[4].addEventListener('click', pageControlFifth);

function pageControlOne() {
   pages[1].style.display = 'flex';
   pages[2].style.display = 'none';
   pages[3].style.display = 'none';
   pages[4].style.display = 'none';
   pages[5].style.display = 'none';
}


button[0].addEventListener('click', pageControlOne);
button[5].addEventListener('click', pageControlOne);
button[10].addEventListener('click', pageControlOne);
button[15].addEventListener('click', pageControlOne);
button[6].addEventListener('click', pageControlTwo);
button[11].addEventListener('click', pageControlTwo);
button[16].addEventListener('click', pageControlTwo);
button[7].addEventListener('click', pageControlThree);
button[12].addEventListener('click', pageControlThree);
button[17].addEventListener('click', pageControlThree);
button[8].addEventListener('click', pageControlFour);
button[13].addEventListener('click', pageControlFour);
button[18].addEventListener('click', pageControlFour);
button[9].addEventListener('click', pageControlFifth);
button[14].addEventListener('click', pageControlFifth);
button[19].addEventListener('click', pageControlFifth);

// arrow buttons

// left arrow buttons

function leftArrowClickOne() {
   pages[1].style.display = 'none';
   pages[0].style.display = 'block';
}

function leftArrowClickTwo() {
   pages[2].style.display = 'none';
   pages[1].style.display = 'flex';
}

function leftArrowClickThree() {
   pages[3].style.display = 'none';
   pages[2].style.display = 'flex';
}
function leftArrowClickFour() {
   pages[4].style.display = 'none';
   pages[3].style.display = 'flex';
}

function leftArrowClickFive() {
   pages[5].style.display = 'none';
   pages[4].style.display = 'flex';
}

goBackBtn[0].addEventListener('click', leftArrowClickOne);
goBackBtn[1].addEventListener('click', leftArrowClickTwo);
goBackBtn[2].addEventListener('click', leftArrowClickThree);
goBackBtn[3].addEventListener('click', leftArrowClickFour);
goBackBtn[4].addEventListener('click', leftArrowClickFive);

// right arrow buttons


function rightArrowClickOne() {
   pages[1].style.display = 'none';
   pages[2].style.display = 'flex';
}

function rightArrowClickTwo() {
   pages[2].style.display = 'none';
   pages[3].style.display = 'flex';
}
function rightArrowClickThree() {
   pages[3].style.display = 'none';
   pages[4].style.display = 'flex';
}

function rightArrowClickFour() {
   pages[4].style.display = 'none';
   pages[5].style.display = 'block';
}

nextPage[0].addEventListener('click', rightArrowClickOne);
nextPage[1].addEventListener('click', rightArrowClickTwo);
nextPage[2].addEventListener('click', rightArrowClickThree);
nextPage[3].addEventListener('click', rightArrowClickFour);

*/