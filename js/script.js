// team info //
const team = [
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
const teamPhoto = document.querySelector('.team_photo img');
const teamTitle = document.querySelector('.team_title');
const teamText = document.querySelector('.team_text');
const socItem = document.querySelectorAll('.soc_item');
const teamItem = document.querySelectorAll('.team_item');
const teamItemImg = document.querySelectorAll('.team_item img');
const teamName = document.querySelectorAll('.team_item .team_name');

teammates();

// window.addEventListener("load", function readyLoad() {
//     teammates();
// });

function teammates(idx = 0) {
    let j = idx;

    teamPhoto.id = team[idx].id.toString();
    teamPhoto.setAttribute('src', team[idx].photo);
    teamTitle.textContent = team[idx].name;
    teamPhoto.setAttribute('alt', team[idx].name);
    teamText.textContent = team[idx].text;

    for (let i = 0; i < socItem.length; i++) {
        keys = Object.keys(team[idx].social);
        socItem[i].setAttribute('href', team[idx].social[keys[i]]);
    }

    j = 0;
    for (let i = 0; i < team.length - 1; i++) {
        if (j === idx) {
            j++;
            i--;
            continue;
        }
        teamItem[i].id = team[j].id.toString();
        teamItemImg[i].setAttribute('src', team[j].photo);
        teamName[i].textContent = team[j].name;
        teamItemImg[i].setAttribute('alt', team[j].name);
        j++;
    }
}

const teamItems = document.querySelector('.team_ava');

teamItems.addEventListener("click", function (event) {
    if (event.target.closest('.team_item')) {
        teammates(Number(event.target.closest('.team_item').id));
    }
});

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
if (navLinks.length > 0) {
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', function (event) {
            const navLink = event.target;
            if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
                const section = document.getElementsByClassName('section');
                const gotoSection = document.querySelector(navLink.dataset.goto);
                const gotoSectionValue = gotoSection.getBoundingClientRect().top + window.pageYOffset - parseInt(getComputedStyle(section[0]).paddingTop);
                const nav = document.querySelector('.nav')
                nav.classList.toggle('_active');
                const burger = document.querySelector('.burger');
                burger.classList.toggle('_active');
                window.scrollTo({
                    top: gotoSectionValue,
                    behavior: 'smooth',
                });
                event.preventDefault();
            }
        });
    });
}

const header = document.querySelector('.header');
header.addEventListener('click', function (event) {
    // if (!event.target.dataset.goto && event.target.className && !event.target.className.includes('burger')) {
    if (!event.target.closest('.burger') && !event.target.closest('.nav')) {
        if (nav.className.includes('_active')) {
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
    burger.addEventListener('click', function (event) {
        burger.classList.toggle('_active');
        nav.classList.toggle('_active');
    });
}

document.addEventListener('click', function (event) {
    if (nav.className.includes('_active') && !event.target.closest('.header')) {
        burger.classList.remove('_active');
        nav.classList.remove('_active');
    }
});