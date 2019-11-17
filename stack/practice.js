const Stack = require("./objectAchievement");
/**
 * 十进制转化为任意进制
 * @param {number} value 
 * @returns {string} res
 */
function trancferToTwo(value, base) {
    const stack = new Stack;
    let remainer;
    let tar = value;
    let res = "";
    while (tar > 0) {
        remainer = tar % base;
        tar = Math.floor(tar / base);
        stack.push(remainer);
    }
    while (!stack.isEmpty()) {
        res = res.concat(stack.pop());
    }
    return res;
}
console.log(trancferToTwo(100, 8));