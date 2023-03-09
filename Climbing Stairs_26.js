// You are an adventurer and you have come across a tall staircase with n steps to reach the top. You decide to take on the challenge and start climbing the stairs. You quickly realize that there are two ways to climb each step: either take 1 step at a time, or take 2 steps at once.

// Can you figure out how many different ways you can climb to the top?

function main() {
    var n = parseInt(readLine());
    console.log(climbStairs(n));
}
function climbStairs(n) {
	if(n===1)return 1;
    if(n===2)return 2;
    let first = 1;
    let second=2;
    for(let i=3;i<=n;i++){
        let third=first + second;
        first=second ;
        second=third;
    }
return second;
}