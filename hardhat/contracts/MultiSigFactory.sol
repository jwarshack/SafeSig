// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MultiSigWallet.sol";

contract MultiSigFactory {

  event MultiSigCreated(address indexed multiSig);

  function createMultiSig(address[] memory owners, uint256 required) external {
    MultiSigWallet multiSig = new MultiSigWallet(owners, required);

    emit MultiSigCreated(address(multiSig));
  }

}