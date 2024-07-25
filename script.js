// Daltonismo
document.getElementById('color-filter').addEventListener('change', function() {
    const filterClass = this.value;
    const elementsToFilter = document.querySelectorAll('.filter-image, body, header, header *, footer, footer *');
    elementsToFilter.forEach(el => {
        el.className = el.className.replace(/\b(filter-image|achromatomaly|deuteranomaly|tritanomaly|Acromatomia|Deuteranopia|Protanopia)\b/g, '').trim();
        if (filterClass !== 'default') {
            el.classList.add(filterClass);
        }
    });
});

// Alteração do fundo
const blackAndWhiteBtn = document.getElementById('blackAndWhite');
const highContrastBtn = document.getElementById('highContrast');
const blueContrastBtn = document.getElementById('blueContrast');
const greenContrastBtn = document.getElementById('greenContrast');
const yellowContrastBtn = document.getElementById('yellowContrast');

const updateContrast = (contrastClass) => {
    const elementsToFilter = document.querySelectorAll('.filter-image, body, header, header *, footer, footer *');
    elementsToFilter.forEach(el => {
        el.className = el.className.replace(/\b(black-and-white|high-contrast|blue-contrast|green-contrast|yellow-contrast)\b/g, '').trim();
        el.classList.add(contrastClass);
    });
};

blackAndWhiteBtn.addEventListener('click', () => updateContrast('black-and-white'));
highContrastBtn.addEventListener('click', () => updateContrast('high-contrast'));
blueContrastBtn.addEventListener('click', () => updateContrast('blue-contrast'));
greenContrastBtn.addEventListener('click', () => updateContrast('green-contrast'));
yellowContrastBtn.addEventListener('click', () => updateContrast('yellow-contrast'));

document.addEventListener('DOMContentLoaded', () => {
    const increaseFontButton = document.getElementById('increaseFont');
    const decreaseFontButton = document.getElementById('decreaseFont');
    
    const textElements = document.querySelectorAll('body, body *'); // Select all elements inside the body
    
    increaseFontButton.addEventListener('click', () => {
        textElements.forEach(el => {
            const currentFontSize = parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size'));
            el.style.fontSize = (currentFontSize + 2) + 'px';
        });
    });
  
    decreaseFontButton.addEventListener('click', () => {
        textElements.forEach(el => {
            const currentFontSize = parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size'));
            if (currentFontSize > 12) {
                el.style.fontSize = (currentFontSize - 2) + 'px';
            }
        });
    });
});
