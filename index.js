const goBackBtn = document.querySelectorAll('.arrow-left');
const nextPage = document.querySelectorAll('.arrow-right');
const startBtn = document.getElementById('start-questionnare');
const startPage = document.getElementById('start-page');
const firstPage = document.getElementById('first-page');
const pages = document.querySelectorAll('.pages');
const button = document.querySelectorAll('.current__page');
const arrowLeft = document.querySelectorAll('.arrow.left');
const arrowRight = document.querySelectorAll('.arrow.right');
const subm = document.querySelectorAll('.subm');


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
const sErrorOne = document.querySelectorAll('.s-error--one');

//third-page

const when = document.querySelectorAll('.when');
const covid = document.querySelectorAll('.covid');
const vaccinated = document.querySelectorAll('.vaccinated');
const workLocation = document.querySelectorAll('.work-location');
const covidDate = document.getElementById('covid-date');
const vaccinatedDate = document.getElementById('vaccinated-date');
const thErrorOne = document.querySelectorAll('.th-error--one');

// fourth-page

const devtalk = document.querySelectorAll('.devtalk');
const what = document.querySelectorAll('.what');
const foErrorOne = document.querySelectorAll('.fo-error--one');
const foTextarea = document.getElementById('usermessage-devtalk');
const foUserMessage = document.getElementById('fo-usermessage')


//last page vars

const submit = document.getElementById('submit');


// start page

function startQuestionnare() {

   startPage.style.display = 'none';
   firstPage.style.display = 'flex'
}

startBtn.addEventListener('click', startQuestionnare);


// global

let globalCounterTwo = 0;
let globalCounterThree = 0;
let globalCounterFour = 0;


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
      globalCounter = 1;
      if (el === button[1]) {
         pages[1].style.display = 'none';
         pages[2].style.display = 'flex';
         pages[3].style.display = 'none';
         pages[4].style.display = 'none';
         pages[5].style.display = 'none';
      }
      if (globalCounterTwo === 0 && globalCounterThree === 0 && globalCounterFour === 0) {
         if (el === button[2]) {
            pages[1].style.display = 'none';
            pages[2].style.display = 'flex';
            pages[3].style.display = 'none';
            pages[4].style.display = 'none';
            pages[5].style.display = 'none';
         }
         if (el === button[3]) {
            pages[1].style.display = 'none';
            pages[2].style.display = 'flex';
            pages[3].style.display = 'none';
            pages[4].style.display = 'none';
            pages[5].style.display = 'none';
         }
         if (el === button[4]) {
            pages[1].style.display = 'none';
            pages[2].style.display = 'flex';
            pages[3].style.display = 'none';
            pages[4].style.display = 'none';
            pages[5].style.display = 'none';
         }
      }
      else if (globalCounterTwo === 1 && globalCounterThree === 0 && globalCounterFour === 0) {

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
            pages[3].style.display = 'flex';
            pages[4].style.display = 'none';
            pages[5].style.display = 'none';
         }
         if (el === button[4]) {
            pages[1].style.display = 'none';
            pages[2].style.display = 'none';
            pages[3].style.display = 'flex';
            pages[4].style.display = 'none';
            pages[5].style.display = 'none';
         }
      }
      else if (globalCounterTwo === 1 && globalCounterThree === 1 && globalCounterFour === 0) {

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
            pages[4].style.display = 'flex';
            pages[5].style.display = 'none';
         }
      }
      else if (globalCounterTwo === 1 && globalCounterThree === 1 && globalCounterFour === 1) {
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
      }
      if (el === nextPage[0] || el === arrowRight[0]) {
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
let finalResultSkills = [];
let sSum = 0;
let sPreviousEl = '';
let sCurrentEl = '';

let html = 0;
let css = 0;
let php = 0;
let laravel = 0;
let react = 0;
let vue = 0;
let svelte = 0;
let angular = 0;
let bigNum = 0;


// results

let fSkillsArr = [];
let sSkillsArr = [];
let tSkillsArr = [];
let foSkillsArr = [];
let fiSkillsArr = [];
let siSkillsArr = [];
let seSkillsArr = [];
let eiSkillsArr = [];


function addSkillsF() {

   sCurrentEl = skills.value.trim();

   if (experience.value.trim() !== '') {

      if (sCurrentEl === 'HTML') {
         bigNum = 0;
         html++;
         if (bigNum < html) bigNum = html;
         if (sCurrentEl === sPreviousEl) bigNum = 0;
      }
      if (sCurrentEl === 'CSS') {
         bigNum = 0;
         css++;
         if (bigNum < css) bigNum = css;
         if (sCurrentEl === sPreviousEl) bigNum = 0;
      }
      if (sCurrentEl === 'PHP') {
         bigNum = 0;
         php++;
         if (bigNum < php) bigNum = php;
         if (sCurrentEl === sPreviousEl) bigNum = 0;
      }
      if (sCurrentEl === 'Laravel') {
         bigNum = 0;
         laravel++;
         if (bigNum < laravel) bigNum = laravel;
         if (sCurrentEl === sPreviousEl) bigNum = 0;
      }
      if (sCurrentEl === 'React.JS') {
         bigNum = 0;
         react++;
         if (bigNum < react) bigNum = react;
         if (sCurrentEl === sPreviousEl) bigNum = 0;
      }
      if (sCurrentEl === 'Vue.JS') {
         bigNum = 0;
         vue++;
         if (bigNum < vue) bigNum = vue;
         if (sCurrentEl === sPreviousEl) bigNum = 0;
      }
      if (sCurrentEl === 'Svelte') {
         bigNum = 0;
         svelte++;
         if (bigNum < svelte) bigNum = svelte;
         if (sCurrentEl === sPreviousEl) bigNum = 0;
      }
      if (sCurrentEl === 'Angular') {
         bigNum = 0;
         angular++;
         if (bigNum < angular) bigNum = angular;
         if (sCurrentEl === sPreviousEl) bigNum = 0;
      }

   }



   if (sCurrentEl !== sPreviousEl && bigNum < 2 && experience.value.trim() !== '') {

      sPreviousEl = skills.value.trim();

      let el = document.createElement('li');

      let elChiledOne = document.createElement('p');
      let elChiledTwo = document.createElement('p');
      elChiledTwo.classList.add('second-chiled');
      let elChiledThree = document.createElement('p');
      elChiledThree.classList.add('third-chiled');

      elChiledOne.textContent = skills.value;
      elChiledTwo.textContent = `Years of Experience: ${experience.value.trim()}`;
      elChiledThree.textContent = '-';


      sSum++;

      if (sSum <= 0 && experience.value.trim() === '') {
         sErrorOne[0].style.display = 'block';
         globalCounterTwo = 0;
      }
      if (sSum > 0 && experience.value.trim() !== '') {
         sErrorOne[0].style.display = 'none';
         globalCounterTwo = 1;
      }

      el.classList.add('skills-experience');

      el.appendChild(elChiledOne);
      el.appendChild(elChiledTwo);
      el.appendChild(elChiledThree);

      experienceGenerator.appendChild(el);


      if (sCurrentEl === 'HTML') {
         fSkillsArr.push(1);
         fSkillsArr.push(experience.value.trim());
      }
      if (sCurrentEl === 'CSS') {

         sSkillsArr.push(2);
         sSkillsArr.push(experience.value.trim());
      }
      if (sCurrentEl === 'PHP') {

         tSkillsArr.push(3);
         tSkillsArr.push(experience.value.trim());
      }
      if (sCurrentEl === 'Laravel') {
         foSkillsArr.push(4);
         foSkillsArr.push(experience.value.trim());
      }
      if (sCurrentEl === 'React.JS') {
         fiSkillsArr.push(5);
         fiSkillsArr.push(experience.value.trim());
      }
      if (sCurrentEl === 'Vue.JS') {
         siSkillsArr.push(6);
         siSkillsArr.push(experience.value.trim());
      }
      if (sCurrentEl === 'Svelte') {
         seSkillsArr.push(7);
         seSkillsArr.push(experience.value.trim());
      }
      if (sCurrentEl === 'Angular') {
         eiSkillsArr.push(8);
         eiSkillsArr.push(experience.value.trim());
      }


      function removeEl(event) {
         let el = event.target
         if (el === experienceGenerator.childNodes[7]?.childNodes[2]) {

            if (experienceGenerator.childNodes[7]?.childNodes[0].textContent === 'HTML') {
               html = 0;
               bigNum = 0;
               fSkillsArr.pop();
               fSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[7]?.childNodes[0].textContent === 'CSS') {
               css = 0;
               bigNum = 0;
               sSkillsArr.pop();
               sSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[7]?.childNodes[0].textContent === 'PHP') {
               php = 0;
               bigNum = 0;
               tSkillsArr.pop();
               tSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[7]?.childNodes[0].textContent === 'Laravel') {
               laravel = 0;
               bigNum = 0;
               foSkillsArr.pop();
               foSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[7]?.childNodes[0].textContent === 'React.JS') {
               react = 0;
               bigNum = 0;
               fiSkillsArr.pop();
               fiSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[7]?.childNodes[0].textContent === 'Vue.JS') {
               vue = 0;
               bigNum = 0;
               siSkillsArr.pop();
               siSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[7]?.childNodes[0].textContent === 'Svelte') {
               svelte = 0;
               bigNum = 0;
               seSkillsArr.pop();
               seSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[7]?.childNodes[0].textContent === 'Angular') {
               angular = 0;
               bigNum = 0;
               eiSkillsArr.pop();
               eiSkillsArr.pop();
            }

            experienceGenerator.childNodes[7].remove();
            sSum--;
            sPreviousEl = '';

         }
         if (el === experienceGenerator.childNodes[8]?.childNodes[2]) {
            if (experienceGenerator.childNodes[8]?.childNodes[0].textContent === 'HTML') {
               html = 0;
               bigNum = 0;
               fSkillsArr.pop();
               fSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[8]?.childNodes[0].textContent === 'CSS') {
               css = 0;
               bigNum = 0;
               sSkillsArr.pop();
               sSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[8]?.childNodes[0].textContent === 'PHP') {
               php = 0;
               bigNum = 0;
               tSkillsArr.pop();
               tSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[8]?.childNodes[0].textContent === 'Laravel') {
               laravel = 0;
               bigNum = 0;
               foSkillsArr.pop();
               foSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[8]?.childNodes[0].textContent === 'React.JS') {
               react = 0;
               bigNum = 0;
               fiSkillsArr.pop();
               fiSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[8]?.childNodes[0].textContent === 'Vue.JS') {
               vue = 0;
               bigNum = 0;
               siSkillsArr.pop();
               siSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[8]?.childNodes[0].textContent === 'Svelte') {
               svelte = 0;
               bigNum = 0;
               seSkillsArr.pop();
               seSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[8]?.childNodes[0].textContent === 'Angular') {
               angular = 0;
               bigNum = 0;
               eiSkillsArr.pop();
               eiSkillsArr.pop();
            }
            experienceGenerator.childNodes[8].remove();
            sSum--;
            sPreviousEl = '';
         }
         if (el === experienceGenerator.childNodes[9]?.childNodes[2]) {
            if (experienceGenerator.childNodes[9]?.childNodes[0].textContent === 'HTML') {
               html = 0;
               bigNum = 0;
               fSkillsArr.pop();
               fSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[9]?.childNodes[0].textContent === 'CSS') {
               css = 0;
               bigNum = 0;
               sSkillsArr.pop();
               sSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[9]?.childNodes[0].textContent === 'PHP') {
               php = 0;
               bigNum = 0;
               tSkillsArr.pop();
               tSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[9]?.childNodes[0].textContent === 'Laravel') {
               laravel = 0;
               bigNum = 0;
               foSkillsArr.pop();
               foSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[9]?.childNodes[0].textContent === 'React.JS') {
               react = 0;
               bigNum = 0;
               fiSkillsArr.pop();
               fiSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[9]?.childNodes[0].textContent === 'Vue.JS') {
               vue = 0;
               bigNum = 0;
               siSkillsArr.pop();
               siSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[9]?.childNodes[0].textContent === 'Svelte') {
               svelte = 0;
               bigNum = 0;
               seSkillsArr.pop();
               seSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[9]?.childNodes[0].textContent === 'Angular') {
               angular = 0;
               bigNum = 0;
               eiSkillsArr.pop();
               eiSkillsArr.pop();
            }
            experienceGenerator.childNodes[9].remove();
            sSum--;
            sPreviousEl = '';
         }
         if (el === experienceGenerator.childNodes[10]?.childNodes[2]) {
            if (experienceGenerator.childNodes[10]?.childNodes[0].textContent === 'HTML') {
               html = 0;
               bigNum = 0;
               fSkillsArr.pop();
               fSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[10]?.childNodes[0].textContent === 'CSS') {
               css = 0;
               bigNum = 0;
               sSkillsArr.pop();
               sSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[10]?.childNodes[0].textContent === 'PHP') {
               php = 0;
               bigNum = 0;
               tSkillsArr.pop();
               tSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[10]?.childNodes[0].textContent === 'Laravel') {
               laravel = 0;
               bigNum = 0;
               foSkillsArr.pop();
               foSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[10]?.childNodes[0].textContent === 'React.JS') {
               react = 0;
               bigNum = 0;
               fiSkillsArr.pop();
               fiSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[10]?.childNodes[0].textContent === 'Vue.JS') {
               vue = 0;
               bigNum = 0;
               siSkillsArr.pop();
               siSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[10]?.childNodes[0].textContent === 'Svelte') {
               svelte = 0;
               bigNum = 0;
               seSkillsArr.pop();
               seSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[10]?.childNodes[0].textContent === 'Angular') {
               angular = 0;
               bigNum = 0;
               eiSkillsArr.pop();
               eiSkillsArr.pop();
            }
            experienceGenerator.childNodes[10].remove();
            sSum--;
            sPreviousEl = '';
         }
         if (el === experienceGenerator.childNodes[11]?.childNodes[2]) {
            if (experienceGenerator.childNodes[11]?.childNodes[0].textContent === 'HTML') {
               html = 0;
               bigNum = 0;
               fSkillsArr.pop();
               fSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[11]?.childNodes[0].textContent === 'CSS') {
               css = 0;
               bigNum = 0;
               sSkillsArr.pop();
               sSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[11]?.childNodes[0].textContent === 'PHP') {
               php = 0;
               bigNum = 0;
               tSkillsArr.pop();
               tSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[11]?.childNodes[0].textContent === 'Laravel') {
               laravel = 0;
               bigNum = 0;
               foSkillsArr.pop();
               foSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[11]?.childNodes[0].textContent === 'React.JS') {
               react = 0;
               bigNum = 0;
               fiSkillsArr.pop();
               fiSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[11]?.childNodes[0].textContent === 'Vue.JS') {
               vue = 0;
               bigNum = 0;
               siSkillsArr.pop();
               siSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[11]?.childNodes[0].textContent === 'Svelte') {
               svelte = 0;
               bigNum = 0;
               seSkillsArr.pop();
               seSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[11]?.childNodes[0].textContent === 'Angular') {
               angular = 0;
               bigNum = 0;
               eiSkillsArr.pop();
               eiSkillsArr.pop();
            }
            experienceGenerator.childNodes[11].remove();
            sSum--;
            sPreviousEl = '';
         }
         if (el === experienceGenerator.childNodes[12]?.childNodes[2]) {
            if (experienceGenerator.childNodes[12]?.childNodes[0].textContent === 'HTML') {
               html = 0;
               bigNum = 0;
               fSkillsArr.pop();
               fSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[12]?.childNodes[0].textContent === 'CSS') {
               css = 0;
               bigNum = 0;
               sSkillsArr.pop();
               sSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[12]?.childNodes[0].textContent === 'PHP') {
               php = 0;
               bigNum = 0;
               tSkillsArr.pop();
               tSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[12]?.childNodes[0].textContent === 'Laravel') {
               laravel = 0;
               bigNum = 0;
               foSkillsArr.pop();
               foSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[12]?.childNodes[0].textContent === 'React.JS') {
               react = 0;
               bigNum = 0;
               fiSkillsArr.pop();
               fiSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[12]?.childNodes[0].textContent === 'Vue.JS') {
               vue = 0;
               bigNum = 0;
               siSkillsArr.pop();
               siSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[12]?.childNodes[0].textContent === 'Svelte') {
               svelte = 0;
               bigNum = 0;
               seSkillsArr.pop();
               seSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[12]?.childNodes[0].textContent === 'Angular') {
               angular = 0;
               bigNum = 0;
               eiSkillsArr.pop();
               eiSkillsArr.pop();
            }
            experienceGenerator.childNodes[12].remove();
            sSum--;
            sPreviousEl = '';
         }
         if (el === experienceGenerator.childNodes[13]?.childNodes[2]) {
            if (experienceGenerator.childNodes[13]?.childNodes[0].textContent === 'HTML') {
               html = 0;
               bigNum = 0;
               fSkillsArr.pop();
               fSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[13]?.childNodes[0].textContent === 'CSS') {
               css = 0;
               bigNum = 0;
               sSkillsArr.pop();
               sSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[13]?.childNodes[0].textContent === 'PHP') {
               php = 0;
               bigNum = 0;
               tSkillsArr.pop();
               tSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[13]?.childNodes[0].textContent === 'Laravel') {
               laravel = 0;
               bigNum = 0;
               foSkillsArr.pop();
               foSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[13]?.childNodes[0].textContent === 'React.JS') {
               react = 0;
               bigNum = 0;
               fiSkillsArr.pop();
               fiSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[13]?.childNodes[0].textContent === 'Vue.JS') {
               vue = 0;
               bigNum = 0;
               siSkillsArr.pop();
               siSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[13]?.childNodes[0].textContent === 'Svelte') {
               svelte = 0;
               bigNum = 0;
               seSkillsArr.pop();
               seSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[13]?.childNodes[0].textContent === 'Angular') {
               angular = 0;
               bigNum = 0;
               eiSkillsArr.pop();
               eiSkillsArr.pop();
            }
            experienceGenerator.childNodes[13].remove();
            sSum--;
            sPreviousEl = '';
         }
         if (el === experienceGenerator.childNodes[14]?.childNodes[2]) {
            if (experienceGenerator.childNodes[14]?.childNodes[0].textContent === 'HTML') {
               html = 0;
               bigNum = 0;
               fSkillsArr.pop();
               fSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[14]?.childNodes[0].textContent === 'CSS') {
               css = 0;
               bigNum = 0;
               sSkillsArr.pop();
               sSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[14]?.childNodes[0].textContent === 'PHP') {
               php = 0;
               bigNum = 0;
               tSkillsArr.pop();
               tSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[14]?.childNodes[0].textContent === 'Laravel') {
               laravel = 0;
               bigNum = 0;
               foSkillsArr.pop();
               foSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[14]?.childNodes[0].textContent === 'React.JS') {
               react = 0;
               bigNum = 0;
               fiSkillsArr.pop();
               fiSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[14]?.childNodes[0].textContent === 'Vue.JS') {
               vue = 0;
               bigNum = 0;
               siSkillsArr.pop();
               siSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[14]?.childNodes[0].textContent === 'Svelte') {
               svelte = 0;
               bigNum = 0;
               seSkillsArr.pop();
               seSkillsArr.pop();
            }
            if (experienceGenerator.childNodes[14]?.childNodes[0].textContent === 'Angular') {
               angular = 0;
               bigNum = 0;
               eiSkillsArr.pop();
               eiSkillsArr.pop();
            }
            experienceGenerator.childNodes[14].remove();
            sSum--;
            sPreviousEl = '';
         }
      }

      experienceGenerator.childNodes[7]?.childNodes[2].addEventListener('click', removeEl)
      experienceGenerator.childNodes[8]?.childNodes[2].addEventListener('click', removeEl)
      experienceGenerator.childNodes[9]?.childNodes[2].addEventListener('click', removeEl)
      experienceGenerator.childNodes[10]?.childNodes[2].addEventListener('click', removeEl)
      experienceGenerator.childNodes[11]?.childNodes[2].addEventListener('click', removeEl)
      experienceGenerator.childNodes[12]?.childNodes[2].addEventListener('click', removeEl)
      experienceGenerator.childNodes[13]?.childNodes[2].addEventListener('click', removeEl)
      experienceGenerator.childNodes[14]?.childNodes[2].addEventListener('click', removeEl)

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

   if (sSum > 0 && experience.value.trim() !== '') {
      if (el === button[7]) {
         pages[1].style.display = 'none';
         pages[2].style.display = 'none';
         pages[3].style.display = 'flex';
         pages[4].style.display = 'none';
         pages[5].style.display = 'none';
      }
      if (globalCounterTwo === 1 && globalCounterThree === 0 && globalCounterFour === 0) {
         if (el === button[8]) {
            pages[1].style.display = 'none';
            pages[2].style.display = 'none';
            pages[3].style.display = 'flex';
            pages[4].style.display = 'none';
            pages[5].style.display = 'none';
         }
         if (el === button[9]) {
            pages[1].style.display = 'none';
            pages[2].style.display = 'none';
            pages[3].style.display = 'flex';
            pages[4].style.display = 'none';
            pages[5].style.display = 'none';
         }
      }
      else if (globalCounterTwo === 1 && globalCounterThree === 1 && globalCounterFour === 0) {
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
            pages[4].style.display = 'flex';
            pages[5].style.display = 'none';
         }
      }
      else if (globalCounterTwo === 1 && globalCounterThree === 1 && globalCounterFour === 1) {
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
      }
      if (el === nextPage[1] || el === arrowRight[1]) {
         pages[2].style.display = 'none';
         pages[3].style.display = 'flex';
      }
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

let workLocationValue;
let covidValue;
let vaccinatedValue;

let covidArr = [];
let vaccinatedArr = [];
let workLocationArr = [];


function covidCheckK(event) {
   let el = event.target;

   if (el === workLocation[0]) {
      workLocationValue = 'From Sairme Office';
      thErrorOne[0].style.display = 'none';
   }
   if (el === workLocation[1]) {
      workLocationValue = 'From Home';
      thErrorOne[0].style.display = 'none';
   }

   if (el === workLocation[2]) {
      workLocationValue = 'Hybrid';
      thErrorOne[0].style.display = 'none';
   }

   workLocationArr.push(workLocationValue);

   if (el === covid[0]) {
      covidValue = true;
      thErrorOne[1].style.display = 'none';
   }
   if (el === covid[1]) {
      covidValue = false;
      thErrorOne[1].style.display = 'none';
   }

   if (covidValue === true) {
      when[0].style.display = 'block';
   }
   if (covidValue === false) {
      when[0].style.display = 'none';
   }

   covidArr.push(covidValue);

   if (el === vaccinated[0]) {
      vaccinatedValue = true;
      thErrorOne[3].style.display = 'none';
   }
   if (el === vaccinated[1]) {
      vaccinatedValue = false;
      thErrorOne[3].style.display = 'none';
   }

   if (vaccinatedValue === true) {
      when[1].style.display = 'block';
   }
   if (vaccinatedValue === false) {
      when[1].style.display = 'none';
   }
   vaccinatedArr.push(vaccinatedValue);
}


workLocation[0].addEventListener('click', covidCheckK);
workLocation[1].addEventListener('click', covidCheckK);
workLocation[2].addEventListener('click', covidCheckK);

covid[0].addEventListener('click', covidCheckK);
covid[1].addEventListener('click', covidCheckK);

vaccinated[0].addEventListener('click', covidCheckK);
vaccinated[1].addEventListener('click', covidCheckK);

//date inputlisteners

let covidDateValue;
let vaccinatedDateValue;

let covidDateArr = [];
let vaccinatedDateArr = [];

function dateInputListener(event) {

   let el = event.target;

   if (el === covidDate) {
      covidDateValue = covidDate.value;
      covidDateArr.push(covidDateValue);
      thErrorOne[2].style.display = 'none';
   }

   if (el === vaccinatedDate) {
      vaccinatedDateValue = vaccinatedDate.value;
      vaccinatedDateArr.push(vaccinatedDateValue);
      thErrorOne[4].style.display = 'none';
   }
}

covidDate.addEventListener('input', dateInputListener);
vaccinatedDate.addEventListener('input', dateInputListener);


// nav control third page

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



   if (workLocationArr[workLocationArr.length - 1] !== undefined) {
      globalCounterThree = 0;
      if (covidArr[covidArr.length - 1] === false && vaccinatedArr[vaccinatedArr.length - 1] === false) {
         globalCounterThree = 1;
         if (globalCounterThree === 1 && globalCounterFour === 0) {
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
               pages[4].style.display = 'flex';
               pages[5].style.display = 'none';
            }
         }
         else if (globalCounterThree === 1 && globalCounterFour === 1) {
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
         }
         if (el === nextPage[2] || el === arrowRight[2]) {
            pages[3].style.display = 'none';
            pages[4].style.display = 'flex';
         }
      }
      if (covidArr[covidArr.length - 1] === true && vaccinatedArr[vaccinatedArr.length - 1] === false) {
         globalCounterThree = 0;
         if (covidDateArr[covidDateArr.length - 1] !== '' && covidDateArr[covidDateArr.length - 1] !== undefined) {
            globalCounterThree = 1;
            if (globalCounterThree === 1 && globalCounterFour === 0) {
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
                  pages[4].style.display = 'flex';
                  pages[5].style.display = 'none';
               }
            }
            else if (globalCounterThree === 1 && globalCounterFour === 1) {
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
            }
            if (el === nextPage[2] || el === arrowRight[2]) {
               pages[3].style.display = 'none';
               pages[4].style.display = 'flex';
            }
         }
      }

      if (covidArr[covidArr.length - 1] === false && vaccinatedArr[vaccinatedArr.length - 1] === true) {

         globalCounterThree = 0;
         if (vaccinatedDateArr[vaccinatedDateArr.length - 1] !== '' && vaccinatedDateArr[vaccinatedDateArr.length - 1] !== undefined) {
            globalCounterThree = 1;
            if (globalCounterThree === 1 && globalCounterFour === 0) {
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
                  pages[4].style.display = 'flex';
                  pages[5].style.display = 'none';
               }
            }
            else if (globalCounterThree === 1 && globalCounterFour === 0) {
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
            }
            if (el === nextPage[2] || el === arrowRight[2]) {
               pages[3].style.display = 'none';
               pages[4].style.display = 'flex';
            }
         }
      }
      if (covidArr[covidArr.length - 1] === true && vaccinatedArr[vaccinatedArr.length - 1] === true) {

         globalCounterThree = 0;
         if (vaccinatedDateArr[vaccinatedDateArr.length - 1] !== '' && vaccinatedDateArr[vaccinatedDateArr.length - 1] !== undefined) {
            globalCounterThree = 0;
            if (vaccinatedDateArr[vaccinatedDateArr.length - 1] !== '' && vaccinatedDateArr[vaccinatedDateArr.length - 1] !== undefined) {
               globalCounterThree = 1;
               if (globalCounterThree === 1 && globalCounterFour === 0) {

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
                     pages[4].style.display = 'flex';
                     pages[5].style.display = 'none';
                  }
               }
               else if (globalCounterThree === 1 && globalCounterFour === 1) {

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
               }
               if (el === nextPage[2] || el === arrowRight[2]) {
                  pages[3].style.display = 'none';
                  pages[4].style.display = 'flex';
               }
            }
         }
      }
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

let devtalkValue;
let devtalkArr = [];

function devtalkk(event) {
   let el = event.target;
   if (el === devtalk[0]) {
      devtalkValue = true;
   }
   if (el === devtalk[1]) {
      devtalkValue = false;
   }

   if (devtalkValue === true) {
      what[0].style.display = 'block'
   }
   if (devtalkValue === false) {
      what[0].style.display = 'none'
   }
   devtalkArr.push(devtalkValue);

   if (devtalkArr[devtalkArr.length - 1] !== undefined) foErrorOne[0].style.display = 'none';
}

devtalk[0].addEventListener('click', devtalkk);
devtalk[1].addEventListener('click', devtalkk);

let foTextareaValue;
let foTextareaArr = [];
let foUserMessageArr = [];


foTextarea.addEventListener('input', () => {
   if (foTextarea.value === '') {
      foErrorOne[1].style.display = 'block';
      foTextarea.value = '';
   }
   if (foTextarea.value !== '') foErrorOne[1].style.display = 'none';
   foTextareaArr.push(foTextarea.value);
})


foUserMessage.addEventListener('input', () => {
   if (foUserMessage.value === '') foErrorOne[2].style.display = 'block', foUserMessage.value = '';
   if (foUserMessage.value !== '') foErrorOne[2].style.display = 'none';
   foUserMessageArr.push(foUserMessage.value);
})

// nav control fourth page

function pageControlFour(event) {

   let el = event.target;

   if (foTextarea.value !== '') foErrorOne[1].style.display = 'none';

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

   if (devtalkArr[devtalkArr.length - 1] === true) {
      globalCounterFour = 0;
      if (foTextareaArr[foTextareaArr.length - 1] !== '' && foTextareaArr[foTextareaArr.length - 1] !== undefined) {
         globalCounterFour = 0;
         if (foUserMessageArr[foUserMessageArr.length - 1] !== '' && foUserMessageArr[foUserMessageArr.length - 1] !== undefined) {
            globalCounterFour = 1;
            if (el === button[19]) {
               pages[1].style.display = 'none';
               pages[2].style.display = 'none';
               pages[3].style.display = 'none';
               pages[4].style.display = 'none';
               pages[5].style.display = 'block';
            }
            if (el === nextPage[3] || el === arrowRight[3]) {
               pages[4].style.display = 'none';
               pages[5].style.display = 'block';
            }
         }

      }
   }

   if (foUserMessageArr[foUserMessageArr.length - 1] !== '' && foUserMessageArr[foUserMessageArr.length - 1] !== undefined) {
      globalCounterFour = 0;
      if (devtalkArr[devtalkArr.length - 1] === false) {
         globalCounterFour = 1;
         if (el === button[19]) {
            pages[1].style.display = 'none';
            pages[2].style.display = 'none';
            pages[3].style.display = 'none';
            pages[4].style.display = 'none';
            pages[5].style.display = 'block';
         }
         if (el === nextPage[3] || el === arrowRight[3]) {
            pages[4].style.display = 'none';
            pages[5].style.display = 'block';
         }
      }
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

async function submitF() {

   if (numberArr[numberArr.length - 1] === '') numberArr[numberArr.length - 1] = "false";

   let resultsSkilssArr = [];
   resultsSkilssArr.push(fSkillsArr);
   resultsSkilssArr.push(sSkillsArr);
   resultsSkilssArr.push(tSkillsArr);
   resultsSkilssArr.push(foSkillsArr);
   resultsSkilssArr.push(fiSkillsArr);
   resultsSkilssArr.push(siSkillsArr);
   resultsSkilssArr.push(seSkillsArr);
   resultsSkilssArr.push(eiSkillsArr);
   resultsSkilssArr = resultsSkilssArr.filter(el => el.length > 0);

   let skillsObj = [];


   resultsSkilssArr.forEach((el, inx) => {
      skillsObj[inx] = {
         id: `${el[0]}`,
         experience: `${el[1]}`
      }
   })


   if (workLocationValue === 'From Sairme Office') workLocationValue = 'from_sairme_office';
   if (workLocationValue === 'From Home') workLocationValue = 'from_home';
   if (workLocationValue === 'Hybrid') workLocationValue = 'hybrid';

   if (covidDateArr[covidDateArr.length - 1] === undefined || covidDateArr[covidDateArr.length - 1] === '') covidDateArr[covidDateArr.length - 1] = '2022-02-22';
   if (vaccinatedDateArr[vaccinatedDateArr.length - 1] === undefined || vaccinatedDateArr[vaccinatedDateArr.length - 1] === '') vaccinatedDateArr[vaccinatedDateArr.length - 1] = '2022-02-22';

   if (foTextareaArr[foTextareaArr.length - 1] === undefined || foTextareaArr[foTextareaArr.length - 1] === '') foTextareaArr[foTextareaArr.length - 1] = 'false';
   if (foUserMessageArr[foUserMessageArr.length - 1] === undefined || foUserMessageArr[foUserMessageArr.length - 1] === '') foUserMessageArr[foUserMessageArr.length - 1] = 'false';
   
   
   let data = {

      token: "f7f3f17a-8b73-4962-b839-829a1bae305b",
      first_name: firstNameArr[firstNameArr.length - 1],
      last_name: lastNameArr[lastNameArr.length - 1],
      email: emailArr[emailArr.length - 1],
      phone: numberArr[numberArr.length - 1],
      skills: skillsObj,
      work_preference: workLocationValue,
      had_covid: covidArr[covidArr.length - 1],
      had_covid_at: covidDateArr[covidDateArr.length - 1],
      vaccinated: vaccinatedArr[vaccinatedArr.length - 1],
      vaccinated_at: vaccinatedDateArr[vaccinatedDateArr.length - 1],
      will_organize_devtalk: devtalkArr[devtalkArr.length - 1],
      devtalk_topic: foTextareaArr[foTextareaArr.length - 1],
      something_special: foUserMessageArr[foUserMessageArr.length - 1],
   }

   let res = await fetch('https://bootcamp-2022.devtest.ge/api/application', {
      method: 'POST',
      headers: {
         'accept': 'application/json',
         'content-Type': 'application/json'
      },
      body: JSON.stringify(data),
   })

   let req = await fetch('https://bootcamp-2022.devtest.ge/api/applications?token=f7f3f17a-8b73-4962-b839-829a1bae305b')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))

   pages[5].style.display = 'none';
   pages[6].style.display = 'flex';
   setTimeout(function () {
      pages[6].style.display = 'none';
      pages[0].style.display = 'block';
   }, 3000)
}


submit.addEventListener('click', submitF)

