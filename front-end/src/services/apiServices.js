import axios from 'axios';

const VUE_APP_API_ENDPOINT = process.env.VUE_APP_API_ENDPOINT || "http://localhost:5000";

axios.defaults.baseURL = VUE_APP_API_ENDPOINT;

const apiService = {
    async getCategories() {
        console.log(`main endpoint url is: ${VUE_APP_API_ENDPOINT}`);
        const response = await axios.get(`${VUE_APP_API_ENDPOINT}/api/categories`);
        return response.data;
    },
    async getProducts(categoryId) {
        const response = await axios.get(`${VUE_APP_API_ENDPOINT}/api/categories/${categoryId}`);
        return response.data;
    }
};

export default apiService;
