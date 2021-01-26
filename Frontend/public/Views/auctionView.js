class AuctionView {

    constructor() {
        this.app = document.querySelector('#app');
    }

    render(auctions) {

        const utility = new Utility();

        this.tableAuction = this.loadTableAuctions(auctions);
        this.formSearchAuction = this.createFormSearch();
        this.modalAuction = this.createModal();

        const content = utility.createElement('div', '', ['content']);

        this.app.append(content);
        content.append(this.formSearchAuction, this.tableAuction, this.modalAuction);

    }

    bindFormSearch(handleFormSearch) {
        formSearch.addEventListener('submit', (event) => {
            event.preventDefault();
            handleFormSearch(new FormData(event.target));
        });
    }

    bindEditAuction(auctionId) {
        this.openModal('update', auctionId);
    }

    bindRemoveAuction(aucionId) {
        this.openModal('delete', aucionId)
    }

    bindTypeSearch(event) {
        let inputSearch = document.querySelector('#inputSearch');
        switch (event.target.value) {
            case 'InitialValue': {
                console.log('addMaskValue', inputSearch);
                inputSearch.value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
                break;
            }
            case 'Name': {
                console.log('addMaskName', inputSearch);
                break;
            }
            case 'User': {
                console.log('addMaskUser', inputSearch);
                break;
            }
        }
    }

    openModal(type = 'create', auctionId) {

        const utility = new Utility();

        const header = utility.createElement('div', '', ['modal-header']);
        const btnCloseModal = utility.createElement('button', null, ['btn-close'], [{ Name: 'type', Value: 'button' }, { Name: 'data-bs-dismiss', value: 'modal' }, { Name: 'aria-label', Value: 'Close' }]);
        const body = utility.createElement('div');
        const footer = utility.createElement('div');

        switch (type) {
            case 'create': {
                const title = utility.createElement('h5', null, ['modal-title'], null, 'Cadastrar produto a ser leiloado');
                header.append(title, btnCloseModal);

                const contentBtnSave = utility.createElement('div', 'contentBtnSave');
                const btnSave = utility.createElement('input', btnSave, [], [{ Name: 'type', Value: 'button' }, { Name: 'Value', Value: 'Salvar' }]);
                contentBtnSave.append(btnSave);

                const contentBtnCancel = utility.createElement('div', 'contentBtnCancel');
                const btnCancel = utility.createElement('input', btnCancel, [], [{ Name: 'type', Value: 'button' }, { Name: 'Value', Value: 'Cancelar' }]);
                contentBtnCancel.app(btnCancel);

                body.append(this.createFormAuction(auctionId));

                footer.append(contentBtnSave, contentBtnCancel);
                break;
            }
            case 'update': {
                const title = utility.createElement('h5', null, ['modal-title'], null, 'Editar produto a ser leiloado');
                header.append(title, btnCloseModal);

                const contentBtnSave = utility.createElement('div', 'contentBtnSave');
                const btnSave = utility.createElement('input', btnSave, [], [{ Name: 'type', Value: 'button' }, { Name: 'Value', Value: 'Salvar' }]);
                contentBtnSave.append(btnSave);

                const contentBtnCancel = utility.createElement('div', 'contentBtnCancel');
                const btnCancel = utility.createElement('input', btnCancel, [], [{ Name: 'type', Value: 'button' }, { Name: 'Value', Value: 'Cancelar' }]);
                contentBtnCancel.app(btnCancel);

                body.append(this.createFormAuction(auctionId));
                footer.append(contentBtnSave, contentBtnCancel);
                break;
            }
            case 'delete': {
                const title = utility.createElement('h5', null, ['modal-title'], null, 'Remover produto a ser leiloado');
                header.append(title, btnCloseModal);
                const contentDelete = utility.createElement('span', null, [], [], `Você deseja excluir o item ${auctionId}`);

                const contentBtnConfirm = utility.createElement('div', 'contentBtnConfirmar');
                const btnConfirm = utility.createElement('input', btnConfirm, [], [{ Name: 'type', Value: 'button' }, { Name: 'Value', Value: 'Salvar' }]);
                contentBtnConfirm.append(btnConfirm);

                const contentBtnCancel = utility.createElement('div', 'contentBtnCancel');
                const btnCancel = utility.createElement('input', btnCancel, [], [{ Name: 'type', Value: 'button' }, { Name: 'Value', Value: 'Cancelar' }]);
                contentBtnCancel.app(btnCancel);

                contentDelete.append(contentBtnConfirm, contentBtnCancel);

                body.append(contentDelete);
                footer.append(contentBtnConfirm, contentBtnCancel);

                break;
            }
        }

        if (this.modalAuction.firstElementChild)
            this.modalAuction.removeChild(this.modalAuction.firstElementChild);

        this.modalAuction.append(utility.openModal(header, body, footer));
        const modal = new bootstrap.Modal(this.modalAuction, { keyboard: true })
        modal.show();

    }

    createModal() {
        const utility = new Utility();
        return utility.createElement('div', 'modalAuction', ['modal', 'fade'], [{ Name: 'tabindex', Value: '-1' }, { Name: 'aria-labelledby', Value: 'modalAuction' }, { Name: 'aria-hidden', Value: 'true' }]);

    }

    createFormAuction(auctionId) {

        const utility = new Utility();
        const auction = {};//this.getAuctionById(auctionId);

        const formAuction = utility.createElement('form', null, [], [{ Name: 'method', value: 'post' }]);

        const contentName = utility.createElement('div', "contentName", ['row', 'mb-3']);
        const labelName = utility.createElement('label', "labelName", ['col-md-3', 'col-form-label'], [{ Name: 'for', Value: 'name' }], 'Item');
        const contentInputName = utility.createElement('div', '', ['col-md-9']);
        const inputName = utility.createElement('input', 'name', ['form-control'], [{ Name: 'data-valid', Value: 'required' }, { Name: 'type', Value: 'text' }, { Name: 'Name', Value: 'name' }, , { Name: 'Value', Value: auction.Name }, { Name: 'maxlength', Value: '60' }]);

        const contentInitialValue = utility.createElement('div', "contentInitialValue", ['row', 'mb-3']);
        const labelInitialValue = utility.createElement('label', "labelInitialValue", ['col-md-3', 'col-form-label'], [{ Name: 'for', Value: 'name' }], 'Valor Inicial');
        const contentInputInitialValue = utility.createElement('div', '', ['col-md-9']);
        const inputInitialValue = utility.createElement('input', 'name', ['form-control'], [{ Name: 'data-valid', Value: 'required' }, { Name: 'type', Value: 'text' }, { Name: 'Name', Value: 'InitialValue' }, , { Name: 'Value', Value: auction.InitialValue }, { Name: 'maxlength', Value: '14' }]);

        const contentIsUsed = utility.createElement('div', "contentIsUsed", ['row', 'mb-3']);
        const labelIsUsed = utility.createElement('label', "labelIsUsed", ['col-md-3', 'col-form-label'], [{ Name: 'for', Value: 'name' }], 'Usado');
        const contentInputIsUsed = utility.createElement('div', '', ['col-md-9']);
        const inputIsUsed = utility.createElement('input', 'checkbox', ['form-control'], [{ Name: 'Value', Value: auction.IsUsed }]);

        const contentUserResponsable = utility.createElement('div', "contentUserResponsable", ['row', 'mb-3']);
        const labelUserResponsable = utility.createElement('label', "labelUserResponsable", ['col-md-3', 'col-form-label'], [{ Name: 'for', Value: 'name' }], 'Usuário responsável');
        const contentInputUserResponsable = utility.createElement('div', '', ['col-md-9']);
        const inputUserResponsable = utility.createElement('input', 'name', ['form-control'], [{ Name: 'data-valid', Value: 'required' }, { Name: 'type', Value: 'text' }, { Name: 'Name', Value: 'UserResponsable' }, , { Name: 'Value', Value: auction.UserResponsable }, { Name: 'maxlength', Value: '60' }]);


        formAuction.append(contentName, contentInitialValue, contentIsUsed);

        contentName.append(labelName, contentInputName);
        contentInputName.append(inputName);

        contentInitialValue.append(labelInitialValue, contentInputInitialValue);
        contentInputName.append(inputInitialValue);

        contentIsUsed.append(labelIsUsed, contentInputIsUsed);
        contentInputName.append(inputIsUsed);

        contentUserResponsable.append(labelUserResponsable, contentInputUserResponsable);
        contentInputName.append(inputUserResponsable);

        return formAuction;


    }

    createFormSearch() {

        const utility = new Utility();

        const formSearch = utility.createElement('form', 'formSearchAuction', [], { Name: 'method', Value: 'post' });

        const contentSearch = utility.createElement('div', '', ['col-md-8', 'row']);
        const contentCombobox = utility.createElement('div', '', ['col-md-4']);
        const comboboxOptions = utility.createElement('select', '', ['col-md-3', 'form-select']);

        const contentInputSerach = utility.createElement('div', '', ['col-md-6']);
        const inputSearch = utility.createElement('input', 'inputSearch', ['form-control'], [{ Name: 'Name', Value: 'Name' }]);

        const optionByDes = utility.createElement('option', null, null, [{ Name: 'Value', Value: 'Name' }], 'Descrição');
        const optionByInitialValue = utility.createElement('option', null, null, [{ Name: 'Value', Value: 'InitialValue' }], 'Valor inicial');
        const optionByResponsable = utility.createElement('option', null, null, [{ Name: 'Value', Value: 'User' }], 'Usuário responsável');

        const contentBtnSearch = utility.createElement('div', '', ['col-md-2']);
        const btnSeach = utility.createElement('input', 'btnSeach', ['form-control'], [{ Name: 'type', Value: 'submit' }, { Name: 'value', Value: 'Pesquisar' }]);

        contentBtnSearch.append(btnSeach);

        formSearch.append(contentSearch);
        contentSearch.append(contentCombobox, contentInputSerach, contentBtnSearch);
        contentCombobox.append(comboboxOptions);
        contentInputSerach.append(inputSearch);
        comboboxOptions.append(optionByDes, optionByInitialValue, optionByResponsable);

        comboboxOptions.addEventListener('change', this.bindTypeSearch);

        return formSearch;
    }



    loadTableAuctions(auctions) {

        auctions = JSON.parse(auctions);
        const utility = new Utility();

        const contentTable = utility.createElement('div', '', ['table-responsive']);
        const table = utility.createElement('table', '', ['table']);
        const thead = utility.createElement('thead');
        const trHead = utility.createElement('tr');
        const thName = utility.createElement('th', null, null, [{ Name: 'scope', value: 'col' }], 'Descrição');
        const thInitialValue = utility.createElement('th', null, null, [{ Name: 'scope', value: 'col' }], 'Valor inicial');
        const thIsUsed = utility.createElement('th', null, null, [{ Name: 'scope', value: 'col' }], 'Item usado');
        const thUserResponsable = utility.createElement('th', null, null, [{ Name: 'scope', value: 'col' }], 'Usuário responsável');
        const thActions = utility.createElement('th', null, null, [{ Name: 'scope', value: 'col' }], 'Ações');
        const tbody = utility.createElement('tbody');

        contentTable.append(table);
        table.append(thead)
        thead.append(trHead);
        trHead.append(thName, thInitialValue, thIsUsed, thUserResponsable, thActions);
        table.append(tbody)

        auctions.forEach(auction => {
            const trBody = utility.createElement('tr');

            let thName = utility.createElement('th', null, null, [{ Name: 'scope', value: 'row' }], auction.Name);
            let thInitialValue = utility.createElement('th', null, null, [{ Name: 'scope', value: 'row' }], auction.InitialValue);
            let thIsUsed = utility.createElement('th', null, null, [{ Name: 'scope', value: 'row' }], auction.IsUsed ? 'Sim' : 'Não');
            let thUserResponsable = utility.createElement('th', null, null, [{ Name: 'scope', value: 'row' }], auction.User);
            let btnEditAuction = utility.createElement('span', 'editAuction', ['me-3'], [{ Name: 'data-id', value: auction.Id }], 'Editar');
            let btnRemoveAuction = utility.createElement('span', 'removeAuction', [], [{ Name: 'data-id', value: auction.Id }], 'Excluir');
            let thActions = utility.createElement('th', null, [], [{ Name: 'scope', value: 'row' }]);
            thActions.append(btnEditAuction, btnRemoveAuction);

            btnRemoveAuction.addEventListener('click', (event) => this.bindRemoveAuction(event.target.dataset.Id));
            btnEditAuction.addEventListener('click', (event) => this.bindEditAuction(event.target.dataset.Id));

            tbody.append(trBody);
            trBody.append(thName, thInitialValue, thIsUsed, thUserResponsable, thActions);

        });

        return contentTable;
    }

}