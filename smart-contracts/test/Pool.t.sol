// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import "../src/Pool.sol";
import "./TestToken.sol";

contract SimplePoolTest is Test {
    Pool pool;
    TestToken token;
    address user = address(1);

    function setUp() public {
    pool = new Pool();
    token = new TestToken(1e18); // Supply 1 token to the deployer for testing

    // Transfer some tokens to the user
    token.transfer(user, 1e18);

    vm.startPrank(user);
    token.approve(address(pool), 1e18);
    vm.stopPrank();
}

function testSupply() public {
    vm.startPrank(user);
    uint256 supplyAmount = 1e18; // 1 token
    pool.supply(address(token), supplyAmount);


    vm.stopPrank();
}

}
