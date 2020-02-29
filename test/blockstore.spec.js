/* eslint-env mocha */
'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect
const Blockstore = require('../src')
const Block = require('ipld-block')
const CID = require('cids')

describe('Blockstore', () => {
  let repo
  const block = new Block(Buffer.from('hello'), new CID('QmdfTbBqBPQ7VNxZEYEj14VmRuZBkqFbiwReogJgS1zR1n'))

  before(() => {
    repo = new Blockstore()
  })

  describe('.put', () => {
    it('simple', async () => {
      await repo.put(block)
    })

    it('throws if not block', () => {
      expect(() => repo.put()).to.throw(
        'invalid block'
      )
    })
  })

  describe('.get', () => {
    before(async () => {
      await repo.put(block)
    })

    it('simple', async () => {
      expect(await repo.get(block.cid)).to.equal(block)
    })

    it('throws if no cid', () => {
      expect(() => repo.get()).to.throw(Error).with.property('code', 'ERR_INVALID_CID')
    })

    it('throws if not found', () => {
      expect(
        () => repo.get(new CID('QmdfTbBqBPQ7VNxZEYEj14VmRuZBkqFbiwReogJgS1zR1d'))
      ).to.throw(Error).with.property('code', 'ERR_NOT_FOUND')
    })
  })

  describe('.delete', () => {
    before(async () => {
      await repo.put(block)
    })

    it('simple', async () => {
      await repo.delete(block.cid)
    })

    it('throws when passed an invalid cid', () => {
      expect(() => repo.delete()).to.throw(Error).with.property('code', 'ERR_INVALID_CID')
    })
  })
})
