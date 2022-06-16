import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hook";
import {carsServices} from "../../services";
import {carActions} from "../../redax/slices/cars.slice";
import {Car} from "../car/car";

const Cars:FC = () => {
    const {cars} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(carActions.getAll())
    },[dispatch])
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
