/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let arr = [];
    let mp = new Map();

    for(let num of nums){
        mp.set(num, (mp.get(num) || 0) + 1);
    }

    let Freq = [];

    for(let [key, value] of mp) {
        Freq.push([value, key]);
    }
    Freq.sort((a, b) => b[0] - a[0]);

    for(let i = 0; i < Freq.length && k !== 0; i++) {
        arr.push(Freq[i][1]);
        k--;
    }

    return arr;
};


