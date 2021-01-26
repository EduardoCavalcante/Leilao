class Utility {

    createElement(typeElement = 'input', id = "", classes = [], attributes = [], textContent) {
        const newElement = document.createElement(typeElement);
        newElement.id = id;
        newElement.textContent = textContent;

        if (Array.isArray(classes)) {
            classes.forEach(item => {
                newElement.classList.add(item);
            })
        }

        if (Array.isArray(attributes)) {
            attributes.forEach(attribute => {
                newElement.setAttribute(attribute.Name, attribute.Value);
            });
        }

        return newElement;
    }

    openModal(header, body, footer) {

        const modalDialog = this.createElement('div', null, ['modal-dialog']);
        const modalContent = this.createElement('div', null, ['modal-content']);
        const modalHeaader = this.createElement('div', null, ['modal-header']);
        const modalBody = this.createElement('div', null, ['modal-body']);
        const modalFooter = this.createElement('div', null, ['modal-footer']);


        modalDialog.append(modalContent);
        modalContent.append(modalHeaader, modalBody, modalFooter);
        modalHeaader.append(header);
        modalBody.append(body);
        modalFooter.append(footer);

        return modalDialog;

    }

}