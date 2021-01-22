class LoginService {
    authentication(formData = new FormData()) {
        return fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST', body: formData });
    }

    async logout(formData = new FormData()) {
        return await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST', body: formData });
    }
}