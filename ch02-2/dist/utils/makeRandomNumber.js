"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeRandomNumber = void 0;
let MAX_AGE = 100;
function MakeRandomNumber(max = MAX_AGE) {
    return Math.ceil(Math.random() * max);
}
exports.MakeRandomNumber = MakeRandomNumber;
//# sourceMappingURL=makeRandomNumber.js.map