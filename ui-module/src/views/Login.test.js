import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

it("Login view render correctly", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Login></Login>, div);
})
 