// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20MinerReward is ERC20 {

    event LogNewAlert(string description, address indexed _from, uint256 _n);

    constructor() public ERC20("MinerReward", "MRW") {}

    function _reward() public {
        //_mint(block.coinbase, 20); //block.coinbase returning zero on ganache. https://github.com/trufflesuite/ganache/issues/201
        _mint(msg.sender, 20);
        emit LogNewAlert('_rewarded', msg.sender, block.number);
    }
}