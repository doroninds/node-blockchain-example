const { Block, BlockChain } = require('./models')

const dogChain = new BlockChain()

const dogBlock = new Block({
    from: 'Jane',
    to: 'Dima',
    amount: 0.05
})

dogChain.addBlock(dogBlock)

console.log('dogChain chain', dogChain.chain)