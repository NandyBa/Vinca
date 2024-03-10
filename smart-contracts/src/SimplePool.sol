// SPDX-License-Identifier: MIT
import "./wBTCReserve.sol";
import "./USDCReserve.sol";


contract SimplePool {
    WBTCReserve wBTCReserve;
    USDCReserve usdcReserve;

    constructor(address wBTC, address usdc) {
        wBTCReserve = WBTCReserve(wBTC);
        usdcReserve = USDCReserve(usdc);
    }
    

}
