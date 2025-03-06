interface TreeNodeType {
  value: number | null;
  passCost:number
  children: TreeNodeType[];
}
function TreeNode(this: TreeNodeType, value: number | null = null,passCost:number=0) {
    this.passCost=passCost
    this.value = value;
    this.children = [];
}

function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
    
    const nodesMap=new Map<number,TreeNodeType>()
    let treeRoot:TreeNodeType=new TreeNode(0,amount[0])

    nodesMap.set(0,treeRoot)

    for (let i = 0; i < edges.length; i++) {
        let parentVal = edges[i][0];
        let childVal = edges[i][1];
        if (!nodesMap.has(parentVal)) {
            nodesMap.set(parentVal, new TreeNode(parentVal,amount[i]));
        }
        if (!nodesMap.has(childVal)) {
            nodesMap.set(childVal, new TreeNode(childVal,amount[i]));
        }
        nodesMap.get(parentVal)?.children.push(nodesMap.get(childVal)!);
    }

    function recursion(node:TreeNodeType,level:number=0){
        
        
        for (let i = 0; i < node.children.length; i++) {
            recursion(node.children[i],level+1)
        }
        return
    }
    return 0
};
mostProfitablePath( [[0,1],[1,2],[1,3],[3,4]],5,[-2,4,2,-4,6])