/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface KyberDmmFactoryInterface extends utils.Interface {
  functions: {
    'allPools(uint256)': FunctionFragment;
    'allPoolsLength()': FunctionFragment;
    'createPool(address,address,uint32)': FunctionFragment;
    'feeToSetter()': FunctionFragment;
    'getFeeConfiguration()': FunctionFragment;
    'getPoolAtIndex(address,address,uint256)': FunctionFragment;
    'getPools(address,address)': FunctionFragment;
    'getPoolsLength(address,address)': FunctionFragment;
    'getUnamplifiedPool(address,address)': FunctionFragment;
    'isPool(address,address,address)': FunctionFragment;
    'setFeeConfiguration(address,uint16)': FunctionFragment;
    'setFeeToSetter(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'allPools'
      | 'allPoolsLength'
      | 'createPool'
      | 'feeToSetter'
      | 'getFeeConfiguration'
      | 'getPoolAtIndex'
      | 'getPools'
      | 'getPoolsLength'
      | 'getUnamplifiedPool'
      | 'isPool'
      | 'setFeeConfiguration'
      | 'setFeeToSetter',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'allPools', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'allPoolsLength', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'createPool',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'feeToSetter', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getFeeConfiguration', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getPoolAtIndex',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'getPools', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'getPoolsLength',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getUnamplifiedPool',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'isPool',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'setFeeConfiguration',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'setFeeToSetter', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'allPools', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allPoolsLength', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'createPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'feeToSetter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getFeeConfiguration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolAtIndex', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPools', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolsLength', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUnamplifiedPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setFeeConfiguration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setFeeToSetter', data: BytesLike): Result;

  events: {
    'PoolCreated(address,address,address,uint32,uint256)': EventFragment;
    'SetFeeConfiguration(address,uint16)': EventFragment;
    'SetFeeToSetter(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'PoolCreated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetFeeConfiguration'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetFeeToSetter'): EventFragment;
}

export interface PoolCreatedEventObject {
  token0: string;
  token1: string;
  pool: string;
  ampBps: number;
  totalPool: BigNumber;
}
export type PoolCreatedEvent = TypedEvent<[string, string, string, number, BigNumber], PoolCreatedEventObject>;

export type PoolCreatedEventFilter = TypedEventFilter<PoolCreatedEvent>;

export interface SetFeeConfigurationEventObject {
  feeTo: string;
  governmentFeeBps: number;
}
export type SetFeeConfigurationEvent = TypedEvent<[string, number], SetFeeConfigurationEventObject>;

export type SetFeeConfigurationEventFilter = TypedEventFilter<SetFeeConfigurationEvent>;

export interface SetFeeToSetterEventObject {
  feeToSetter: string;
}
export type SetFeeToSetterEvent = TypedEvent<[string], SetFeeToSetterEventObject>;

export type SetFeeToSetterEventFilter = TypedEventFilter<SetFeeToSetterEvent>;

export interface KyberDmmFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KyberDmmFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allPools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    allPoolsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    createPool(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      ampBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    feeToSetter(overrides?: CallOverrides): Promise<[string]>;

    getFeeConfiguration(
      overrides?: CallOverrides,
    ): Promise<[string, number] & { _feeTo: string; _governmentFeeBps: number }>;

    getPoolAtIndex(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[string] & { pool: string }>;

    getPools(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[string[]] & { _tokenPools: string[] }>;

    getPoolsLength(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getUnamplifiedPool(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    isPool(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    setFeeConfiguration(
      _feeTo: PromiseOrValue<string>,
      _governmentFeeBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setFeeToSetter(
      _feeToSetter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  allPools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  allPoolsLength(overrides?: CallOverrides): Promise<BigNumber>;

  createPool(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    ampBps: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  feeToSetter(overrides?: CallOverrides): Promise<string>;

  getFeeConfiguration(
    overrides?: CallOverrides,
  ): Promise<[string, number] & { _feeTo: string; _governmentFeeBps: number }>;

  getPoolAtIndex(
    token0: PromiseOrValue<string>,
    token1: PromiseOrValue<string>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<string>;

  getPools(
    token0: PromiseOrValue<string>,
    token1: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<string[]>;

  getPoolsLength(
    token0: PromiseOrValue<string>,
    token1: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getUnamplifiedPool(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<string>;

  isPool(
    token0: PromiseOrValue<string>,
    token1: PromiseOrValue<string>,
    pool: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  setFeeConfiguration(
    _feeTo: PromiseOrValue<string>,
    _governmentFeeBps: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setFeeToSetter(
    _feeToSetter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    allPools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    allPoolsLength(overrides?: CallOverrides): Promise<BigNumber>;

    createPool(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      ampBps: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<string>;

    feeToSetter(overrides?: CallOverrides): Promise<string>;

    getFeeConfiguration(
      overrides?: CallOverrides,
    ): Promise<[string, number] & { _feeTo: string; _governmentFeeBps: number }>;

    getPoolAtIndex(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<string>;

    getPools(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<string[]>;

    getPoolsLength(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getUnamplifiedPool(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<string>;

    isPool(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    setFeeConfiguration(
      _feeTo: PromiseOrValue<string>,
      _governmentFeeBps: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    setFeeToSetter(_feeToSetter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'PoolCreated(address,address,address,uint32,uint256)'(
      token0?: PromiseOrValue<string> | null,
      token1?: PromiseOrValue<string> | null,
      pool?: null,
      ampBps?: null,
      totalPool?: null,
    ): PoolCreatedEventFilter;
    PoolCreated(
      token0?: PromiseOrValue<string> | null,
      token1?: PromiseOrValue<string> | null,
      pool?: null,
      ampBps?: null,
      totalPool?: null,
    ): PoolCreatedEventFilter;

    'SetFeeConfiguration(address,uint16)'(feeTo?: null, governmentFeeBps?: null): SetFeeConfigurationEventFilter;
    SetFeeConfiguration(feeTo?: null, governmentFeeBps?: null): SetFeeConfigurationEventFilter;

    'SetFeeToSetter(address)'(feeToSetter?: null): SetFeeToSetterEventFilter;
    SetFeeToSetter(feeToSetter?: null): SetFeeToSetterEventFilter;
  };

  estimateGas: {
    allPools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    allPoolsLength(overrides?: CallOverrides): Promise<BigNumber>;

    createPool(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      ampBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    feeToSetter(overrides?: CallOverrides): Promise<BigNumber>;

    getFeeConfiguration(overrides?: CallOverrides): Promise<BigNumber>;

    getPoolAtIndex(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPools(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPoolsLength(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getUnamplifiedPool(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    isPool(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    setFeeConfiguration(
      _feeTo: PromiseOrValue<string>,
      _governmentFeeBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setFeeToSetter(
      _feeToSetter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allPools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allPoolsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createPool(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      ampBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    feeToSetter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFeeConfiguration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPoolAtIndex(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getPools(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getPoolsLength(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getUnamplifiedPool(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    isPool(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      pool: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    setFeeConfiguration(
      _feeTo: PromiseOrValue<string>,
      _governmentFeeBps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setFeeToSetter(
      _feeToSetter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
