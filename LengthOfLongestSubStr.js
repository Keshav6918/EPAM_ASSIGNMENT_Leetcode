/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const lastSeen = {};
    let start = 0;
    let maxLen = 0;

    for(let i=0;i<s.length;i++){
        const char = s[i];

        if(lastSeen.hasOwnProperty(char) && lastSeen[char] >= start){
            start = lastSeen[char] + 1;
        }
        
        lastSeen[char] = i;

        maxLen = Math.max(maxLen,i-start+1);
    }
    return maxLen;
};
