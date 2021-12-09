const container = document.querySelector('.container');

const ar = [
  {
    name: 'Vishnu Anilkumar (C)',
    dob: '27 January 2001',
    location: 'Puzhakkal',
    achivements: 'Web Developer',
    instagram: 'https://www.instagram.com/_reshu________/',
    photo: '',
  },
  {
    name: 'Reshma Mukandhan (VC)',
    dob: '20 August 2001',
    location: 'Puthur',
    achivements: 'Folk Dance',
    instagram: 'https://www.instagram.com/_reshu________/',
    photo: '',
  },
  {
    name: 'Sreeram',
    dob: '03 September 2001',
    location: 'Chiyyaram',
    achivements: 'School Head Boy',
    instagram: 'https://www.instagram.com/__sherin__akbar__/',
    photo: './assets/sreeram.jpeg',
  },
  {
    name: 'Vrinda V',
    dob: '01 December 2000',
    location: 'Kunnathangadi',
    achivements: 'Athlete',
    instagram: 'https://www.instagram.com/vrindha.__/',
    photo: './assets/Vrinda.jpeg',
  },
  {
    name: 'Vishal K S',
    dob: '20 March 2002',
    location: 'Mundoor',
    achivements: 'Arts Captain',
    instagram: 'https://www.instagram.com/_reshu________/',
    photo: '',
  },
  {
    name: 'Akhil K',
    dob: '',
    location: 'Guruvayoor',
    achivements: 'Web Developer',
    instagram: 'https://www.instagram.com/_reshu________/',
    photo: '',
  },
  {
    name: 'Sherin Akbar',
    dob: '28 January 2002',
    location: 'Guruvayoor',
    achivements: 'BasketBall',
    instagram: 'https://www.instagram.com/__sherin__akbar__/',
    photo: './assets/sherin.jpg',
  },
  {
    name: 'Somkumar V A',
    dob: '30 MAY 2001',
    location: 'Guruvayoor',
    achivements: 'Kabaddi',
    instagram: 'https://www.instagram.com/somkumar_va/',
    photo: './assets/somkumar.jpeg',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  let displayMenu = ar.map((item) => {
    //   return `<div class="card">
    //   <div class="card-header" >
    //     <img src="${item.photo}" class="card-profile-photo" alt="DP" />
    //   </div>

    //   <div>
    //     <h2 class="card-profile-name">${item.name}</h2>
    //     <div class="card-div">
    //       <i class="fas fa-map-marker-alt"></i>
    //       <h3>${item.location}</h3>
    //     </div>
    //     <div class="card-div">
    //       <i class="fas fa-calendar-day"></i>v
    //       <h3>${item.dob}</h3>
    //     </div>
    //     <div class="card-div">
    //       <i class="fas fa-award"></i>
    //       <h3>${item.achivements}</h3>
    //     </div>
    //   </div>
    //   <a href="${item.instagram}" target="_blank" class="card-links" >
    //     <i class="fab fa-instagram"></i>
    //   </a>
    // </div>`;
    return `<div class="card">
    <div class="card-header">
        <img src="${item.photo}" alt="" />
      </div>
      <div class="card-body">
        <h2>${item.name}</h2>
        <div class="card-item">
          <i class="fas fa-map-marker-alt"></i>
          <h3>${item.location}</h3>
        </div>
        <div class="card-item">
          <i class="fas fa-calendar-day"></i>
          <h3>${item.dob}</h3>
        </div>
        <div class="card-item">
          <i class="fas fa-award"></i>
          <h3>${item.achivements}</h3>
        </div>
    </div>
    <div class="card-links">
      <a href="${item.instagram}" target="_blank" >
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </div>`;
  });

  displayMenu = displayMenu.join('');
  container.innerHTML = displayMenu;
});
