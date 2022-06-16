import {axiosServices, Res} from "./axios.services";
import {ICar} from "../interfaces/cars.interface";
import {urls} from "../constants";

export const carsServices = {
    getAll:():Res<ICar[]>=>axiosServices(urls.cars),
    getById:(id:string):Res<void>=>axiosServices(`${urls.cars}/${id}`),
    deleteById:(id:string):Res<ICar[]>=>axiosServices.delete(`${urls.cars}/${id}`),
    create:(car:ICar):Res<ICar> => axiosServices.post(urls.cars,car),
    update:(id:string,car:ICar):Res<ICar[]> => axiosServices.put(`${urls.cars}/${id},car`)
}