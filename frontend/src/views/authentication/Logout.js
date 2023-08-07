import React from "react";

export const Logout = () => {
    localStorage.clear('user_id');
    localStorage.clear('token');
}