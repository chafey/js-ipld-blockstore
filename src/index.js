'use strict'

const Block = require('ipld-block')
const errcode = require('err-code')
const CID = require('cids')

/**
 * Class that implements an in memory IPLD Blockstore
 */

class Blockstore {
  constructor () {
    this.blocks = new Map()
  }

  /**
   * Get a single block by CID.
   *
   * @param {CID} cid
   * @returns {Promise<Block>}
   * @throws {Error} with code ERR_INVLID_CID if cid is not a valid CID
   * @throws {Error} with code ERR_NOT_FOUND if block is not found
   */
  get (cid) {
    if (!CID.isCID(cid)) {
      throw errcode(new Error('Not a valid cid'), 'ERR_INVALID_CID')
    }
    const key = cid.toString()
    // console.log(key)
    const block = this.blocks.get(key)
    if (!block) {
      throw errcode(new Error('Block not found'), 'ERR_NOT_FOUND')
    }
    return Promise.resolve(block)
  }

  /**
   * Write a single block to the store.
   *
   * @param {Block} block
   * @returns {Promise<void>}
   * @throws {Error} with description 'invalid block' if block is not a valid Block
   */
  put (block) {
    if (!Block.isBlock(block)) {
      throw new Error('invalid block')
    }
    const key = block.cid.toString()
    // console.log(key)
    this.blocks.set(key, block)
    return Promise.resolve()
  }

  /**
    * Delete a block from the store
    *
    * @param {CID} cid
    * @returns {Promise<void>}
    * @throws {Error} with code ERR_INVLID_CID if cid is not a valid CID
    */
  delete (cid) { // eslint-disable-line require-await
    if (!CID.isCID(cid)) {
      throw errcode(new Error('Not a valid cid'), 'ERR_INVALID_CID')
    }
    const key = cid.toString()
    this.blocks.delete(key)
    return Promise.resolve()
  }
}

module.exports = Blockstore
