import React from "react";

export const userId = () => {
    const user_id = localStorage.getItem('user_id');
    return user_id
}