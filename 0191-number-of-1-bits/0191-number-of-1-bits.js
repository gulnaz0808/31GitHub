/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var ans = 0;
  while(n) {
    if (n & 1) ans ++;
    n /= 2;
  }
  
  return ans;
};