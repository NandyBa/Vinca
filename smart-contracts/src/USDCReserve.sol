// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IERC20} from "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
import {SimplePool} from "./SimplePool.sol";

contract USDCReserve {

    IERC20 usdc;
    mapping(address => uint256) public balances;
    SimplePool pool;
    
    constructor(address _usdc) {
        usdc = IERC20(_usdc);
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
        IERC20(address(usdc)).transfer(msg.sender, amount);
        balances[msg.sender] -= amount;
    }

    function getAssetPrice() external view returns (uint256) {
        return 1;
    }

        function registerPool(address _pool) external {
        pool = SimplePool(_pool);
    }

    function executeTransfert(address _user, uint256 _amount) external {
        require(msg.sender == address(pool), "Only pool can execute borrow");
        IERC20(address(usdc)).transfer(_user, _amount);
    }
}
