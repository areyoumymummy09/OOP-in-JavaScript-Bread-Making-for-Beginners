export function renderTutorialLink() {
    const section = document.createElement('section');
    section.classList.add('get-started');
    
    const link = document.createElement('a');
    link.href = "#";
    link.classList.add('tutorial-link');
    link.innerHTML = `Get the tutorial <span class="arrow">→</span>`;
    
    section.appendChild(link);
    
    const breadDetails = document.querySelector('.bread-details');
    if (breadDetails) {
        breadDetails.appendChild(section);
    }
}

export function renderTipCard(className, imgSrc, textContent) {
    const card = document.createElement('div');
    card.classList.add('tip-card', className);

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Tip Image';

    const text = document.createElement('p');
    text.innerHTML = textContent;

    card.appendChild(img);
    card.appendChild(text);

    const breadTips = document.querySelector('.bread-tips');
    if (breadTips) {
        breadTips.appendChild(card);
    }
}
