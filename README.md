## Vinca
Vinca is a multi-chain lending and borrowing protocol power by Flare. It's reduce fiction between chain by allowing user to use multiple chain effortless. You can use you asset on one chain let's say Ethereum to borrow on others like Polygon. So your assets stay safe on L1 and you get all advantage of L2 without need of bridging.

<img width="1125" alt="Screenshot 2024-03-10 at 19 15 09" src="https://github.com/NandyBa/Vinca/assets/11545946/68e57f36-1f23-4273-aa1a-f9d930fec829">


## How to we use Flare ?

Price feeds are essential to us because they ensure the accurate valuation of collateral, enabling secure and fair loan agreements.
To be respond to the requirements our protocol use FTSO **(Flare Time Series Oracle)**.

They allow us to dynamically manage risk and maintain the stability of our platform by adjusting to real-time market conditions.

Without **reliable price feeds**, we couldn't protect our users or our platform's integrity against the volatility inherent in crypto markets.



## Deployed contracts:
### Pool contract
- 0x29252fDfC494A8A930b5258D9Fc0947326E8bcc1
- [smart-contract code](https://github.com/NandyBa/Vinca/blob/master/smart-contracts/src/SimpleFtsoExample.sol)
### wBTC Reserve
- 0xB23e6ACB45902dc288D47D3542ab303521f0E178
- [smart-contract code](https://github.com/NandyBa/Vinca/blob/master/smart-contracts/src/USDCReserve.sol)
### usdc Reserve
- 0xE169875161Fc0b06D8eEf3B9388b75C2D8dc8828
- [smart-contract code](https://github.com/NandyBa/Vinca/blob/master/smart-contracts/src/WBTCReserve.sol)

Live website: https://vinca-pearl.vercel.app/


**Roadmap**
- Use **Flare's State Connector** to manage dynamicly the LTV. That's a key feature to keep user position save. And it's currently not done by any lending and borrowing protocol. Only Aave to regular change but the are not automatic yet.
Having a **protocol who react quickly** to events like a not regular ERC20 transfert or a de-peg will reduce risk for our users.



