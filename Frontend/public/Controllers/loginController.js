class LoginController {

    constructor(_service, _view) {
        this.service = _service;
        this.view = _view;
    }

    handleLogin = (formData = new FormData()) => {
        var result = this.service.authentication(formData)
        result.then(function (response) {
            return response.json();

        });
    };

    init() {
        this.view.render();
        this.view.bindLogin(this.handleLogin);
    }
}