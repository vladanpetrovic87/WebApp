function recursiveSum(num, sum) {
    console.log(num);
    const currentSum = num + sum;
    return num > 0 ? recursiveSum(num - 1, currentSum) : currentSum;
}

console.log(recursiveSum(5, 0));
