class LoginView {

    constructor() {
        this.app = document.querySelector('#app');
    }

    bindLogin(handleLogin) {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            try {
                this.validate();
                handleLogin(new FormData(event.target));
            }
            catch (exception) {
                if (Array.isArray(exception)) {
                    const errors = exception;
                    errors.forEach(error => {
                        this.createErrorMessage(error.field, error.message);
                    });
                } else {
                    console.info(exception);
                }
            }
        });
    }

    render() {

        const utility = new Utility();
        this.contentForm = utility.createElement('div', "content", ['col-md-12', 'col-md-offset-3']);
        this.form = utility.createElement('form', 'formLogin', ['col-md-4', 'form-signin', 'container'], [{ Name: 'method', Value: 'post' }]);
        this.contentUser = utility.createElement('div', "contentUser", ['row', 'mb-3']);
        this.labelUser = utility.createElement('label', "labelUser", ['col-md-3', 'col-form-label'], [{ Name: 'for', Value: 'username' }], 'Usuário');
        this.contentInputUser = utility.createElement('div', '', ['col-md-9']);
        this.InputUser = utility.createElement('input', 'username', ['form-control'], [{ Name: 'data-valid', Value: 'required' }, { Name: 'type', Value: 'text' }, { Name: 'Name', Value: 'login' }, { Name: 'maxlength', Value: '10' }]);
        this.contentPass = utility.createElement('div', "contentPass", ['row', 'mb-3']);
        this.labelPass = utility.createElement('label', "labelPass", ['col-md-3', 'col-form-label'], [{ Name: 'for', Value: 'password' }], 'Senha');
        this.contentInputPass = utility.createElement('div', '', ['col-md-9']);
        this.InputPass = utility.createElement('input', 'password', ['form-control'], [{ Name: 'data-valid', Value: 'required' }, { Name: 'type', Value: 'password' }, { Name: 'Name', Value: 'password' }, { Name: 'maxlength', Value: '15' }]);
        this.buttonSubmit = utility.createElement('button', 'btnLogin', ['btn', 'btn-lg', 'btn-primary', 'btn-block'], [{ Name: 'type', Value: 'submit' }], 'Entrar');

        this.app.append(this.contentForm);
        this.contentForm.append(this.form);
        this.form.append(this.contentUser, this.contentPass, this.buttonSubmit);
        this.contentUser.append(this.labelUser, this.contentInputUser);
        this.contentInputUser.append(this.InputUser);
        this.contentPass.append(this.labelPass, this.contentInputPass);
        this.contentInputPass.append(this.InputPass);
    }

    validate() {
        let messages = [];
        this.form.querySelectorAll('input').forEach((field) => {
            this.clearMessage(field);
            const inputRules = field.dataset.valid.split(' ');
            const label = field.parentElement.parentElement.firstChild;
            inputRules.forEach(role => {
                if (role.toLocaleLowerCase() === 'required') {
                    if (field.value.match(/[a-z|A-Z]|\d/) === null) {
                        field.classList.add('is-invalid');
                        messages.push({ field, message: `Campo ${label.textContent} obrigatório, verifique.` });
                    }
                }
            });
        });

        if (messages.length > 0)
            throw (messages);
    }

    createErrorMessage(field, message) {
        var divErrorMessage = document.createElement('div');
        divErrorMessage.classList.add('invalid-feedback');
        divErrorMessage.textContent = message;
        if (field.parentElement.querySelector('.invalid-feedback') == null)
            field.parentElement.append(divErrorMessage);
    }

    clearMessage(field) {
        field.classList.remove('is-invalid');
    }
}