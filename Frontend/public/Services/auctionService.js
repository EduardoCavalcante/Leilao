class AuctionService {
    async getAll(formData = new FormData()) {
        //return await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST', body: formData });
        return localStorage.getItem('auctions');
    }

    async GetByParams(formData = new FormData()) {
        return await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST', body: formData });
    }

    async create(formData = new FormData()) {
        //return await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST', body: formData });
    }

    async update(formData = new FormData()) {
        return await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST', body: formData });
    }

    async delete(formData = new FormData()) {
        return await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST', body: formData });
    }
}