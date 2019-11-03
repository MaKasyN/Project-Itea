import axios from 'axios';

//TODO: this setting should be loaded from environment variable or any other dynamic source
const VUE_APP_API_ENDPOINT = process.env.VUE_APP_API_ENDPOINT;

axios.defaults.baseURL = VUE_APP_API_ENDPOINT;

const apiServise = {
    async getCategoryList () {
        console.log(`main endpoint url is: ${VUE_APP_API_ENDPOINT}`);
        const categoryList = await axios.get(`${VUE_APP_API_ENDPOINT}/api/categories`);
        return categoryList.data;
    },
    async getCurrentCategories (id) {
        const currentCategories = await axios.get(`${VUE_APP_API_ENDPOINT}/api/categories/${id}`);
        return currentCategories.data;
    }
};

export default apiServise