"use strict";
const dog = (move) => {
    if ("name" in move) {
        move.fly();
    }
    return move.fly !== undefined;
};
dog({
    name: "dog",
    fly() {
        console.log("I can fly");
    },
});
