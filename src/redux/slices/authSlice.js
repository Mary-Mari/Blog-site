import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null, // Изначально нет авторизованного пользователя
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.currentUser = action.payload; // Устанавливаем текущего пользователя
        },
        logout(state) {
            state.currentUser = null; // Сбрасываем пользователя при выходе
        },
    },
});

// Экспортируем действия для использования в компонентах
export const { login, logout } = authSlice.actions;

// Экспортируем редьюсер для использования в store
export default authSlice.reducer;