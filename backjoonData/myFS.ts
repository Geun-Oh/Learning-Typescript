let gone: number[] = [Number(start)];
let BFSgone: number[] = [Number(start)];
const BFS = (line: number[][], temp: number[]) => {
    if(BFSgone.length === line.length) {
        return BFSgone;
    }
    let newTemp = [];
    for(let i = 0; i < temp.length; i++) {
        let stick = line[temp[i] - 1];
        for(let j = 0; j < stick.length; j++) {
            if(!BFSgone.includes(stick[j])) {
                BFSgone.push(stick[j]);
            }
            newTemp.push(stick[j]);
        }
    }
    temp = [...newTemp];
    BFS(line, temp);
}
const DFS = (line: number[][], gone: number[]) => {
    if(gone.length === line.length) {
        return gone;
    }
    let start = gone[gone.length - 1];
    let stick = line[start - 1];
    for(let i = 0; i < stick.length; i++) {
        if(!gone.includes(stick[i])) {
            gone.push(stick[i]);
            DFS(line, gone);
        }
    }
}