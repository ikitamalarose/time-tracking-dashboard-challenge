import { getColorClass } from './utils.js';

// Mapping for view terms
const viewTerms = {
    daily: 'Day',
    weekly: 'Week',
    monthly: 'Month'
};


export function createCard(item, view) {
    const colorClass = getColorClass(item.title);

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card__container', colorClass);

    const cardBackground = document.createElement('div');
    cardBackground.classList.add('card__background');

    const imgBackground = document.createElement('img');
    imgBackground.src = `/images/icon-${item.title.toLowerCase().replace(" ", "-")}.svg`;
    imgBackground.alt = `${item.title} icon`;
    imgBackground.classList.add('background-image');
    cardBackground.appendChild(imgBackground);

    const card = document.createElement('div');
    card.classList.add('card');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card__header');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = item.title;
    cardHeader.appendChild(title);

    const buttonDetails = document.createElement('button');
    buttonDetails.classList.add('button-details');
    const imgEllipsis = document.createElement('img');
    imgEllipsis.src = '/images/icon-ellipsis.svg';
    imgEllipsis.alt = 'ellipsis icon';
    buttonDetails.appendChild(imgEllipsis);
    cardHeader.appendChild(buttonDetails);

    card.appendChild(cardHeader);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card__content');

    const totalHours = document.createElement('p');
    totalHours.classList.add('total-hours');
    totalHours.textContent = `${item.timeframes[view].current}hrs`;
    cardContent.appendChild(totalHours);

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card__footer');

    const footerLabel = document.createElement('span');
    footerLabel.classList.add('footer-label');
    footerLabel.textContent = `Last ${viewTerms[view]} - `;
    cardFooter.appendChild(footerLabel);

    const footerHours = document.createElement('span');
    footerHours.classList.add('footer-hours');
    footerHours.textContent = `${item.timeframes[view].previous}hrs`;
    cardFooter.appendChild(footerHours);

    cardContent.appendChild(cardFooter);
    card.appendChild(cardContent);

    cardContainer.appendChild(cardBackground);
    cardContainer.appendChild(card);

    return cardContainer;
}
