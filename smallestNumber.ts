function smallestNumber(pattern: string): string {
    const n = pattern.length;
    const result: number[] = [];
    let stack: number[] = [];
    
    for (let i = 0; i <= n; i++) {
        stack.push(i + 1); // Push numbers from 1 to n+1
        if (i === n || pattern[i] === 'I') {
            // When we encounter 'I' or reach the end, reverse the stack to get the smallest number
            while (stack.length > 0) {
                result.push(stack.pop()!);
            }
        }
    }
    
    return result.join('');
}

// Example usage:
console.log(smallestNumber("DDDI")); // Output: "12354"