import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces/cars.interface";
import {carsServices} from "../../services";

interface IState {
    cars: ICar[]
}

const initialState: IState = {
    cars: []
}

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async () => {
        const {data} = await carsServices.getAll()
        return data
    })
const create = createAsyncThunk<ICar, ICar>(
    'carSlice/create',
    async (car) => {
        const {data} = await carsServices.create(car);
        return data
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, actions) => {
                state.cars = actions.payload
            })
            .addCase(create.fulfilled, (state, actions) => {
                state.cars.push(actions.payload)
            })
});

const {reducer: carReducer} = carSlice;

const carActions = {
    getAll,
    create
}

export {
    carActions,
    carReducer,
}


