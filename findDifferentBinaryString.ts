function findDifferentBinaryString(nums: string[]): string {
    const maxStrLen=nums[0].length
    const results:string[]=[]
    const inArr:{[key:string]:boolean}=nums.reduce((obj,num)=>{
        obj[num]=true
        return obj
    },{})
    const binaryArr:string[]=["0","1"]
    function backtracking(strArr:string[]){
        if(strArr.length==maxStrLen){
            const str=strArr.join("")
            if(!inArr[str]){
                results.push(str)
                inArr[str]=true
            }
            return
        }
        binaryArr.forEach(binaryNum=>{
            backtracking([...strArr,binaryNum])
        })
        return
    }
    backtracking([])
    return results[0]||""
};
console.log(findDifferentBinaryString(["111","011","001"]))