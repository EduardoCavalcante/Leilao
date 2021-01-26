class AuctionController {

    constructor(_service, _view) {
        this.service = _service;
        this.view = _view;

        const auctions = JSON.parse(localStorage.getItem('auctions')) || [];

        auctions.push({
            Name: 'HB20',
            InitialValue: Math.floor(Math.random() * (10.00 - 1.00 + 1.00)) + 1.00,
            IsUsed: Boolean((Math.random() >= 0.5) ? 1 : 0),
            User: 'Chico'
        });

        localStorage.setItem('auctions', JSON.stringify(auctions));

    }

    async init() {
        const listAuctions = await this.service.getAll() || [];
        this.view.render(listAuctions);
    }

    handleFormSearch(param) {
        this.service.GetByParam(param);
    }
}