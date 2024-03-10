/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface EthereumPaymentCollectorContract
  extends Truffle.Contract<EthereumPaymentCollectorInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<EthereumPaymentCollectorInstance>;
}

type AllEvents = never;

export interface EthereumPaymentCollectorInstance
  extends Truffle.ContractInstance {
  collectPayment: {
    (
      _transaction: {
        merkleProof: string[];
        data: {
          attestationType: string;
          sourceId: string;
          votingRound: number | BN | string;
          lowestUsedTimestamp: number | BN | string;
          requestBody: {
            transactionHash: string;
            requiredConfirmations: number | BN | string;
            provideInput: boolean;
            listEvents: boolean;
            logIndices: (number | BN | string)[];
          };
          responseBody: {
            blockNumber: number | BN | string;
            timestamp: number | BN | string;
            sourceAddress: string;
            isDeployment: boolean;
            receivingAddress: string;
            value: number | BN | string;
            input: string;
            status: number | BN | string;
            events: {
              logIndex: number | BN | string;
              emitterAddress: string;
              topics: string[];
              data: string;
              removed: boolean;
            }[];
          };
        };
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _transaction: {
        merkleProof: string[];
        data: {
          attestationType: string;
          sourceId: string;
          votingRound: number | BN | string;
          lowestUsedTimestamp: number | BN | string;
          requestBody: {
            transactionHash: string;
            requiredConfirmations: number | BN | string;
            provideInput: boolean;
            listEvents: boolean;
            logIndices: (number | BN | string)[];
          };
          responseBody: {
            blockNumber: number | BN | string;
            timestamp: number | BN | string;
            sourceAddress: string;
            isDeployment: boolean;
            receivingAddress: string;
            value: number | BN | string;
            input: string;
            status: number | BN | string;
            events: {
              logIndex: number | BN | string;
              emitterAddress: string;
              topics: string[];
              data: string;
              removed: boolean;
            }[];
          };
        };
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _transaction: {
        merkleProof: string[];
        data: {
          attestationType: string;
          sourceId: string;
          votingRound: number | BN | string;
          lowestUsedTimestamp: number | BN | string;
          requestBody: {
            transactionHash: string;
            requiredConfirmations: number | BN | string;
            provideInput: boolean;
            listEvents: boolean;
            logIndices: (number | BN | string)[];
          };
          responseBody: {
            blockNumber: number | BN | string;
            timestamp: number | BN | string;
            sourceAddress: string;
            isDeployment: boolean;
            receivingAddress: string;
            value: number | BN | string;
            input: string;
            status: number | BN | string;
            events: {
              logIndex: number | BN | string;
              emitterAddress: string;
              topics: string[];
              data: string;
              removed: boolean;
            }[];
          };
        };
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _transaction: {
        merkleProof: string[];
        data: {
          attestationType: string;
          sourceId: string;
          votingRound: number | BN | string;
          lowestUsedTimestamp: number | BN | string;
          requestBody: {
            transactionHash: string;
            requiredConfirmations: number | BN | string;
            provideInput: boolean;
            listEvents: boolean;
            logIndices: (number | BN | string)[];
          };
          responseBody: {
            blockNumber: number | BN | string;
            timestamp: number | BN | string;
            sourceAddress: string;
            isDeployment: boolean;
            receivingAddress: string;
            value: number | BN | string;
            input: string;
            status: number | BN | string;
            events: {
              logIndex: number | BN | string;
              emitterAddress: string;
              topics: string[];
              data: string;
              removed: boolean;
            }[];
          };
        };
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getAllTransactions(
    txDetails?: Truffle.TransactionDetails
  ): Promise<
    {
      originalTransaction: {
        merkleProof: string[];
        data: {
          attestationType: string;
          sourceId: string;
          votingRound: BN;
          lowestUsedTimestamp: BN;
          requestBody: {
            transactionHash: string;
            requiredConfirmations: BN;
            provideInput: boolean;
            listEvents: boolean;
            logIndices: BN[];
          };
          responseBody: {
            blockNumber: BN;
            timestamp: BN;
            sourceAddress: string;
            isDeployment: boolean;
            receivingAddress: string;
            value: BN;
            input: string;
            status: BN;
            events: {
              logIndex: BN;
              emitterAddress: string;
              topics: string[];
              data: string;
              removed: boolean;
            }[];
          };
        };
      };
      eventNumber: BN;
      eventInfo: { sender: string; value: BN; data: string }[];
    }[]
  >;

  getTransactionCount(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  isEVMTransactionProofValid(
    transaction: {
      merkleProof: string[];
      data: {
        attestationType: string;
        sourceId: string;
        votingRound: number | BN | string;
        lowestUsedTimestamp: number | BN | string;
        requestBody: {
          transactionHash: string;
          requiredConfirmations: number | BN | string;
          provideInput: boolean;
          listEvents: boolean;
          logIndices: (number | BN | string)[];
        };
        responseBody: {
          blockNumber: number | BN | string;
          timestamp: number | BN | string;
          sourceAddress: string;
          isDeployment: boolean;
          receivingAddress: string;
          value: number | BN | string;
          input: string;
          status: number | BN | string;
          events: {
            logIndex: number | BN | string;
            emitterAddress: string;
            topics: string[];
            data: string;
            removed: boolean;
          }[];
        };
      };
    },
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  transactions(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    0: {
      merkleProof: string[];
      data: {
        attestationType: string;
        sourceId: string;
        votingRound: BN;
        lowestUsedTimestamp: BN;
        requestBody: {
          transactionHash: string;
          requiredConfirmations: BN;
          provideInput: boolean;
          listEvents: boolean;
          logIndices: BN[];
        };
        responseBody: {
          blockNumber: BN;
          timestamp: BN;
          sourceAddress: string;
          isDeployment: boolean;
          receivingAddress: string;
          value: BN;
          input: string;
          status: BN;
          events: {
            logIndex: BN;
            emitterAddress: string;
            topics: string[];
            data: string;
            removed: boolean;
          }[];
        };
      };
    };
    1: BN;
  }>;

  methods: {
    collectPayment: {
      (
        _transaction: {
          merkleProof: string[];
          data: {
            attestationType: string;
            sourceId: string;
            votingRound: number | BN | string;
            lowestUsedTimestamp: number | BN | string;
            requestBody: {
              transactionHash: string;
              requiredConfirmations: number | BN | string;
              provideInput: boolean;
              listEvents: boolean;
              logIndices: (number | BN | string)[];
            };
            responseBody: {
              blockNumber: number | BN | string;
              timestamp: number | BN | string;
              sourceAddress: string;
              isDeployment: boolean;
              receivingAddress: string;
              value: number | BN | string;
              input: string;
              status: number | BN | string;
              events: {
                logIndex: number | BN | string;
                emitterAddress: string;
                topics: string[];
                data: string;
                removed: boolean;
              }[];
            };
          };
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _transaction: {
          merkleProof: string[];
          data: {
            attestationType: string;
            sourceId: string;
            votingRound: number | BN | string;
            lowestUsedTimestamp: number | BN | string;
            requestBody: {
              transactionHash: string;
              requiredConfirmations: number | BN | string;
              provideInput: boolean;
              listEvents: boolean;
              logIndices: (number | BN | string)[];
            };
            responseBody: {
              blockNumber: number | BN | string;
              timestamp: number | BN | string;
              sourceAddress: string;
              isDeployment: boolean;
              receivingAddress: string;
              value: number | BN | string;
              input: string;
              status: number | BN | string;
              events: {
                logIndex: number | BN | string;
                emitterAddress: string;
                topics: string[];
                data: string;
                removed: boolean;
              }[];
            };
          };
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _transaction: {
          merkleProof: string[];
          data: {
            attestationType: string;
            sourceId: string;
            votingRound: number | BN | string;
            lowestUsedTimestamp: number | BN | string;
            requestBody: {
              transactionHash: string;
              requiredConfirmations: number | BN | string;
              provideInput: boolean;
              listEvents: boolean;
              logIndices: (number | BN | string)[];
            };
            responseBody: {
              blockNumber: number | BN | string;
              timestamp: number | BN | string;
              sourceAddress: string;
              isDeployment: boolean;
              receivingAddress: string;
              value: number | BN | string;
              input: string;
              status: number | BN | string;
              events: {
                logIndex: number | BN | string;
                emitterAddress: string;
                topics: string[];
                data: string;
                removed: boolean;
              }[];
            };
          };
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _transaction: {
          merkleProof: string[];
          data: {
            attestationType: string;
            sourceId: string;
            votingRound: number | BN | string;
            lowestUsedTimestamp: number | BN | string;
            requestBody: {
              transactionHash: string;
              requiredConfirmations: number | BN | string;
              provideInput: boolean;
              listEvents: boolean;
              logIndices: (number | BN | string)[];
            };
            responseBody: {
              blockNumber: number | BN | string;
              timestamp: number | BN | string;
              sourceAddress: string;
              isDeployment: boolean;
              receivingAddress: string;
              value: number | BN | string;
              input: string;
              status: number | BN | string;
              events: {
                logIndex: number | BN | string;
                emitterAddress: string;
                topics: string[];
                data: string;
                removed: boolean;
              }[];
            };
          };
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getAllTransactions(
      txDetails?: Truffle.TransactionDetails
    ): Promise<
      {
        originalTransaction: {
          merkleProof: string[];
          data: {
            attestationType: string;
            sourceId: string;
            votingRound: BN;
            lowestUsedTimestamp: BN;
            requestBody: {
              transactionHash: string;
              requiredConfirmations: BN;
              provideInput: boolean;
              listEvents: boolean;
              logIndices: BN[];
            };
            responseBody: {
              blockNumber: BN;
              timestamp: BN;
              sourceAddress: string;
              isDeployment: boolean;
              receivingAddress: string;
              value: BN;
              input: string;
              status: BN;
              events: {
                logIndex: BN;
                emitterAddress: string;
                topics: string[];
                data: string;
                removed: boolean;
              }[];
            };
          };
        };
        eventNumber: BN;
        eventInfo: { sender: string; value: BN; data: string }[];
      }[]
    >;

    getTransactionCount(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    isEVMTransactionProofValid(
      transaction: {
        merkleProof: string[];
        data: {
          attestationType: string;
          sourceId: string;
          votingRound: number | BN | string;
          lowestUsedTimestamp: number | BN | string;
          requestBody: {
            transactionHash: string;
            requiredConfirmations: number | BN | string;
            provideInput: boolean;
            listEvents: boolean;
            logIndices: (number | BN | string)[];
          };
          responseBody: {
            blockNumber: number | BN | string;
            timestamp: number | BN | string;
            sourceAddress: string;
            isDeployment: boolean;
            receivingAddress: string;
            value: number | BN | string;
            input: string;
            status: number | BN | string;
            events: {
              logIndex: number | BN | string;
              emitterAddress: string;
              topics: string[];
              data: string;
              removed: boolean;
            }[];
          };
        };
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    transactions(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      0: {
        merkleProof: string[];
        data: {
          attestationType: string;
          sourceId: string;
          votingRound: BN;
          lowestUsedTimestamp: BN;
          requestBody: {
            transactionHash: string;
            requiredConfirmations: BN;
            provideInput: boolean;
            listEvents: boolean;
            logIndices: BN[];
          };
          responseBody: {
            blockNumber: BN;
            timestamp: BN;
            sourceAddress: string;
            isDeployment: boolean;
            receivingAddress: string;
            value: BN;
            input: string;
            status: BN;
            events: {
              logIndex: BN;
              emitterAddress: string;
              topics: string[];
              data: string;
              removed: boolean;
            }[];
          };
        };
      };
      1: BN;
    }>;
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
