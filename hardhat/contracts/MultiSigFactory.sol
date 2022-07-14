// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MultiSigWallet.sol";

contract MultiSigFactory {

  address[] public multiSigs;

  function createMultiSig(address[] memory owners, uint256 required) external {
    MultiSigWallet multiSig = new MultiSigWallet(owners, required);
    multiSigs.push(address(multiSig));
  }

  function getNumberOfMultiSigs() external view returns (uint256) {
    return multiSigs.length;
  }

}