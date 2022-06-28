module.exports = function reverse (n) {
    const numUp = Math.abs(n);
    const numStr = String(numUp);
    const result = numStr.split('').reverse().join('');
    return Number(result);
}