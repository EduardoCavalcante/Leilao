class LoginController {

    constructor(_service, _view) {
        this.service = _service;
        this.view = _view;
    }

    handleLogin = async (event) => {
        var data = await this.service.authentication(event.target)
        data.then((data) => {
            console.log(data);
        });
    };

    init() {
        this.view.render();
        this.view.bindLogin(this.handleLogin);
    }
}