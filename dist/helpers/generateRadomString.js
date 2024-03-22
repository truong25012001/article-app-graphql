"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRadomString = void 0;
const generateRadomString = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
exports.generateRadomString = generateRadomString;
