import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

const MainLayauts:FC= () => {
    return (
        <div>
           <Outlet/>

        </div>
    );
};

export {MainLayauts};