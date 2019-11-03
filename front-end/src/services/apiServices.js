import axios from 'axios';

const VUE_APP_API_ENDPOINT = process.env.VUE_APP_API_ENDPOINT || "http://localhost:5000";

axios.defaults.baseURL = VUE_APP_API_ENDPOINT;

const apiService = {
    async getCategoryList() {
        console.log(`main endpoint url is: ${VUE_APP_API_ENDPOINT}`);
        const categoryList = await axios.get(`${VUE_APP_API_ENDPOINT}/api/categories`);
        return categoryList.data;
    },
    async getCurrentCategories(id) {
        const currentCategories = await axios.get(`${VUE_APP_API_ENDPOINT}/api/categories/${id}`);
        return currentCategories.data;
    }
};

export default apiService;
