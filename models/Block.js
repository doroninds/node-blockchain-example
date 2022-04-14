const crypto = require('crypto')

class Block {


    constructor(data) {

        this.timestampp = +new Date()
        this.data = data
        this.hash = this.getHash(data)
        this.prevHash = null
        this.nonce = 0
    }

    getHash() {
        const str = `${this.prevHash}${this.timestampp}${JSON.stringify(this.data)}${this.nonce}`
        return crypto.createHash('md5').update(str).digest('hex')
    } 

    mine(difficulty) {

        while(!this.hash.startsWith(Array(difficulty + 1).join("0"))) {
            this.nonce += 1
            this.hash = this.getHash()
        }
    }
}

module.exports = Block