// team info //
const teamInfo = [
    {
        name: "Mark Waugh",
        id: 0,
        text: "111Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui / Ux , print template.",
        photo: "https://placem.at/people?w=800&h=500&random=7/",
        social: {
            facebook: "https://www.youtube.com/",
            dribble: "https://www.youtube.com/",
            behance: "https://www.youtube.com/",
            twiter: "https://www.youtube.com/",
        }
    },
    {
        name: "Sokina Jue",
        id: 1,
        text: "222Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooingempor incididut labore Ui / Ux , print template.",
        photo: "https://placem.at/people?w=300&h=300&random=1/",
        social: {
            facebook: "https://www.facebook.com/",
            dribble: "https://www.facebook.com/",
            behance: "https://www.facebook.com/",
            twiter: "https://www.facebook.com/",
        }
    },
    {
        name: "Petter Pie",
        id: 2,
        text: "333Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididabore Ui / Ux , print template.",
        photo: "https://placem.at/people?w=300&h=300&random=2/",
        social: {
            facebook: "https://www.twitter.com/",
            dribble: "https://www.twitter.com/",
            behance: "https://www.twitter.com/",
            twiter: "https://www.twitter.com/",
        }
    },
    {
        name: "Adam Werf",
        id: 3,
        text: "444Lorem ipsum dolor sit amet, consectetur adipis cing elit, ooing eiusmod tempor incididut labore Ui / Ux , print template.",
        photo: "https://placem.at/people?w=300&h=300&random=3/",
        social: {
            facebook: "https://www.google.com/",
            dribble: "https://www.google.com/",
            behance: "https://www.google.com/",
            twiter: "https://www.google.com/",
        }
    },
    {
        name: "Yuik Lode",
        id: 4,
        text: "555Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incidire Ui / Ux , print template.",
        photo: "https://placem.at/people?w=300&h=300&random=4/",
        social: {
            facebook: "https://www.google.maps.com/",
            dribble: "https://www.google.maps.com/",
            behance: "https://www.google.maps.com/",
            twiter: "https://www.google.maps.com/",
        }
    }
];

// team //
// const team = document.querySelector('.team');
const teamPhoto = document.querySelector('.team_photo img');
const teamTitle = document.querySelector('.team_title');
const teamText = document.querySelector('.team_text');
const socItem = document.querySelectorAll('.soc_item a');
const teamItem = document.querySelectorAll('.team_item');
const teamItemImg = document.querySelectorAll('.team_item img');
const teamName = document.querySelectorAll('.team_item .team_name');

function teammates(idx = 0) {

    let j = idx;

    teamPhoto.id = teamInfo[idx].id.toString();
    teamPhoto.setAttribute('src', teamInfo[idx].photo);
    teamTitle.textContent = teamInfo[idx].name;
    teamPhoto.setAttribute('alt', teamInfo[idx].name);
    teamText.textContent = teamInfo[idx].text;

    for (let i = 0; i < socItem.length; i++) {
        keys = Object.keys(teamInfo[idx].social);
        socItem[i].setAttribute('href', teamInfo[idx].social[keys[i]]);
    }

    j = 0;
    for (let i = 0; i < teamInfo.length - 1; i++) {
        if (j === idx) {
            j++;
            i--;
            continue;
        }
        teamItem[i].id = teamInfo[j].id.toString();
        teamItemImg[i].setAttribute('src', teamInfo[j].photo);
        teamName[i].textContent = teamInfo[j].name;
        teamItemImg[i].setAttribute('alt', teamInfo[j].name);
        j++;
    }
}

function teamActive(idx) {
    teammates(idx);
    document.querySelector('.team_ava').style.opacity = 1;
    document.querySelector('.team_photo').style.opacity = 1;
    document.querySelector('.team_mates').style.opacity = 1;

    setTimeout(teamClick, 250);
}

// document.querySelector('.team_ava').classList.toggle('_active');
// document.querySelector('.team_photo').classList.toggle('_active');
// document.querySelector('.team_mates').classList.toggle('_active');

teamActive();

// window.addEventListener("load", function readyLoad() {
//     teamActive();
// });

const teamItems = document.querySelector('.team_ava');

// teamItems.addEventListener("click", function (event) {
//     if (event.target.closest('.team_item')) {
//         teammates(Number(event.target.closest('.team_item').id));
//     }
// });

function teamClick() {
    teamItems.addEventListener("click", function (event) {
        if (event.target.closest('.team_item')) {
            document.querySelector('.team_ava').style.opacity = 0;
            document.querySelector('.team_photo').style.opacity = 0;
            document.querySelector('.team_mates').style.opacity = 0;
            setTimeout(teamActive, 250, Number(event.target.closest('.team_item').id))
        }
    }, { "once": true });
}

// fixHeader //
window.onscroll = function fixHeader() {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    if (window.pageYOffset > 30) {
        header.classList.add('header-fixed');
        if (document.body.offsetWidth > 720) nav.classList.add('height');
    } else {
        header.classList.remove('header-fixed')
        if (document.body.offsetWidth > 720) nav.classList.remove('height')
    };
};


// const nav = document.querySelector('.nav');
// nav.addEventListener('click', function (event) {
//     if (event.target.closest('.nav_link[data-goto]')) {
//         console.log('dfvdfbgnhjmk');
//         console.log(nav);
//         // teammates(Number(event.target.closest('.team_item').id));
//     }
// });


// nav //
const navLinks = document.querySelectorAll('.nav_link[data-goto]');
if (navLinks.length > 0) { // 0_o
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', function (event) {
            const navLink = event.target;
            if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) { // 0_o
                const gotoSection = document.querySelector(navLink.dataset.goto).closest('section');
                const gotoSectionValue = gotoSection.getBoundingClientRect().top + window.pageYOffset;

                const burger = document.querySelector('.burger');
                const nav = document.querySelector('.nav');
                if (burger) {
                    nav.classList.toggle('_active');
                    burger.classList.toggle('_active');
                }

                window.scrollTo({
                    top: gotoSectionValue.toFixed(),
                    behavior: 'smooth',
                });
                event.preventDefault();
            }
        });
    });
}

// scroll => nav:hover //
window.addEventListener('scroll', function (event) {

    navLinks.forEach(navLink => {
        navLink.classList.remove('_active');
    });

    for (let i = 0; i < navLinks.length; i++) {

        let gotoSectionValue = 0;
        if (i > 0) {
            const gotoSection = document.querySelector(navLinks[i].dataset.goto).closest('.section');
            gotoSectionValue = gotoSection.getBoundingClientRect().top + window.pageYOffset;
        }

        let gotoSectionNextValue = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        if (i < navLinks.length - 1) {
        const gotoSectionNext = document.querySelector(navLinks[i + 1].dataset.goto).closest('.section');
        gotoSectionNextValue = gotoSectionNext.getBoundingClientRect().top + window.pageYOffset;
        }

        if (scrollY >= gotoSectionValue.toFixed() && scrollY < gotoSectionNextValue.toFixed()) {
            navLinks[i].classList.add('_active');
        }
    }
});

// header //
const header = document.querySelector('.header');
header.addEventListener('click', function (event) {
    if (!event.target.dataset.goto && event.target.className && !event.target.className.includes('burger')) {
        if (burger && nav.className.includes('_active')) {
            burger.classList.remove('_active');
            nav.classList.remove('_active');
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        event.preventDefault();
    }
});

// burger //
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger) {
    document.addEventListener('click', function (event) {
        if (event.target.closest('.burger')) {
            burger.classList.toggle('_active');
            nav.classList.toggle('_active');
        }
        if (nav.className.includes('_active') && !event.target.closest('.header')) {
            burger.classList.remove('_active');
            nav.classList.remove('_active');
        }
    });
    document.addEventListener('touchstart', function (event) {
        if (nav.className.includes('_active') && !event.target.closest('.header')) {
            burger.classList.remove('_active');
            nav.classList.remove('_active');
        }
    });
}

// forms //
window.addEventListener('beforeunload', function (event) {
    for (let form of document.forms) {
        for (let input of form) {
            if (input.value && input.type != 'submit') {
                event.preventDefault();
                event.returnValue = '';
            };
        }
    }
});
