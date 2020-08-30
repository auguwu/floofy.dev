/**
 * Gets a list of sponsors
 * @param {(error: Error, data?: Sponsor[]) => void} callback The callback function
 */
function getSponsors(callback) {
  if (window.fetch) {
    console.log('-> Browser does support window.fetch, opting to use window.fetch');
    window.fetch('https://api.augu.dev/sponsors?login=auguwu&first=10')
      .then((res) => res.json()
        .then((data) => callback(null, data.data))
        .catch(error => callback(error))
      ).catch((error) => callback(error))
  } else {
    console.log('-> Browser doesn\'t support window.fetch, opting to XMLHttpRequest...');

    const request = new XMLHttpRequest();
    request.open('GET', 'https://api.augu.dev/sponsors?login=auguwu&first=10');
    request.send();
  
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const { data } = JSON.parse(this.responseText);
        return callback(null, data);
      }
    };
  }
}

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
 * Creates a Bulma card
 * @param {Sponsor} sponsor The sponsor
 */
function createSponsorCard(sponsor) {
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
    src: sponsor.sponsor.avatar,
    alt: sponsor.sponsor.name
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
    src: sponsor.sponsor.avatar,
    alt: sponsor.sponsor.name
  });
  const mediaContent = createElement('div', { class: 'media-content' });

  mediaContent.innerHTML = `
    <p class='title is-4'><a class='sponsor-title' href='${sponsor.sponsor.profile}'>${sponsor.sponsor.name}</a></p>
    <p class='subtitle is-6'>
      Tier: ${sponsor.tier.name}
    </p>
  `;

  mediaFigure.appendChild(mediaImage);
  mediaLeft.appendChild(mediaFigure);
  media.appendChild(mediaLeft);
  media.appendChild(mediaContent);
  content.appendChild(media);
  card.appendChild(content);

  return card;
}

const parentElement = document.getElementById('sponsors');
if (parentElement === null) {
  console.log('Unable to find parent element "#sponsors"');
} else {
  getSponsors((error, data) => {
    if (error) {
      console.error(`-> Unable to fetch sponsors:\n${error.stack || error.message}`);
      const errorEl = createElement('h2', { class: 'subtitle-c' });
      const brEl = createElement('br');

      errorEl.innerHTML = `
        Unable to fetch sponsors: <br />
        ${error.name}: ${error.message.slice(error.message.indexOf(error.name) + 1)}
      `;

      parentElement.appendChild(errorEl);
      parentElement.appendChild(brEl);
      return;
    }

    for (const sponsor of data) {
      const name = sponsor.sponsor.name.toLowerCase();
      const parent = createElement('div', { class: 'column is-3', id: `sponsor-${name}` });
      const card = createSponsorCard(sponsor);

      parent.appendChild(card);
      parentElement.appendChild(parent);
    }
  });
}

/**
 * @typedef {object} Sponsor
 * @prop {string} createdAt When the sponsor was created at
 * @prop {SponsorEntity} sponsor The sponser itself
 * @prop {SponsorTier} tier The tier they are paying for
 * 
 * @typedef {object} SponsorEntity
 * @prop {string} profile The user's GitHub URL
 * @prop {string} avatar The user's avatar URL
 * @prop {string} name The user's name
 * @prop {string} bio The user's bio
 * 
 * @typedef {object} SponsorTier
 * @prop {number} monthlyPriceInCents The price in cents
 * @prop {string} name The tier name
 */