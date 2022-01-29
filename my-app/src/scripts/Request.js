function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');

export default class Request {
    options;
    constructor() {
        this.options = {
            credentials: 'same-origin',
            method: "GET",
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: null
        }
    }
    async get(url) {
        this.options.method = "GET";
        let response = await this.handleResponse(url)
        return response

    }
    async post(url, data) {
        this.options.method = "POST";
        this.options.body = data;
        let response = await this.handleResponse(url)
        return response

    }
    async put(url, data) {
        this.options.method = "PUT";
        this.options.body = data;
        let response = await fetch(url, this.options)
        this.handleResponse(response)

    }
    async delete(url) {
        this.options.method = "DELETE";
        let response = await fetch(url, this.options)
        this.handleResponse(response)

    }
    async handleResponse(url) {
        try {
            let response = await fetch(url, this.options)
            if (response.ok) {
                let responseAsJson = await response.json()
                return responseAsJson
            }
        }
        catch (error) {
            return await error
        }
    }
}
