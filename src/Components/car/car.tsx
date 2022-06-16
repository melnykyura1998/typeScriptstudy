import React, {FC} from 'react';
import {ICar} from "../../interfaces/cars.interface";

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car: {model, id, year, price}}) => {
    return (
        <div>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <hr/>
        </div>
    );
};

export {Car};