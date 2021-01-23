class LoginService {
    async authentication(formData = new FormData()) {
        return await fetch(`https://localhost:44316/api/Login/Authorization?${new URLSearchParams(formData).toString()}`,
            {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    }

    async logout(formData = new FormData()) {
        return await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST', body: formData });
    }
}