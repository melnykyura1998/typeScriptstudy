import axios, {AxiosResponse} from "axios";
import baseURL from "../constants/urls";

export const axiosServices = axios.create({baseURL})

export type Res<T> = Promise<AxiosResponse<T>>