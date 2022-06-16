import React, {FC} from 'react';
import {CarForm, Cars} from "../Components";

const CarPage:FC = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>

        </div>
    );
};

export {CarPage};