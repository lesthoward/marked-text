const highlightInput = document.querySelector('.highlight__input');
const highlight__button = document.querySelector('.highlight__button');
const highlightParagraph = document.querySelector('.highlight__paragraph');
const highlightFom = document.querySelector('.highlight__search');

highlightFom.addEventListener('click', (e) => e.preventDefault())

highlight__button.addEventListener('click', () => searchMatchingWords())

const searchMatchingWords = () => {
    // El texto utilizado para buscar
    const textToSeach = highlightInput.value
    // No defino ni value, ni textContent para reutilizar en las dos partes
    const textForSearch = highlightParagraph

    // "replace", encuentra todas las coincidecias de la palabra por medio de una expresión regular
    const pattern = new RegExp(`${textToSeach}`, "gi")
    
    // Defino el texto localizado para remplazar luego con el innerHTML, hay que actualizar pues, no estamos en React que lo hace por sí solo
    const located = textForSearch.textContent.replace(pattern, matched => `<mark>${matched}</mark>`)
    textForSearch.innerHTML = located
}