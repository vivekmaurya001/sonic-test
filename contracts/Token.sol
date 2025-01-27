// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("MyToken", "MTK1") {
        _mint(msg.sender, initialSupply);
    }
     function getTokens(uint256 amount, address recipient) public {
        _mint(recipient, amount);
    }
}
