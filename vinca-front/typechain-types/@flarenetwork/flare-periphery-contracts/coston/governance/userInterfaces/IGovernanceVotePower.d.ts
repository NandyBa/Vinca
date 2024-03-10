/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IGovernanceVotePowerContract
  extends Truffle.Contract<IGovernanceVotePowerInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<IGovernanceVotePowerInstance>;
}

type AllEvents = never;

export interface IGovernanceVotePowerInstance extends Truffle.ContractInstance {
  delegate: {
    (_to: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_to: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      _to: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _to: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getDelegateOfAt(
    _who: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  getDelegateOfAtNow(
    _who: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  getVotes(
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  undelegate: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  votePowerOfAt(
    _who: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    delegate: {
      (_to: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(_to: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(
        _to: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _to: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getDelegateOfAt(
      _who: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    getDelegateOfAtNow(
      _who: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    getVotes(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    undelegate: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    votePowerOfAt(
      _who: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
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
