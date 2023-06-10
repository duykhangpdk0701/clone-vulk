import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IMenuState {
    isOpen: boolean;
    value: number;
}

const initialState: IMenuState = {
    value: 0,
    isOpen: false,
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setValueAction: (state, actions: PayloadAction<number>) => {
            state.value = actions.payload;
        },

        setOpenAction: (state) => {
            state.isOpen = true;
        },
        setCloseAction: (state) => {
            state.isOpen = false;
        },
    },
});

export const { setOpenAction, setCloseAction, setValueAction } =
    menuSlice.actions;

export default menuSlice.reducer;
