let containerOne = document.querySelectorAll('.container-one');
let containerTwo = document.querySelectorAll('.container-two');
let submissionss = document.querySelectorAll('.submissionss');
const sections = document.querySelectorAll('.sections');
let personalDataFirst = document.querySelectorAll('.personal-data--first');
let datta = document.querySelectorAll('.data')

//skills
let skillsSection = document.querySelectorAll('.skills-section');
let experienceData = document.querySelectorAll('.experience-data');

//location
let checkOffice = document.querySelectorAll('.check.office');
let checkHome = document.querySelectorAll('.check.home');
let checkHybrid = document.querySelectorAll('.check.hybrid');

// check covid

let checkCovidYes = document.querySelectorAll('.check.covid-yes');
let checkCovidNo = document.querySelectorAll('.check.covid-no');

// covid date

let covidDateYes = document.querySelectorAll('.date.covid.yes');
let covidDateRemove = document.querySelectorAll('.covid-date__remove');

// vaccinated

let checkVaccinatedYes = document.querySelectorAll('.check.vaccinated-yes');
let checkVaccinatedNo = document.querySelectorAll('.check.vaccinated-no');

// vaccinated date

let covidDateVaccinated = document.querySelectorAll('.date.covid.vaccinated');
let vaccinatedDateRemove = document.querySelectorAll('.vaccinated-date__remove');

// insigts

let checkDevtalksYes = document.querySelectorAll('.check.devtalks-yes');
let checkDevtalksNo = document.querySelectorAll('.check.devtalks-no');

// devtalks

let textDevtalks = document.querySelectorAll('.text.insigts.devtalks');
let devtalksRemove = document.querySelectorAll('.devtalks-remove');


// something special

let textSpecial = document.querySelectorAll('.text.insigts.special')



// code 


let cloneOne = submissionss[0].cloneNode(true);

let dataArr = [];

async function getData() {
    let req = await fetch('https://bootcamp-2022.devtest.ge/api/applications?token=f7f3f17a-8b73-4962-b839-829a1bae305b')

        .then(function (response) {
            return response.json();
        })
        .then(data => dataArr = data);

    dataArr.forEach((el, inx) => {
        if (inx < dataArr.length - 1) {
            cloneOne = sections[0].childNodes[1].cloneNode(true);
            sections[0].appendChild(cloneOne);
        }

        //submissionss

        submissionss = document.querySelectorAll('.submissionss');

        //containers
        containerOne = document.querySelectorAll('.container-one');
        containerTwo = document.querySelectorAll('.container-two');

        // data
        personalDataFirst = document.querySelectorAll('.personal-data--first');
        datta = document.querySelectorAll('.data')

        //skills
        skillsSection = document.querySelectorAll('.skills-section');
        experienceData = document.querySelectorAll('.experience-data');

        //location
        checkOffice = document.querySelectorAll('.check.office');
        checkHome = document.querySelectorAll('.check.home');
        checkHybrid = document.querySelectorAll('.check.hybrid');

        // check covid

        checkCovidYes = document.querySelectorAll('.check.covid-yes');
        checkCovidNo = document.querySelectorAll('.check.covid-no');

        // covid date

        covidDateYes = document.querySelectorAll('.date.covid.yes')
        covidDateRemove = document.querySelectorAll('.covid-date__remove');

        // vaccinated

        checkVaccinatedYes = document.querySelectorAll('.check.vaccinated-yes');
        checkVaccinatedNo = document.querySelectorAll('.check.vaccinated-no');

        // vaccinated date

        covidDateVaccinated = document.querySelectorAll('.date.covid.vaccinated')
        vaccinatedDateRemove = document.querySelectorAll('.vaccinated-date__remove');

        // insigts

        checkDevtalksYes = document.querySelectorAll('.check.devtalks-yes');
        checkDevtalksNo = document.querySelectorAll('.check.devtalks-no');

        // devtalks

        textDevtalks = document.querySelectorAll('.text.insigts.devtalks')
        devtalksRemove = document.querySelectorAll('.devtalks-remove');


        // something special

        textSpecial = document.querySelectorAll('.text.insigts.special')

    })

    async function click() {

        sections[0].childNodes.forEach((el, index) => {

            if (index % 2 !== 0 && index < 3) {
                el.childNodes[1]?.addEventListener('click', () => {
                    el.childNodes[1].style.display = 'none';
                    el.childNodes[3].style.display = 'flex';
                    el.style.marginBottom = '38rem';
                })
                el.childNodes[3]?.addEventListener('click', () => {
                    el.childNodes[1].style.display = 'flex';
                    el.childNodes[3].style.display = 'none';
                    el.style.marginBottom = '-55rem';
                })
            } else {

                el.childNodes[1]?.addEventListener('click', () => {
                    el.childNodes[1].style.display = 'none';
                    el.childNodes[3].style.display = 'flex';
                    el.style.marginBottom = '38rem';
                })
                el.childNodes[3]?.addEventListener('click', () => {
                    el.childNodes[1].style.display = 'flex';
                    el.childNodes[3].style.display = 'none';
                    el.style.marginBottom = '-55rem';
                })
            }
        })
    }

    click();

    dataArr.forEach((el, inx) => {


        //container one
        let number = document.createElement('div')
        number.classList.add('subm-header');
        number.classList.add('one');
        number.textContent = inx + 1;
        containerOne[inx].appendChild(number);

        //container two
        let numberTwo = document.createElement('div')
        numberTwo.classList.add('subm-header');
        numberTwo.textContent = inx + 1;
        containerTwo[inx].insertBefore(numberTwo, datta[inx]);

        // personal information first
        let firstName = document.createElement('li');
        let lastName = document.createElement('li');
        let email = document.createElement('li');
        let phone = document.createElement('li');

        let firstNameP = document.createElement('p');
        let lastNameP = document.createElement('p');
        let emailP = document.createElement('p');
        let phoneP = document.createElement('p');

        firstName.classList.add('personal-data');
        lastName.classList.add('personal-data');
        email.classList.add('personal-data');
        phone.classList.add('personal-data');


        firstNameP.textContent = el.first_name;
        lastNameP.textContent = el.last_name;
        emailP.textContent = el.email;
        if (el.phone === 'false') {
            phoneP.textContent = '';
        } else {

            phoneP.textContent = el.phone;
        }

        firstName.appendChild(firstNameP);
        lastName.appendChild(lastNameP);
        email.appendChild(emailP);
        phone.appendChild(phoneP);

        personalDataFirst[inx].appendChild(firstName)
        personalDataFirst[inx].appendChild(lastName)
        personalDataFirst[inx].appendChild(email)
        personalDataFirst[inx].appendChild(phone)

        // skills

        el.skills.forEach((ell, idx) => {

            let skills = document.createElement('li');
            let skillsP = document.createElement('p');
            if (ell.id === 1) {
                skillsP.textContent = 'HTML';
            }
            if (ell.id === 2) {
                skillsP.textContent = 'CSS';
            }
            if (ell.id === 3) {
                skillsP.textContent = 'PHP';
            }
            if (ell.id === 4) {
                skillsP.textContent = 'Laravel';
            }
            if (ell.id === 5) {
                skillsP.textContent = 'React.JS';
            }
            if (ell.id === 6) {
                skillsP.textContent = 'Vue.JS';
            }
            if (ell.id === 7) {
                skillsP.textContent = 'Svelte';
            }
            if (ell.id === 8) {
                skillsP.textContent = 'Angular';
            }

            skills.appendChild(skillsP);
            skillsSection[inx].appendChild(skills);

            let experience = document.createElement('li');
            experience.classList.add('personal-data');

            let experienceP = document.createElement('p');

            experienceP.textContent = `Years of Experience: ${ell.experience}`;

            experience.appendChild(experienceP);
            experienceData[inx].appendChild(experience);

        });

        // location

        if (el.work_preference === 'from_sairme_office') {
            checkOffice[inx].style.backgroundColor = '#ccc'
        }
        if (el.work_preference === 'from_home') {
            checkHome[inx].style.backgroundColor = '#ccc'
        }
        if (el.work_preference === 'hybrid') {
            checkHybrid[inx].style.backgroundColor = '#ccc'
        }

        // check covid

        if (el.had_covid === true) {
            checkCovidYes[inx].style.backgroundColor = '#ccc'
            // covid date

            let covidDate = document.createElement('p');
            covidDate.textContent = el.had_covid_at;
            covidDateYes[inx].appendChild(covidDate);
        }

        if (el.had_covid === false) {
            checkCovidNo[inx].style.backgroundColor = '#ccc';

            //covid date
            covidDateRemove[inx].remove();
            datta[inx].style.paddingBottom = '50rem';
        }


        //vaccinated

        if (el.vaccinated === true) {
            checkVaccinatedYes[inx].style.backgroundColor = '#ccc'
            // vaccinated date

            let vaccinatedDate = document.createElement('p');
            vaccinatedDate.textContent = el.vaccinated_at;
            covidDateVaccinated[inx].appendChild(vaccinatedDate);
        }

        if (el.vaccinated === false) {
            checkVaccinatedNo[inx].style.backgroundColor = '#ccc'

            // vaccinated date
            vaccinatedDateRemove[inx].remove();
            datta[inx].style.paddingBottom = '50rem';
        }

        // devtalks

        if (el.will_organize_devtalk === true) {
            checkDevtalksYes[inx].style.backgroundColor = '#ccc'
            // text devtalks

            let textDevtalksP = document.createElement('p');
            textDevtalksP.textContent = el.devtalk_topic;
            textDevtalks[inx].appendChild(textDevtalksP);
        }

        if (el.will_organize_devtalk === false) {
            checkDevtalksNo[inx].style.backgroundColor = '#ccc'

            // text devtalks
            devtalksRemove[inx].remove();
            datta[inx].style.paddingBottom = '50rem';
        }

        // text special

        let textSpecialP = document.createElement('p');
        textSpecialP.textContent = el.something_special;
        textSpecial[inx].appendChild(textSpecialP);

    })
}

getData();
