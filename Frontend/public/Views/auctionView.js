class AuctionView {

    constructor() {
        this.app = document.querySelector('#app');
    }

    render(auctions) {
        this.tableAuction = this.loadTableAuctions(auctions);
        this.app.append(this.tableAuction);
    }

    loadTableAuctions(auctions) {

        auctions = JSON.parse(auctions);

        const content = document.createElement('div');
        content.classList.add('table-responsive');

        const thead = document.createElement('thead');

        const table = document.createElement('table');
        table.classList.add('table');

        const trHead = document.createElement('tr');

        const thName = document.createElement('th');
        thName.setAttribute('scope', 'col');
        thName.textContent = 'Item';

        const thInitialValue = document.createElement('th');
        thInitialValue.setAttribute('scope', 'col');
        thInitialValue.textContent = 'Valor inicial';

        const thIsUsed = document.createElement('th');
        thIsUsed.setAttribute('scope', 'col');
        thIsUsed.textContent = 'Item usado';

        const thUserResponsable = document.createElement('th');
        thUserResponsable.setAttribute('scope', 'col');
        thUserResponsable.textContent = 'Usuário responsável';

        const tbody = document.createElement('tbody');

        content.append(table);
        table.append(thead)
        thead.append(trHead);
        trHead.append(thName);
        trHead.append(thInitialValue);
        trHead.append(thIsUsed);
        trHead.append(thUserResponsable);
        table.append(tbody)


        auctions.forEach(auction => {
            const trBody = document.createElement('tr');

            let thName = document.createElement('th');
            thName.setAttribute('scope', 'row');
            thName.textContent = auction.Name;

            let thInitialValue = document.createElement('th');
            thInitialValue.setAttribute('scope', 'row');
            thInitialValue.textContent = auction.InitialValue;

            let thIsUsed = document.createElement('th');
            thIsUsed.setAttribute('scope', 'row');
            thIsUsed.textContent = auction.IsUsed ? 'sim' : 'não';

            let thUserResponsable = document.createElement('th');
            thUserResponsable.setAttribute('scope', 'row');
            thUserResponsable.textContent = auction.User;

            tbody.append(trBody);
            trBody.append(thName);
            trBody.append(thInitialValue);
            trBody.append(thIsUsed);
            trBody.append(thUserResponsable);
        });

        return content;
    }

}