import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces/cars.interface";
import {useAppDispatch} from "../../hook";
import {carActions} from "../../redax/slices/cars.slice";

const CarForm:FC = () => {
    const {reset,handleSubmit,register} = useForm<ICar>();
    const dispatch = useAppDispatch();
    const submit:SubmitHandler<ICar> = async (car:ICar) => {
       await dispatch(carActions.create(car))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>model:<input type="text" placeholder={'model'} {...register('model')} /></div>
                <div>price:<input type="text"placeholder={'price'}{...register('price')}/></div>
                <div>year:<input type="text"placeholder={'year'}{...register('year')}/></div>
                <button>ok</button>
            </form>

        </div>
    );
};

export {CarForm};