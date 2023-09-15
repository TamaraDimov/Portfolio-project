const toggleNavbar = () => {
  document.querySelector('.coverPage').classList.toggle('show');
};

document.querySelector('.toggleNav').addEventListener('click', () => {
  toggleNavbar();
});

document.querySelector('.exit').addEventListener('click', () => {
  toggleNavbar();
});

const menuBtn = document.querySelectorAll('.menuBtn');
const menuArr = Array.from(menuBtn);
menuArr.forEach((element) => {
  element.addEventListener('click', () => {
    toggleNavbar();
  });
});

// Tools template
const toolsTemplate = (toolsData) => {
  let tools = '';
  toolsData.forEach((tool) => {
    tools += `
    <button class="link">${tool}</button>
    `;
  });
  return tools;
};

// portfolio template
const workCard = (portfolioData) => {
  let content = '';
  portfolioData.forEach((workData) => {
    content += `
  <div class="mainContainer1 mobile-cards">
  <div class="img">
    <img class="imgBG" src="${
      workData.image
    }" alt="Catchy look inspiring bionic forms"></img>
  </div>
  <div class="infoCard">
    <section class="info">
      <h2 class="name">${workData.name}</h2>
      <ul class="info_job">
        <li class="job">Microverse</li>
        <li>${workData.stack}</li>
        <li>${workData.year}</li>
      </ul>
    </section>
    <section class="decription">
      <p>${workData.excerpt}</p>
    </section>
    <section class="linkButtons">${toolsTemplate(workData.tools)}</section>
    <div class="seeMore">
      <button class="more portfolioButton" data-id="${
        workData.id
      }">See Project</button>
    </div>
  </div>
  </div>`;
  });
  return content;
};

// modal pop up Template
const modal = (workData) => `<section class="popup">
  <div class="mobile-body">
    <div class="popupCard">
            <section class="info">
              <div class="icon">
              <h2 class="name">${workData.name}</h2>
              <a href="#" class="iconX toggleNav">
                <img src="img/Icon.png" alt="menu_exit_button" />
              </a>
            </div>
              <ul class="info_job">
                <li class="job">CANOPY</li>
                <li>${workData.stack}</li>
                <li>${workData.name}</li>
              </ul>
            </section>
            <div class="img">
              <img class="imgBG" src="${
                workData.image
              }" alt="Image from the article for Tanner Christesen"></img>
            </div>
            <div class="decription">
            <div class="decriptionLeft">
              <p class="${workData.description}">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
              </p>
            </div>
            <div class="decriptionRight">
            <section class="linkButtons">${toolsTemplate(
              workData.tools
            )}</section>
            <div class="seeMore btnPopupDiv">
              <a href="${
                workData.live_link
              }" class="more btnPopup">See live <img class="" src="img/live.png" alt="go live icon"></img></a>
              <a href="${
                workData.source_link
              }"class="more btnPopup">See Source <img class="" src="img/git.png" alt="go live icon"></img></a>
            </div>
          </div>
        </div>
  </div>
  </div>
</section>`;

// WINDOWS ON LOAD
window.addEventListener('load', () => {
  const workData = [
    {
      id: '1',
      name: 'Capstone project',
      image: 'img/project1.png',
      stack: 'Front End Dev',
      year: '2022',
      excerpt: 'Capstone project for the first modul completion in Microverse.',
      description:
        'Capstone project of Module 1 : NEW WAYS OF TECHNICAL DRAWING is a web page where you can log in and join the course for mechanical technical drawing.',
      tools: ['html', 'CSS', 'JavaScript'],
      live_link: '#',
      source_link: '#',
    },
    {
      id: '2',
      name: 'Budget App',
      image: 'img/budget.png',
      stack: 'Full Stack Dev',
      year: '2023',
      excerpt:
        'The Ruby on Rails capstone project Budget app is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      description:
        'The Ruby on Rails capstone project Budget app is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      tools: ['HTML', 'Ruby on Rails', 'CSS'],
      live_link: 'https://rails-budget-e790cfd72770.herokuapp.com/',
      source_link: 'https://github.com/TamaraDimov/Budget-app',
    },
    {
      id: '3',
      name: 'FACEBOOK 360',
      image: 'img/d3.png',
      stack: 'Full Stack Dev',
      year: '2015',
      excerpt:
        "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      tools: ['html', 'Ruby on Rails', 'CSS', 'JavaScript'],
      live_link: '#',
      source_link: '#',
    },
    {
      id: '4',
      name: 'Uber Navigation',
      image: 'img/d4.png',
      stack: 'Lead Developer',
      year: '2018',
      excerpt:
        'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      tools: ['html', 'Ruby on Rails', 'CSS', 'JavaScript'],
      live_link: '#',
      source_link: '#',
    },
  ];

  // function to load portfolio sections dynamically when page loads
  function loadPortfolio(callBack = () => null) {
    const workSectionElemnt = document.querySelector('#portfolio');
    workSectionElemnt.innerHTML = workCard(workData);
    return callBack();
  }
  // function to show modal when portfolio see more button is clicked
  function showModal(modalData, callBack = () => null) {
    document.querySelector('.popupSection').innerHTML = modal(modalData);
    return callBack();
  }

  // function to close modal when close button is clicked
  function closeModal() {
    document.querySelector('.icon').addEventListener('click', () => {
      document.querySelector('.popupSection').innerHTML = '';
    });
  }

  // load portfolio section
  loadPortfolio(() => {
    const portfolioButton = document.querySelectorAll('.portfolioButton');
    Array.from(portfolioButton).forEach((element) => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        const id = element.getAttribute('data-id');
        const filter = workData.filter((data) => data.id === id);

        // show modal
        showModal(filter[0], closeModal);
      });
    });
  });
  // contact form validation
  const email = document.getElementById('email');
  const name = document.getElementById('name');
  const text = document.getElementById('text');

  document.querySelector('#get-in-touch').addEventListener('click', (e) => {
    // if the email field is valid, we let the form submit
    if (email.validity.typeMismatch) {
      // submit form
      document.getElementById('error').innerHTML = 'Invalid Email';
      e.preventDefault();
      return;
    }
    if (email.validity.patternMismatch) {
      // submit form
      document.getElementById('error').innerHTML =
        'Please type for email with lowercase letters';
      e.preventDefault();
      return;
    }

    if (!name.validity.valid) {
      // submit form
      document.getElementById('error').innerHTML = 'Invalid Name';
      e.preventDefault();
      return;
    }

    if (!text.validity.valid) {
      // submit form
      document.getElementById('error').innerHTML = 'Invalid Text';
      e.preventDefault();
      return;
    }
    // submit form
    document.getElementById('contact-form').submit();
  });

  function storeData() {
    const form = document.getElementById('contact-form');
    const myFormData = new FormData(form);
    const formDataObj = Object.fromEntries(myFormData.entries());
    localStorage.setItem('contactform', JSON.stringify(formDataObj));
  }

  email.addEventListener('keydown', storeData);
  name.addEventListener('keydown', storeData);
  text.addEventListener('keydown', storeData);

  const contactFormData = JSON.parse(
    localStorage.getItem('contactform') ?? '{}'
  );
  name.value = contactFormData.name ?? '';
  email.value = contactFormData.email ?? '';
  text.value = contactFormData.message ?? '';
});
