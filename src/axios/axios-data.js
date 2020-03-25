import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://voda-react-assessment.herokuapp.com/'
});

export default instance;