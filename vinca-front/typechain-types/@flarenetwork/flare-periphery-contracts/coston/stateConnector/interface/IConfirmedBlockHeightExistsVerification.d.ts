/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IConfirmedBlockHeightExistsVerificationContract
  extends Truffle.Contract<IConfirmedBlockHeightExistsVerificationInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<IConfirmedBlockHeightExistsVerificationInstance>;
}

type AllEvents = never;

export interface IConfirmedBlockHeightExistsVerificationInstance
  extends Truffle.ContractInstance {
  verifyConfirmedBlockHeightExists(
    _proof: {
      merkleProof: string[];
      data: {
        attestationType: string;
        sourceId: string;
        votingRound: number | BN | string;
        lowestUsedTimestamp: number | BN | string;
        requestBody: {
          blockNumber: number | BN | string;
          queryWindow: number | BN | string;
        };
        responseBody: {
          blockTimestamp: number | BN | string;
          numberOfConfirmations: number | BN | string;
          lowestQueryWindowBlockNumber: number | BN | string;
          lowestQueryWindowBlockTimestamp: number | BN | string;
        };
      };
    },
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  methods: {
    verifyConfirmedBlockHeightExists(
      _proof: {
        merkleProof: string[];
        data: {
          attestationType: string;
          sourceId: string;
          votingRound: number | BN | string;
          lowestUsedTimestamp: number | BN | string;
          requestBody: {
            blockNumber: number | BN | string;
            queryWindow: number | BN | string;
          };
          responseBody: {
            blockTimestamp: number | BN | string;
            numberOfConfirmations: number | BN | string;
            lowestQueryWindowBlockNumber: number | BN | string;
            lowestQueryWindowBlockTimestamp: number | BN | string;
          };
        };
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
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
