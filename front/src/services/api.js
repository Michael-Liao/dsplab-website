import axios from 'axios';

// export default () => axios.create({
//   baseURL: 'http://localhost:8081/',
// });

const backend = axios.create({
  baseURL: 'http://localhost:3000/',
});

export { backend as default };
// export { backend };
