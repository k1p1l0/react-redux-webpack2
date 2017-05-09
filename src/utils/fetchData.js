"use strict";

export const fetchNewValue = () => {
    const getRandomInt = (min=1, max=100) => Math.floor(Math.random() * (max - min)) + min;

    return new Promise((resolve, reject) => {
        let value = getRandomInt();

        console.log(value);

        // Simulate fake loading
        setTimeout(() => {
            resolve({
                data: String(value)
            });
        }, 300);
    });
};