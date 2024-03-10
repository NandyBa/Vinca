// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IERC20} from "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

contract USDCReserve {

    IERC20 usdc;
    mapping(address => uint256) public balances;
        
    constructor(address _usdc) {
        usdc = IERC20(_usdc);
    }

    function deposit(uint256 amount) external {
        usdc.transferFrom(msg.sender, address(this), amount);
    }

        function supply(uint256 amount) external {
        IERC20(address(usdc)).transferFrom(msg.sender, address(this), amount);
        balances[msg.sender] += amount;
    }
    

    function getSupplyedAmount(address user) external view returns (uint256) {
        return balances[user];
    }

    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        IERC20(address(wbtc)).transfer(msg.sender, amount);
        balances[msg.sender] -= amount;
    }
    
}
