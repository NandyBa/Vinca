// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import "../src/SimplePool.sol";
import "./TestToken.sol";

contract PoolTest is Test {
    TestToken wBTC;
    TestToken usdc;
    SimplePool pool;
    address deployer = address(9);
    WBTCReserve wBTCReserve;
    USDCReserve usdcReserve;
    

    function setUp() public {
        wBTC = new TestToken(1e18);
        usdc = new TestToken(1e24);

        wBTCReserve = new WBTCReserve(address(wBTC));
        usdcReserve = new USDCReserve(address(usdc));

        wBTC.transfer(address(1), 1e18);
        // usdc.transfer(address(2), 1e24);

        vm.startPrank(deployer);
        
        pool = new SimplePool(wBTCReserve, usdcReserve, address(wBTC), address(usdc));
        address wBTCReserveAddress = pool.getReserve(address(wBTC));
        wBTCReserve = WBTCReserve(wBTCReserveAddress);
        address usdcReserveAddress = pool.getReserve(address(usdc));
        usdcReserve = USDCReserve(usdcReserveAddress);

        vm.stopPrank();
    }

    function testSupply() public {
        uint256 supplyAmount = 1e18;

        console.log(wBTC.balanceOf(address(1)));
        

        
        vm.startPrank(address(1));
        
        ERC20(wBTC).approve(address(wBTCReserve), supplyAmount);
        console.log(wBTC.allowance(address(1), address(wBTCReserve)));
        wBTCReserve.supply(supplyAmount);
        
        vm.stopPrank();
        

        // assertEq(wBTCReserve.getSupplyedAmount(address(1)), supplyAmount);
    }

    

}
