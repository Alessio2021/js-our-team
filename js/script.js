const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

const container = document.querySelector('.team-container');

for (let i = 0; i < team.length; i++){
  const manageteam = team[i];

  const element = 
  `
  <div class="team-card">
  <div class="card-image">
    <img
      src="img/${manageteam.image}"
      alt="${manageteam.name}"
    />
  </div>
  <div class="card-text">
    <h3>${manageteam.name}</h3>
    <p>${manageteam.role}</p>
  </div>
  `

  container.innerHTML += element;
}