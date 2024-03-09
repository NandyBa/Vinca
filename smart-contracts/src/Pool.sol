// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Pool {
    // Function to get the Total Value Locked (TVL) of an asset in the pool.
    function getAssetTVL(address asset) external view returns (uint256) {}

    // Function to get the current price of an asset.
    function getAssetPrice(address asset) external view returns (uint256) {}

    // Function to get the total amount borrowed by a user for a specific asset.
    function getBorrowedAmount(address user, address asset) external view returns (uint256) {}

    // Function to get the total amount supplied by a user for a specific asset.
    function getSupplyedAmount(address user, address asset) external view returns (uint256) {}

    // Function for a user to supply an asset to the pool.
    function supply(address asset, uint256 amount) external {}

    // Function for a user to borrow an asset from the pool.
    function borrow(address asset, uint256 amount) external {}
}
