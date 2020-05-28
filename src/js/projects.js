/**
 * A list of my current maintained/developed projects
 * @type {Project[]}
 */
const projects = [
  {
    description: 'Advanced and cute moderation discord bot as an entry of Discord\'s Hack Week!',
    language: 'TypeScript',
    image: 'https://augu.dev/images/Nino.png',
    links: [
      {
        icon: ['fab', 'github'],
        url: 'https://github.com/NinoDiscord/Nino'
      },
      {
        icon: ['fas', 'home'],
        url: 'https://nino.augu.dev'
      }
    ],
    name: 'Nino',
    role: 'Lead Dev'
  },
  {
    description: 'Lightweight and feature-rich audio player made for the modern world.',
    language: 'TypeScript',
    image: 'https://augu.dev/images/Kashima.png',
    links: [
      {
        icon: ['fab', 'github'],
        url: 'https://github.com/kashima-org/desktop-app'
      },
      {
        icon: ['fas', 'home'],
        url: 'https://kashima.app'
      },
      {
        icon: ['fab', 'discord'],
        url: 'https://discord.gg/Sxt74yD'
      },
      {
        icon: ['fab', 'twitter'],
        url: 'https://twitter.com/kashima_org'
      }
    ],
    name: 'Kashima',
    role: 'Founder'
  },
  {
    description: 'Fast, open and free-to-use new tab page for most modern browsers.',
    language: 'JavaScript',
    image: 'https://raw.githubusercontent.com/mue/branding/master/logo/logo_round.png',
    links: [
      {
        icon: ['fab', 'github'],
        url: 'https://github.com/mue/mue'
      },
      {
        icon: ['fas', 'home'],
        url: 'https://muetab.xyz'
      },
      {
        icon: ['fab', 'discord'],
        url: 'https://discord.gg/zv8C9F8'
      },
      {
        icon: ['fab', 'twitter'],
        url: 'https://twitter.com/getmue'
      }
    ],
    name: 'Mue Tab',
    role: 'Backend Dev'
  },
  {
    description: 'Python package for the unofficial Azur Lane API',
    language: 'Python',
    image: 'https://raw.githubusercontent.com/AzurAPI/azurapi.github.io/setup/source/images/logo.png',
    links: [
      {
        icon: ['fab', 'python'],
        url: 'https://pypi.org/project/azurlane'
      },
      {
        icon: ['fab', 'github'],
        url: 'https://github.com/AzurAPI/azurapi-py'
      },
      {
        icon: ['fab', 'discord'],
        url: 'https://discord.gg/aAEdys8'
      }
    ],
    name: 'Azur API',
    role: 'Library Dev'
  }
];

/**
 * Function to implement a DOM element to the body
 * @param {string} type The type of element to use
 * @param {{ [x: string]: any }} [attributes] Any attributes to add
 */
function createElement(type, attributes = {}) {
  const element = document.createElement(type);
  if (Object.keys(attributes).length > 0) {
    for (const [name, attr] of Object.entries(attributes)) {
      element.setAttribute(name, attr);
    }
  }

  return element;
}

/**
 * Create a Bulma card
 * @param {Project} project The project
 */
function createCard(project) {
  // This feels redundant but you'll see!
  const card = createElement('div', {
    class: 'card'
  });

  const image = createElement('div', {
    class: 'card-image'
  });

  const figure = createElement('figure', {
    class: 'image is-4by3'
  });

  const projectImage = createElement('img', {
    src: project.image,
    alt: project.name
  });

  // Append the image
  figure.appendChild(projectImage);
  image.appendChild(figure);

  // Make the card content
  const content = createElement('div', { class: 'card-content' });
  const media = createElement('div', { class: 'media' });
  const mediaLeft = createElement('div', { class: 'media-left' });
  const mediaFigure = createElement('figure', { class: 'image is-48x48' });
  const mediaImage = createElement('img', {
    class: 'round',
    src: project.image,
    alt: project.name
  });
  const mediaContent = createElement('div', { class: 'media-content' });

  mediaContent.innerHTML = `
    <p class='title is-4'>${project.name}</p>
    <p class='subtitle is-6'>
      Language: ${project.language}
      <br />
      Role: ${project.role}
    </p>
  `;

  mediaFigure.appendChild(mediaImage);
  mediaLeft.appendChild(mediaFigure);
  media.appendChild(mediaLeft);
  media.appendChild(mediaContent);

  const cardContent = createElement('div', { class: 'content' });
  cardContent.innerHTML = `${project.description}<br /><br />`;

  for (const link of project.links) {
    cardContent.innerHTML += `<a class='hoverable' href='${link.url}'><i class='${link.icon[0]} fa-${link.icon[1]}'></i></a>`;
  }

  content.appendChild(media);
  content.appendChild(cardContent);
  card.appendChild(content);

  return card;
}

const parentElement = document.getElementById('projects');
if (parentElement === null) {
  console.log('Unable to find parent element "#projects"');
} else {
  for (const project of projects) {
    const id = project
      .name
      .toLowerCase()
      .replace(/\s/g, '-');

    const otherParent = createElement('div', {
      class: 'column is-3',
      id: `project-${id}`
    });
  
    const card = createCard(project);

    otherParent.appendChild(card);
    parentElement.appendChild(otherParent);
  }
}

/**
 * @typedef {object} Project
 * @prop {string} description The description of the project
 * @prop {string} language The language the project uses
 * @prop {string} image The project's image
 * @prop {ProjectLink[]} links A list of links to provide
 * @prop {string} name The project's name
 * @prop {string} role The role I partake in
 * 
 * @typedef {object} ProjectLink
 * @prop {['fab' | 'fas', string]} icon The icon to display from Font Awesome
 * @prop {string} url The URL to redirect to
 */