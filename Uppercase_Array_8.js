function main() {
    let n=parseInt(readLine());
    let arr=[];
    for(let i=0;i<n;i++){
        let str=readLine();
        arr.push(str);
    }
    console.log(convertUppercase(arr));
}
