const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Contract', function () {
  let MerkleTreeContract, merkleContract, owner, addr1, addr2, addr3, addrs
  beforeEach(async function () {
    MerkleTreeContract = await ethers.getContractFactory('MerkleTreeContract')
    ;[owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners()
    merkleContract = await MerkleTreeContract.deploy()
  })

  describe('Deployment', function () {
    it('Should set the right owner', async function () {
      expect(await merkleContract.owner()).to.equal(owner.address)
    })
  })

  describe('Mint', function () {
    it('Should be reverted because the caller is not the owner', async function () {
      await expect(merkleContract.connect(addr1).mint(1)).to.be.revertedWith(
        'Ownable: caller is not the owner',
      )
    })
    it('should mint a token for the owner', async function () {
      await merkleContract.mint(1)
      expect(await merkleContract.balanceOf(owner.address)).to.equal(1)
    })
  })
})
