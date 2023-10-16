import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerResults = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Results, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly lengthFT?: number | null;
  readonly widthFT?: number | null;
  readonly depth: number;
  readonly ftCubed?: number | null;
  readonly ydsCubed?: number | null;
  readonly concreteRate?: number | null;
  readonly concreteTCost?: number | null;
  readonly Tax?: string | null;
  readonly Total?: string | null;
  readonly sqft: number;
  readonly serviceName?: string | null;
  readonly description?: string | null;
  readonly serviceType?: string | null;
  readonly typeName?: string | null;
  readonly typeDescription?: string | null;
  readonly addOnName?: string | null;
  readonly addOnDescription?: string | null;
  readonly addOnMaterial?: number | null;
  readonly addOnTotal?: number | null;
  readonly callTotal?: number | null;
  readonly serviceDescription?: string | null;
  readonly addOnLabor?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResults = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Results, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly lengthFT?: number | null;
  readonly widthFT?: number | null;
  readonly depth: number;
  readonly ftCubed?: number | null;
  readonly ydsCubed?: number | null;
  readonly concreteRate?: number | null;
  readonly concreteTCost?: number | null;
  readonly Tax?: string | null;
  readonly Total?: string | null;
  readonly sqft: number;
  readonly serviceName?: string | null;
  readonly description?: string | null;
  readonly serviceType?: string | null;
  readonly typeName?: string | null;
  readonly typeDescription?: string | null;
  readonly addOnName?: string | null;
  readonly addOnDescription?: string | null;
  readonly addOnMaterial?: number | null;
  readonly addOnTotal?: number | null;
  readonly callTotal?: number | null;
  readonly serviceDescription?: string | null;
  readonly addOnLabor?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Results = LazyLoading extends LazyLoadingDisabled ? EagerResults : LazyResults

export declare const Results: (new (init: ModelInit<Results>) => Results) & {
  copyOf(source: Results, mutator: (draft: MutableModel<Results>) => MutableModel<Results> | void): Results;
}