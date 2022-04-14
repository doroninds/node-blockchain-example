const Block = require('./Block')

class BlockChain {
    constructor() {
        this.chain = [new Block()]
        this.difficulty = 1
    }

    getFirstBlock() {
        const [firstBlock, ...rest] = this.chain
        return firstBlock
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1]
    }

    addBlock(block) {
        block.prevHash = this.getLastBlock().hash
        block.hash = block.getHash()
        block.mine(this.difficulty);
        this.chain.push(block)
    }


    isValid() {
        for (let i = 0; i < this.chain.length; i++) {
            const currentBlock = this.chain[i]
            const prevBlock = this.chain[i-1]

            if (currentBlock.hash !== currentBlock.getHash() || prevBlock.hash !== currentBlock.prevHash) {
                return false
            }
            
        }

        return true
    }
    
}

module.exports = BlockChain