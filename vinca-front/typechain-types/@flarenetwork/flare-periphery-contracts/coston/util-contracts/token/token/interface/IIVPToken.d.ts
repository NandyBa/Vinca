/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IIVPTokenContract extends Truffle.Contract<IIVPTokenInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IIVPTokenInstance>;
}

export interface Approval {
  name: "Approval";
  args: {
    owner: string;
    spender: string;
    value: BN;
    0: string;
    1: string;
    2: BN;
  };
}

export interface Transfer {
  name: "Transfer";
  args: {
    from: string;
    to: string;
    value: BN;
    0: string;
    1: string;
    2: BN;
  };
}

type AllEvents = Approval | Transfer;

export interface IIVPTokenInstance extends Truffle.ContractInstance {
  allowance(
    owner: string,
    spender: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  approve: {
    (
      spender: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      spender: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  balanceOf(
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  balanceOfAt(
    _owner: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  batchVotePowerOfAt(
    _owners: string[],
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN[]>;

  cleanupBlockNumber(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  decimals(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  delegate: {
    (
      _to: string,
      _bips: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _to: string,
      _bips: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _to: string,
      _bips: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _to: string,
      _bips: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  delegateExplicit: {
    (
      _to: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _to: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _to: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _to: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  delegatesOf(
    _who: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: string[]; 1: BN[]; 2: BN; 3: BN }>;

  delegatesOfAt(
    _who: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: string[]; 1: BN[]; 2: BN; 3: BN }>;

  delegationModeOf(
    _who: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  governanceVotePower(txDetails?: Truffle.TransactionDetails): Promise<string>;

  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  readVotePowerContract(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  revokeDelegationAt: {
    (
      _who: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _who: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _who: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _who: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setCleanerContract: {
    (_cleanerContract: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _cleanerContract: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _cleanerContract: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _cleanerContract: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setCleanupBlockNumber: {
    (
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setCleanupBlockNumberManager: {
    (
      _cleanupBlockNumberManager: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _cleanupBlockNumberManager: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _cleanupBlockNumberManager: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _cleanupBlockNumberManager: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setGovernanceVotePower: {
    (
      _governanceVotePower: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _governanceVotePower: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _governanceVotePower: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _governanceVotePower: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  totalSupplyAt(
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  totalVotePower(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  totalVotePowerAt(
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  totalVotePowerAtCached: {
    (
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transfer: {
    (
      to: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      to: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      to: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      to: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transferFrom: {
    (
      from: string,
      to: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      from: string,
      to: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      from: string,
      to: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      from: string,
      to: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  undelegateAll: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  undelegateAllExplicit: {
    (
      _delegateAddresses: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _delegateAddresses: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _delegateAddresses: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _delegateAddresses: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  undelegatedVotePowerOf(
    _owner: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  undelegatedVotePowerOfAt(
    _owner: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  votePowerFromTo(
    _from: string,
    _to: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  votePowerFromToAt(
    _from: string,
    _to: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  votePowerOf(
    _owner: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  votePowerOfAt(
    _owner: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  votePowerOfAtCached: {
    (
      _owner: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _owner: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _owner: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _owner: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  writeVotePowerContract(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  methods: {
    allowance(
      owner: string,
      spender: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    approve: {
      (
        spender: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        spender: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        spender: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        spender: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    balanceOf(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    balanceOfAt(
      _owner: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    batchVotePowerOfAt(
      _owners: string[],
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN[]>;

    cleanupBlockNumber(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    decimals(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    delegate: {
      (
        _to: string,
        _bips: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _to: string,
        _bips: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _to: string,
        _bips: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _to: string,
        _bips: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    delegateExplicit: {
      (
        _to: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _to: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _to: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _to: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    delegatesOf(
      _who: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: string[]; 1: BN[]; 2: BN; 3: BN }>;

    delegatesOfAt(
      _who: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: string[]; 1: BN[]; 2: BN; 3: BN }>;

    delegationModeOf(
      _who: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    governanceVotePower(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    name(txDetails?: Truffle.TransactionDetails): Promise<string>;

    readVotePowerContract(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    revokeDelegationAt: {
      (
        _who: string,
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _who: string,
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _who: string,
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _who: string,
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setCleanerContract: {
      (
        _cleanerContract: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _cleanerContract: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _cleanerContract: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _cleanerContract: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setCleanupBlockNumber: {
      (
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setCleanupBlockNumberManager: {
      (
        _cleanupBlockNumberManager: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _cleanupBlockNumberManager: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _cleanupBlockNumberManager: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _cleanupBlockNumberManager: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setGovernanceVotePower: {
      (
        _governanceVotePower: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _governanceVotePower: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _governanceVotePower: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _governanceVotePower: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

    totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    totalSupplyAt(
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    totalVotePower(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    totalVotePowerAt(
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    totalVotePowerAtCached: {
      (
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    transfer: {
      (
        to: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        to: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        to: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        to: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    transferFrom: {
      (
        from: string,
        to: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        from: string,
        to: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        from: string,
        to: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        from: string,
        to: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    undelegateAll: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    undelegateAllExplicit: {
      (
        _delegateAddresses: string[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _delegateAddresses: string[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _delegateAddresses: string[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _delegateAddresses: string[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    undelegatedVotePowerOf(
      _owner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    undelegatedVotePowerOfAt(
      _owner: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    votePowerFromTo(
      _from: string,
      _to: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    votePowerFromToAt(
      _from: string,
      _to: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    votePowerOf(
      _owner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    votePowerOfAt(
      _owner: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    votePowerOfAtCached: {
      (
        _owner: string,
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _owner: string,
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _owner: string,
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _owner: string,
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    writeVotePowerContract(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
