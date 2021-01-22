class LoginView {

    constructor() {
        this.app = document.querySelector('#app');
    }

    bindLogin(handleLogin) {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            try {
                this.validate();
                console.log('submit');
                handleLogin(event);
            }
            catch (exception) {
                if (Array.isArray(exception)) {
                    const errors = exception;
                    errors.forEach(error => {
                        this.createErrorMessage(error.field, error.message);
                    });
                }
            }

        });
    }

    render() {
        this.contentForm = document.createElement('div');
        this.contentForm.classList.add('col-md-6', 'col-md-offset-3');

        this.form = document.createElement('form');
        this.form.id = 'formLogin';
        this.form.classList.add('form-signin');
        this.form.method = 'post';

        this.contentUser = document.createElement('div');
        this.contentUser.classList.add('row', 'mb-3');

        this.labelUser = document.createElement('label');
        this.labelUser.for = 'username';
        this.labelUser.classList.add('col-md-3', 'col-form-label');
        this.labelUser.textContent = 'Usuário';

        this.contentInputUser = document.createElement('div');
        this.contentInputUser.classList.add('col-md-9');

        this.InputUser = document.createElement('input');
        this.InputUser.type = 'text'
        this.InputUser.id = 'username'
        this.InputUser.setAttribute('data-valid', 'required');
        this.InputUser.classList.add('form-control');

        this.contentInputUser.append(this.InputUser);

        this.contentUser.append(this.labelUser, this.contentInputUser);

        this.contentPass = document.createElement('div');
        this.contentPass.classList.add('row', 'mb-3');

        this.labelPass = document.createElement('label');
        this.labelPass.for = 'password';
        this.labelPass.classList.add('col-md-3', 'col-form-label');
        this.labelPass.textContent = 'Senha';

        this.contentInputPass = document.createElement('div');
        this.contentInputPass.classList.add('col-md-9');

        this.InputPass = document.createElement('input');
        this.InputPass.type = 'password'
        this.InputPass.id = 'password'
        this.InputPass.setAttribute('data-valid', 'required');
        this.InputPass.classList.add('form-control');

        this.contentInputPass.append(this.InputPass);

        this.contentPass.append(this.labelPass, this.contentInputPass);

        this.buttonSubmit = document.createElement('button');
        this.buttonSubmit.classList.add('btn', 'btn-lg', 'btn-primary', 'btn-block');
        this.buttonSubmit.type = 'submit';
        this.buttonSubmit.textContent = 'Entrar';

        this.form.append(this.contentUser, this.contentPass, this.buttonSubmit);
        this.contentForm.append(this.form);
        this.app.append(this.contentForm);
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