const container = document.querySelector('.container');

const ar = [
  {
    name: 'Somkumar V A',
    location: 'Guruvayoor',
    achivements: 'Web Developer',
    instagram: 'https://instagram.com',
    photo: './assets/Somkumar.jpeg',
  },
  {
    name: 'Sherin Akbar',
    location: 'Guruvayoor',
    achivements: 'Web Developer',
    instagram: 'https://www.instagram.com/__sherin__akbar__/',
    photo:
      'https://instagram.fcok6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/231774616_503739087551493_8146171040485037386_n.jpg?_nc_ht=instagram.fcok6-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=nqSvjpr3unIAX9jBDLY&edm=AP_V10EBAAAA&ccb=7-4&oh=9e6337292135fed1bac807675d86862d&oe=61B9DBF7&_nc_sid=4f375e',
  },
  {
    name: 'Sherin Akbar',
    location: 'Guruvayoor',
    achivements: 'Web Developer',
    instagram: 'https://www.instagram.com/__sherin__akbar__/',
    photo: '',
  },
  {
    name: 'Vrindha',
    location: 'Guruvayoor',
    achivements: 'Web Developer',
    instagram: 'https://www.instagram.com/vrindha.__/',
    photo: './assets/Vrinda.jpeg',
  },
  {
    // name: 'ʀᴇꜱʜᴍᴀ_ᴍᴜᴋᴜɴᴅʜᴀɴ',
    name: 'Reshma Mukandhan',
    location: 'Guruvayoor',
    achivements: 'Web Developer',
    instagram: 'https://www.instagram.com/_reshu________/',
    photo: '',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  let displayMenu = ar.map((item) => {
    return `<div class="card">
    <img src="${item.photo}" class="card-profile-photo" alt="DP" />
    <h2 class="card-profile-name">${item.name}</h2>
    <div class="card-location">
      <img src="./assets/location.svg" class="card-logos" alt="" />
      <h3>${item.location}</h3>
    </div>
    <div class="card-achivement">
      <img src="./assets/award.svg" class="card-logos" alt="" />
      <h3>${item.achivements}</h3>
    </div>
    <a href="${item.instagram}" target="_blank">
      <img src="./assets/instagram.svg" class="card-links" alt="" />
    </a>
  </div>`;
  });

  displayMenu = displayMenu.join('');
  container.innerHTML = displayMenu;
});
