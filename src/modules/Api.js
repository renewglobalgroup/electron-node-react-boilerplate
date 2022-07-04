import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}`;

export const Api = axios.create({ baseURL: apiUrl });