class Utility {

    createElement(typeElement = 'input', id = "", classes = [], attributes = [], textContent) {
        const newElement = document.createElement(typeElement);
        newElement.id = id;
        newElement.textContent = textContent;
        classes.forEach(item => {
            newElement.classList.add(item);
        })
        attributes.forEach(attribute => {
            newElement.setAttribute(attribute.Name, attribute.Value);
        });

        return newElement;
    }

}