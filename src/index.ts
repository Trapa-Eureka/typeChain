class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
    constructor (
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const abroadBlock: Block = new Block(0, "313131313131", "", "flight", 123456789);

let blockchain: [Block] = [abroadBlock];

console.log(blockchain);

export {};