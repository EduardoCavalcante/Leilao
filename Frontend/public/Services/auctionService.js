class AuctionService {
    async getAll(formData = new FormData()) {
        //return await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET', body: formData });
        return localStorage.getItem('auctions');
    }

    async GetByParam(formData = new FormData()) {
        return await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST', body: formData });
    }

    async create(formData = new FormData()) {
        //return await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST', body: formData });
    }

    async update(formData = new FormData()) {
        return await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'PUT', body: formData });
    }

    async delete(userId = null) {
        return await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'DEL', body: formData });
    }
}