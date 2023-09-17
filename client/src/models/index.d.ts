import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerResults = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Results, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sqft?: string | null;
  readonly depth?: string | null;
  readonly ftCubed?: string | null;
  readonly ydsCubed?: string | null;
  readonly concreteRate?: string | null;
  readonly concreteCost?: string | null;
  readonly vbRate?: string | null;
  readonly vbCost?: string | null;
  readonly wwmRate?: string | null;
  readonly wwmCost?: string | null;
  readonly Tax?: string | null;
  readonly Total?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResults = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Results, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sqft?: string | null;
  readonly depth?: string | null;
  readonly ftCubed?: string | null;
  readonly ydsCubed?: string | null;
  readonly concreteRate?: string | null;
  readonly concreteCost?: string | null;
  readonly vbRate?: string | null;
  readonly vbCost?: string | null;
  readonly wwmRate?: string | null;
  readonly wwmCost?: string | null;
  readonly Tax?: string | null;
  readonly Total?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Results = LazyLoading extends LazyLoadingDisabled ? EagerResults : LazyResults

export declare const Results: (new (init: ModelInit<Results>) => Results) & {
  copyOf(source: Results, mutator: (draft: MutableModel<Results>) => MutableModel<Results> | void): Results;
}