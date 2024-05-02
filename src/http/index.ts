import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

const headers: CreateAxiosDefaults = {
  baseURL: 'https://api.openbrewerydb.org/v1/breweries'
}

const client: AxiosInstance = axios.create(headers);

export default client;