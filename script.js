// burger

const burger = document.querySelector('.burger');

const navItems = document.querySelectorAll('.nav-item');
const signIn = document.querySelector('.sign-in');

burger.addEventListener('click', () => {
  burger.classList.toggle('rotate');

  navItems.forEach((item) => item.classList.toggle('hidden'));
  signIn.classList.toggle('hidden');
});

navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    navItems.forEach((item) => item.classList.remove('active'));
    item.classList.add('active');
  });
});

const reviews = [
  {
    id: 1,
    name: 'Maria Joana',
    job: 'Manager at Google',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga provident voluptates eum laudantium magnam officia saepe eaque quam nostrum eligendi?',
    img: './img/client1.jpg',
  },
  {
    id: 2,
    name: 'John Duo',
    job: 'Host from Airbnb',
    text: 'Illum voluptas ipsam ullam, consequuntur corrupti doloremque culpa ipsum, beatae temporibus vero tempora enim nostrum aut laborum porro adipisci quaerat officia repellat.',
    img: './img/client2.jpg',
  },
  {
    id: 3,
    name: 'Larry Davis',
    job: 'HR on Aviato',
    text: 'Illum voluptas ipsam ullam, consequuntur corrupti doloremque culpa ipsum, beatae temporibus vero tempora enim nostrum aut laborum porro adipisci quaerat officia repellat.',
    img: './img/client3.jpg',
  },
];

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const CL1Name = document.querySelector('.c1-name');
const CL2Name = document.querySelector('.c2-name');
const CL1Job = document.querySelector('.c1-job');
const CL2Job = document.querySelector('.c2-job');
const CL1img = document.querySelector('.c1-img');
const CL2img = document.querySelector('.c2-img');
const CL1review = document.querySelector('.c1-review');
const CL2review = document.querySelector('.c2-review');

let currentItem = 0;
let secondItem = 1;

const showReviews = () => {
  CL1Name.textContent = reviews[currentItem].name;
  CL1Job.textContent = reviews[currentItem].job;
  CL1img.src = reviews[currentItem].img;
  CL1review.textContent = reviews[currentItem].text;

  CL2Name.textContent = reviews[secondItem].name;
  CL2Job.textContent = reviews[secondItem].job;
  CL2img.src = reviews[secondItem].img;
  CL2review.textContent = reviews[secondItem].text;
};

showReviews();

nextBtn.addEventListener('click', () => {
  currentItem--;
  secondItem--;

  if (currentItem < 0) currentItem = 2;
  if (secondItem < 0) secondItem = 2;

  showReviews();
});

prevBtn.addEventListener('click', () => {
  currentItem++;
  secondItem++;

  if (currentItem > 2) currentItem = 0;
  if (secondItem > 2) secondItem = 0;

  showReviews();
});
