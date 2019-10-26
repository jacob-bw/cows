import axios from 'axios';

const getCows = () => axios.get('https://teamtreehouse.com/jacobbestwittenberg.json');

export default { getCows };
