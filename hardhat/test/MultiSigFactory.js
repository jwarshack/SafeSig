const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MultiSigFactory", function () {
  let acc0, acc1, acc2, acc3, acc4;
  let factory;

  before(async () => {
    [acc0, acc1, acc2, acc3, acc4] = await ethers.getSigners();

    const Factory = await ethers.getContractFactory("MultiSigFactory");
    factory = await Factory.deploy();
    await factory.deployed();

  });

  it("Should create a new multisig and add to array", async function () {

    await factory.createMultiSig([acc0.address, acc1.address, acc2.address], 2);

    console.log(await factory.multiSigs(0));
    // expect(await factory.multiSigs().length).to.equal(1)
  });
});
