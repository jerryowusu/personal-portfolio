const works = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageURL: '../images/project1-snapshot.png',
    technologies: ['html', 'css', 'javaScript'],
    liveURL: '#',
    sourceURL: 'https://github.com/jerryowusu/',
  },
  {
    name: 'Uber Navigation',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    imageURL: '../images/project2-snapshot.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveURL: '#',
    sourceURL: 'https://github.com/jerryowusu/',      
  },
  {
    name: 'Facebook 360',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    imageURL: '../images/project3-snapshot.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveURL: '#',
    sourceURL: 'https://github.com/jerryowusu/',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    imageURL: '../images/project4-snapshot.png',
    technologies: ['html', 'css', 'javaScript'],
    liveURL: '#',
    sourceURL: 'https://github.com/jerryowusu/',
  },
];

const projectSection = document.getElementById('portfolio')

works.forEach((work) => { let techs = ''; work.technologies.forEach((tech) => { techs += `<li class="tag">${tech}</li>`; }); projectSection.innerHTML += `<div class="card"> <div class="project-image"> <img src="${work.imageURL}" alt="${work.name} Screenshot"> </div> <div class="project-description"> <h3>${work.name}</h3> <div class="project-details"> <p>CANOPY</p> <p class="dot">&#x2B24;</p> <p class="project-details-color">Back End Dev</p> <p class="dot">&#x2B24;</p> <p class="project-details-color">2015</p> </div> <p>${work.description}</p> <ul class="tags-section"> ${techs} </ul> <input class="alignment-start button" type="button" value="See Project" id="${work.name}"> </div> </div> `; }); 