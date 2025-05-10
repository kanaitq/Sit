
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model FoodOption
 * 
 */
export type FoodOption = $Result.DefaultSelection<Prisma.$FoodOptionPayload>
/**
 * Model SeatSelection
 * 
 */
export type SeatSelection = $Result.DefaultSelection<Prisma.$SeatSelectionPayload>
/**
 * Model ResetTracker
 * 
 */
export type ResetTracker = $Result.DefaultSelection<Prisma.$ResetTrackerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FoodOptions
 * const foodOptions = await prisma.foodOption.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more FoodOptions
   * const foodOptions = await prisma.foodOption.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.foodOption`: Exposes CRUD operations for the **FoodOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodOptions
    * const foodOptions = await prisma.foodOption.findMany()
    * ```
    */
  get foodOption(): Prisma.FoodOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seatSelection`: Exposes CRUD operations for the **SeatSelection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeatSelections
    * const seatSelections = await prisma.seatSelection.findMany()
    * ```
    */
  get seatSelection(): Prisma.SeatSelectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resetTracker`: Exposes CRUD operations for the **ResetTracker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResetTrackers
    * const resetTrackers = await prisma.resetTracker.findMany()
    * ```
    */
  get resetTracker(): Prisma.ResetTrackerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    FoodOption: 'FoodOption',
    SeatSelection: 'SeatSelection',
    ResetTracker: 'ResetTracker'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "foodOption" | "seatSelection" | "resetTracker"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FoodOption: {
        payload: Prisma.$FoodOptionPayload<ExtArgs>
        fields: Prisma.FoodOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOptionPayload>
          }
          findFirst: {
            args: Prisma.FoodOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOptionPayload>
          }
          findMany: {
            args: Prisma.FoodOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOptionPayload>[]
          }
          create: {
            args: Prisma.FoodOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOptionPayload>
          }
          createMany: {
            args: Prisma.FoodOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOptionPayload>[]
          }
          delete: {
            args: Prisma.FoodOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOptionPayload>
          }
          update: {
            args: Prisma.FoodOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOptionPayload>
          }
          deleteMany: {
            args: Prisma.FoodOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOptionPayload>[]
          }
          upsert: {
            args: Prisma.FoodOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodOptionPayload>
          }
          aggregate: {
            args: Prisma.FoodOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodOption>
          }
          groupBy: {
            args: Prisma.FoodOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodOptionCountArgs<ExtArgs>
            result: $Utils.Optional<FoodOptionCountAggregateOutputType> | number
          }
        }
      }
      SeatSelection: {
        payload: Prisma.$SeatSelectionPayload<ExtArgs>
        fields: Prisma.SeatSelectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeatSelectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatSelectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeatSelectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatSelectionPayload>
          }
          findFirst: {
            args: Prisma.SeatSelectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatSelectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeatSelectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatSelectionPayload>
          }
          findMany: {
            args: Prisma.SeatSelectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatSelectionPayload>[]
          }
          create: {
            args: Prisma.SeatSelectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatSelectionPayload>
          }
          createMany: {
            args: Prisma.SeatSelectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeatSelectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatSelectionPayload>[]
          }
          delete: {
            args: Prisma.SeatSelectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatSelectionPayload>
          }
          update: {
            args: Prisma.SeatSelectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatSelectionPayload>
          }
          deleteMany: {
            args: Prisma.SeatSelectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeatSelectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeatSelectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatSelectionPayload>[]
          }
          upsert: {
            args: Prisma.SeatSelectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatSelectionPayload>
          }
          aggregate: {
            args: Prisma.SeatSelectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeatSelection>
          }
          groupBy: {
            args: Prisma.SeatSelectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeatSelectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeatSelectionCountArgs<ExtArgs>
            result: $Utils.Optional<SeatSelectionCountAggregateOutputType> | number
          }
        }
      }
      ResetTracker: {
        payload: Prisma.$ResetTrackerPayload<ExtArgs>
        fields: Prisma.ResetTrackerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResetTrackerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTrackerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResetTrackerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTrackerPayload>
          }
          findFirst: {
            args: Prisma.ResetTrackerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTrackerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResetTrackerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTrackerPayload>
          }
          findMany: {
            args: Prisma.ResetTrackerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTrackerPayload>[]
          }
          create: {
            args: Prisma.ResetTrackerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTrackerPayload>
          }
          createMany: {
            args: Prisma.ResetTrackerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResetTrackerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTrackerPayload>[]
          }
          delete: {
            args: Prisma.ResetTrackerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTrackerPayload>
          }
          update: {
            args: Prisma.ResetTrackerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTrackerPayload>
          }
          deleteMany: {
            args: Prisma.ResetTrackerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResetTrackerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResetTrackerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTrackerPayload>[]
          }
          upsert: {
            args: Prisma.ResetTrackerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTrackerPayload>
          }
          aggregate: {
            args: Prisma.ResetTrackerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResetTracker>
          }
          groupBy: {
            args: Prisma.ResetTrackerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResetTrackerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResetTrackerCountArgs<ExtArgs>
            result: $Utils.Optional<ResetTrackerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    foodOption?: FoodOptionOmit
    seatSelection?: SeatSelectionOmit
    resetTracker?: ResetTrackerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model FoodOption
   */

  export type AggregateFoodOption = {
    _count: FoodOptionCountAggregateOutputType | null
    _min: FoodOptionMinAggregateOutputType | null
    _max: FoodOptionMaxAggregateOutputType | null
  }

  export type FoodOptionMinAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    selected: boolean | null
    updatedAt: Date | null
  }

  export type FoodOptionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    selected: boolean | null
    updatedAt: Date | null
  }

  export type FoodOptionCountAggregateOutputType = {
    id: number
    name: number
    icon: number
    selected: number
    updatedAt: number
    _all: number
  }


  export type FoodOptionMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    selected?: true
    updatedAt?: true
  }

  export type FoodOptionMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    selected?: true
    updatedAt?: true
  }

  export type FoodOptionCountAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    selected?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodOption to aggregate.
     */
    where?: FoodOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodOptions to fetch.
     */
    orderBy?: FoodOptionOrderByWithRelationInput | FoodOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodOptions
    **/
    _count?: true | FoodOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodOptionMaxAggregateInputType
  }

  export type GetFoodOptionAggregateType<T extends FoodOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodOption[P]>
      : GetScalarType<T[P], AggregateFoodOption[P]>
  }




  export type FoodOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodOptionWhereInput
    orderBy?: FoodOptionOrderByWithAggregationInput | FoodOptionOrderByWithAggregationInput[]
    by: FoodOptionScalarFieldEnum[] | FoodOptionScalarFieldEnum
    having?: FoodOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodOptionCountAggregateInputType | true
    _min?: FoodOptionMinAggregateInputType
    _max?: FoodOptionMaxAggregateInputType
  }

  export type FoodOptionGroupByOutputType = {
    id: string
    name: string
    icon: string
    selected: boolean
    updatedAt: Date
    _count: FoodOptionCountAggregateOutputType | null
    _min: FoodOptionMinAggregateOutputType | null
    _max: FoodOptionMaxAggregateOutputType | null
  }

  type GetFoodOptionGroupByPayload<T extends FoodOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodOptionGroupByOutputType[P]>
            : GetScalarType<T[P], FoodOptionGroupByOutputType[P]>
        }
      >
    >


  export type FoodOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    selected?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["foodOption"]>

  export type FoodOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    selected?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["foodOption"]>

  export type FoodOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    selected?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["foodOption"]>

  export type FoodOptionSelectScalar = {
    id?: boolean
    name?: boolean
    icon?: boolean
    selected?: boolean
    updatedAt?: boolean
  }

  export type FoodOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "icon" | "selected" | "updatedAt", ExtArgs["result"]["foodOption"]>

  export type $FoodOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodOption"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      icon: string
      selected: boolean
      updatedAt: Date
    }, ExtArgs["result"]["foodOption"]>
    composites: {}
  }

  type FoodOptionGetPayload<S extends boolean | null | undefined | FoodOptionDefaultArgs> = $Result.GetResult<Prisma.$FoodOptionPayload, S>

  type FoodOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodOptionCountAggregateInputType | true
    }

  export interface FoodOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodOption'], meta: { name: 'FoodOption' } }
    /**
     * Find zero or one FoodOption that matches the filter.
     * @param {FoodOptionFindUniqueArgs} args - Arguments to find a FoodOption
     * @example
     * // Get one FoodOption
     * const foodOption = await prisma.foodOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodOptionFindUniqueArgs>(args: SelectSubset<T, FoodOptionFindUniqueArgs<ExtArgs>>): Prisma__FoodOptionClient<$Result.GetResult<Prisma.$FoodOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodOptionFindUniqueOrThrowArgs} args - Arguments to find a FoodOption
     * @example
     * // Get one FoodOption
     * const foodOption = await prisma.foodOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodOptionClient<$Result.GetResult<Prisma.$FoodOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOptionFindFirstArgs} args - Arguments to find a FoodOption
     * @example
     * // Get one FoodOption
     * const foodOption = await prisma.foodOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodOptionFindFirstArgs>(args?: SelectSubset<T, FoodOptionFindFirstArgs<ExtArgs>>): Prisma__FoodOptionClient<$Result.GetResult<Prisma.$FoodOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOptionFindFirstOrThrowArgs} args - Arguments to find a FoodOption
     * @example
     * // Get one FoodOption
     * const foodOption = await prisma.foodOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodOptionClient<$Result.GetResult<Prisma.$FoodOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodOptions
     * const foodOptions = await prisma.foodOption.findMany()
     * 
     * // Get first 10 FoodOptions
     * const foodOptions = await prisma.foodOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodOptionWithIdOnly = await prisma.foodOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodOptionFindManyArgs>(args?: SelectSubset<T, FoodOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodOption.
     * @param {FoodOptionCreateArgs} args - Arguments to create a FoodOption.
     * @example
     * // Create one FoodOption
     * const FoodOption = await prisma.foodOption.create({
     *   data: {
     *     // ... data to create a FoodOption
     *   }
     * })
     * 
     */
    create<T extends FoodOptionCreateArgs>(args: SelectSubset<T, FoodOptionCreateArgs<ExtArgs>>): Prisma__FoodOptionClient<$Result.GetResult<Prisma.$FoodOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodOptions.
     * @param {FoodOptionCreateManyArgs} args - Arguments to create many FoodOptions.
     * @example
     * // Create many FoodOptions
     * const foodOption = await prisma.foodOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodOptionCreateManyArgs>(args?: SelectSubset<T, FoodOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodOptions and returns the data saved in the database.
     * @param {FoodOptionCreateManyAndReturnArgs} args - Arguments to create many FoodOptions.
     * @example
     * // Create many FoodOptions
     * const foodOption = await prisma.foodOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodOptions and only return the `id`
     * const foodOptionWithIdOnly = await prisma.foodOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FoodOption.
     * @param {FoodOptionDeleteArgs} args - Arguments to delete one FoodOption.
     * @example
     * // Delete one FoodOption
     * const FoodOption = await prisma.foodOption.delete({
     *   where: {
     *     // ... filter to delete one FoodOption
     *   }
     * })
     * 
     */
    delete<T extends FoodOptionDeleteArgs>(args: SelectSubset<T, FoodOptionDeleteArgs<ExtArgs>>): Prisma__FoodOptionClient<$Result.GetResult<Prisma.$FoodOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodOption.
     * @param {FoodOptionUpdateArgs} args - Arguments to update one FoodOption.
     * @example
     * // Update one FoodOption
     * const foodOption = await prisma.foodOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodOptionUpdateArgs>(args: SelectSubset<T, FoodOptionUpdateArgs<ExtArgs>>): Prisma__FoodOptionClient<$Result.GetResult<Prisma.$FoodOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodOptions.
     * @param {FoodOptionDeleteManyArgs} args - Arguments to filter FoodOptions to delete.
     * @example
     * // Delete a few FoodOptions
     * const { count } = await prisma.foodOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodOptionDeleteManyArgs>(args?: SelectSubset<T, FoodOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodOptions
     * const foodOption = await prisma.foodOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodOptionUpdateManyArgs>(args: SelectSubset<T, FoodOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodOptions and returns the data updated in the database.
     * @param {FoodOptionUpdateManyAndReturnArgs} args - Arguments to update many FoodOptions.
     * @example
     * // Update many FoodOptions
     * const foodOption = await prisma.foodOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoodOptions and only return the `id`
     * const foodOptionWithIdOnly = await prisma.foodOption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoodOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FoodOption.
     * @param {FoodOptionUpsertArgs} args - Arguments to update or create a FoodOption.
     * @example
     * // Update or create a FoodOption
     * const foodOption = await prisma.foodOption.upsert({
     *   create: {
     *     // ... data to create a FoodOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodOption we want to update
     *   }
     * })
     */
    upsert<T extends FoodOptionUpsertArgs>(args: SelectSubset<T, FoodOptionUpsertArgs<ExtArgs>>): Prisma__FoodOptionClient<$Result.GetResult<Prisma.$FoodOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOptionCountArgs} args - Arguments to filter FoodOptions to count.
     * @example
     * // Count the number of FoodOptions
     * const count = await prisma.foodOption.count({
     *   where: {
     *     // ... the filter for the FoodOptions we want to count
     *   }
     * })
    **/
    count<T extends FoodOptionCountArgs>(
      args?: Subset<T, FoodOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodOptionAggregateArgs>(args: Subset<T, FoodOptionAggregateArgs>): Prisma.PrismaPromise<GetFoodOptionAggregateType<T>>

    /**
     * Group by FoodOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodOptionGroupByArgs['orderBy'] }
        : { orderBy?: FoodOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodOption model
   */
  readonly fields: FoodOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FoodOption model
   */
  interface FoodOptionFieldRefs {
    readonly id: FieldRef<"FoodOption", 'String'>
    readonly name: FieldRef<"FoodOption", 'String'>
    readonly icon: FieldRef<"FoodOption", 'String'>
    readonly selected: FieldRef<"FoodOption", 'Boolean'>
    readonly updatedAt: FieldRef<"FoodOption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoodOption findUnique
   */
  export type FoodOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOption
     */
    select?: FoodOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOption
     */
    omit?: FoodOptionOmit<ExtArgs> | null
    /**
     * Filter, which FoodOption to fetch.
     */
    where: FoodOptionWhereUniqueInput
  }

  /**
   * FoodOption findUniqueOrThrow
   */
  export type FoodOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOption
     */
    select?: FoodOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOption
     */
    omit?: FoodOptionOmit<ExtArgs> | null
    /**
     * Filter, which FoodOption to fetch.
     */
    where: FoodOptionWhereUniqueInput
  }

  /**
   * FoodOption findFirst
   */
  export type FoodOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOption
     */
    select?: FoodOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOption
     */
    omit?: FoodOptionOmit<ExtArgs> | null
    /**
     * Filter, which FoodOption to fetch.
     */
    where?: FoodOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodOptions to fetch.
     */
    orderBy?: FoodOptionOrderByWithRelationInput | FoodOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodOptions.
     */
    cursor?: FoodOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodOptions.
     */
    distinct?: FoodOptionScalarFieldEnum | FoodOptionScalarFieldEnum[]
  }

  /**
   * FoodOption findFirstOrThrow
   */
  export type FoodOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOption
     */
    select?: FoodOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOption
     */
    omit?: FoodOptionOmit<ExtArgs> | null
    /**
     * Filter, which FoodOption to fetch.
     */
    where?: FoodOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodOptions to fetch.
     */
    orderBy?: FoodOptionOrderByWithRelationInput | FoodOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodOptions.
     */
    cursor?: FoodOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodOptions.
     */
    distinct?: FoodOptionScalarFieldEnum | FoodOptionScalarFieldEnum[]
  }

  /**
   * FoodOption findMany
   */
  export type FoodOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOption
     */
    select?: FoodOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOption
     */
    omit?: FoodOptionOmit<ExtArgs> | null
    /**
     * Filter, which FoodOptions to fetch.
     */
    where?: FoodOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodOptions to fetch.
     */
    orderBy?: FoodOptionOrderByWithRelationInput | FoodOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodOptions.
     */
    cursor?: FoodOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodOptions.
     */
    skip?: number
    distinct?: FoodOptionScalarFieldEnum | FoodOptionScalarFieldEnum[]
  }

  /**
   * FoodOption create
   */
  export type FoodOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOption
     */
    select?: FoodOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOption
     */
    omit?: FoodOptionOmit<ExtArgs> | null
    /**
     * The data needed to create a FoodOption.
     */
    data: XOR<FoodOptionCreateInput, FoodOptionUncheckedCreateInput>
  }

  /**
   * FoodOption createMany
   */
  export type FoodOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodOptions.
     */
    data: FoodOptionCreateManyInput | FoodOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodOption createManyAndReturn
   */
  export type FoodOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOption
     */
    select?: FoodOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOption
     */
    omit?: FoodOptionOmit<ExtArgs> | null
    /**
     * The data used to create many FoodOptions.
     */
    data: FoodOptionCreateManyInput | FoodOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodOption update
   */
  export type FoodOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOption
     */
    select?: FoodOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOption
     */
    omit?: FoodOptionOmit<ExtArgs> | null
    /**
     * The data needed to update a FoodOption.
     */
    data: XOR<FoodOptionUpdateInput, FoodOptionUncheckedUpdateInput>
    /**
     * Choose, which FoodOption to update.
     */
    where: FoodOptionWhereUniqueInput
  }

  /**
   * FoodOption updateMany
   */
  export type FoodOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodOptions.
     */
    data: XOR<FoodOptionUpdateManyMutationInput, FoodOptionUncheckedUpdateManyInput>
    /**
     * Filter which FoodOptions to update
     */
    where?: FoodOptionWhereInput
    /**
     * Limit how many FoodOptions to update.
     */
    limit?: number
  }

  /**
   * FoodOption updateManyAndReturn
   */
  export type FoodOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOption
     */
    select?: FoodOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOption
     */
    omit?: FoodOptionOmit<ExtArgs> | null
    /**
     * The data used to update FoodOptions.
     */
    data: XOR<FoodOptionUpdateManyMutationInput, FoodOptionUncheckedUpdateManyInput>
    /**
     * Filter which FoodOptions to update
     */
    where?: FoodOptionWhereInput
    /**
     * Limit how many FoodOptions to update.
     */
    limit?: number
  }

  /**
   * FoodOption upsert
   */
  export type FoodOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOption
     */
    select?: FoodOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOption
     */
    omit?: FoodOptionOmit<ExtArgs> | null
    /**
     * The filter to search for the FoodOption to update in case it exists.
     */
    where: FoodOptionWhereUniqueInput
    /**
     * In case the FoodOption found by the `where` argument doesn't exist, create a new FoodOption with this data.
     */
    create: XOR<FoodOptionCreateInput, FoodOptionUncheckedCreateInput>
    /**
     * In case the FoodOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodOptionUpdateInput, FoodOptionUncheckedUpdateInput>
  }

  /**
   * FoodOption delete
   */
  export type FoodOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOption
     */
    select?: FoodOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOption
     */
    omit?: FoodOptionOmit<ExtArgs> | null
    /**
     * Filter which FoodOption to delete.
     */
    where: FoodOptionWhereUniqueInput
  }

  /**
   * FoodOption deleteMany
   */
  export type FoodOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodOptions to delete
     */
    where?: FoodOptionWhereInput
    /**
     * Limit how many FoodOptions to delete.
     */
    limit?: number
  }

  /**
   * FoodOption without action
   */
  export type FoodOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodOption
     */
    select?: FoodOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodOption
     */
    omit?: FoodOptionOmit<ExtArgs> | null
  }


  /**
   * Model SeatSelection
   */

  export type AggregateSeatSelection = {
    _count: SeatSelectionCountAggregateOutputType | null
    _min: SeatSelectionMinAggregateOutputType | null
    _max: SeatSelectionMaxAggregateOutputType | null
  }

  export type SeatSelectionMinAggregateOutputType = {
    position: string | null
    selected: boolean | null
    updatedAt: Date | null
  }

  export type SeatSelectionMaxAggregateOutputType = {
    position: string | null
    selected: boolean | null
    updatedAt: Date | null
  }

  export type SeatSelectionCountAggregateOutputType = {
    position: number
    selected: number
    updatedAt: number
    _all: number
  }


  export type SeatSelectionMinAggregateInputType = {
    position?: true
    selected?: true
    updatedAt?: true
  }

  export type SeatSelectionMaxAggregateInputType = {
    position?: true
    selected?: true
    updatedAt?: true
  }

  export type SeatSelectionCountAggregateInputType = {
    position?: true
    selected?: true
    updatedAt?: true
    _all?: true
  }

  export type SeatSelectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeatSelection to aggregate.
     */
    where?: SeatSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatSelections to fetch.
     */
    orderBy?: SeatSelectionOrderByWithRelationInput | SeatSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeatSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeatSelections
    **/
    _count?: true | SeatSelectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatSelectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatSelectionMaxAggregateInputType
  }

  export type GetSeatSelectionAggregateType<T extends SeatSelectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSeatSelection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeatSelection[P]>
      : GetScalarType<T[P], AggregateSeatSelection[P]>
  }




  export type SeatSelectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatSelectionWhereInput
    orderBy?: SeatSelectionOrderByWithAggregationInput | SeatSelectionOrderByWithAggregationInput[]
    by: SeatSelectionScalarFieldEnum[] | SeatSelectionScalarFieldEnum
    having?: SeatSelectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatSelectionCountAggregateInputType | true
    _min?: SeatSelectionMinAggregateInputType
    _max?: SeatSelectionMaxAggregateInputType
  }

  export type SeatSelectionGroupByOutputType = {
    position: string
    selected: boolean
    updatedAt: Date
    _count: SeatSelectionCountAggregateOutputType | null
    _min: SeatSelectionMinAggregateOutputType | null
    _max: SeatSelectionMaxAggregateOutputType | null
  }

  type GetSeatSelectionGroupByPayload<T extends SeatSelectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeatSelectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatSelectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatSelectionGroupByOutputType[P]>
            : GetScalarType<T[P], SeatSelectionGroupByOutputType[P]>
        }
      >
    >


  export type SeatSelectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    position?: boolean
    selected?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["seatSelection"]>

  export type SeatSelectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    position?: boolean
    selected?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["seatSelection"]>

  export type SeatSelectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    position?: boolean
    selected?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["seatSelection"]>

  export type SeatSelectionSelectScalar = {
    position?: boolean
    selected?: boolean
    updatedAt?: boolean
  }

  export type SeatSelectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"position" | "selected" | "updatedAt", ExtArgs["result"]["seatSelection"]>

  export type $SeatSelectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeatSelection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      position: string
      selected: boolean
      updatedAt: Date
    }, ExtArgs["result"]["seatSelection"]>
    composites: {}
  }

  type SeatSelectionGetPayload<S extends boolean | null | undefined | SeatSelectionDefaultArgs> = $Result.GetResult<Prisma.$SeatSelectionPayload, S>

  type SeatSelectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeatSelectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeatSelectionCountAggregateInputType | true
    }

  export interface SeatSelectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeatSelection'], meta: { name: 'SeatSelection' } }
    /**
     * Find zero or one SeatSelection that matches the filter.
     * @param {SeatSelectionFindUniqueArgs} args - Arguments to find a SeatSelection
     * @example
     * // Get one SeatSelection
     * const seatSelection = await prisma.seatSelection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeatSelectionFindUniqueArgs>(args: SelectSubset<T, SeatSelectionFindUniqueArgs<ExtArgs>>): Prisma__SeatSelectionClient<$Result.GetResult<Prisma.$SeatSelectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeatSelection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeatSelectionFindUniqueOrThrowArgs} args - Arguments to find a SeatSelection
     * @example
     * // Get one SeatSelection
     * const seatSelection = await prisma.seatSelection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeatSelectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SeatSelectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeatSelectionClient<$Result.GetResult<Prisma.$SeatSelectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeatSelection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatSelectionFindFirstArgs} args - Arguments to find a SeatSelection
     * @example
     * // Get one SeatSelection
     * const seatSelection = await prisma.seatSelection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeatSelectionFindFirstArgs>(args?: SelectSubset<T, SeatSelectionFindFirstArgs<ExtArgs>>): Prisma__SeatSelectionClient<$Result.GetResult<Prisma.$SeatSelectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeatSelection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatSelectionFindFirstOrThrowArgs} args - Arguments to find a SeatSelection
     * @example
     * // Get one SeatSelection
     * const seatSelection = await prisma.seatSelection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeatSelectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SeatSelectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeatSelectionClient<$Result.GetResult<Prisma.$SeatSelectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeatSelections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatSelectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeatSelections
     * const seatSelections = await prisma.seatSelection.findMany()
     * 
     * // Get first 10 SeatSelections
     * const seatSelections = await prisma.seatSelection.findMany({ take: 10 })
     * 
     * // Only select the `position`
     * const seatSelectionWithPositionOnly = await prisma.seatSelection.findMany({ select: { position: true } })
     * 
     */
    findMany<T extends SeatSelectionFindManyArgs>(args?: SelectSubset<T, SeatSelectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatSelectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeatSelection.
     * @param {SeatSelectionCreateArgs} args - Arguments to create a SeatSelection.
     * @example
     * // Create one SeatSelection
     * const SeatSelection = await prisma.seatSelection.create({
     *   data: {
     *     // ... data to create a SeatSelection
     *   }
     * })
     * 
     */
    create<T extends SeatSelectionCreateArgs>(args: SelectSubset<T, SeatSelectionCreateArgs<ExtArgs>>): Prisma__SeatSelectionClient<$Result.GetResult<Prisma.$SeatSelectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeatSelections.
     * @param {SeatSelectionCreateManyArgs} args - Arguments to create many SeatSelections.
     * @example
     * // Create many SeatSelections
     * const seatSelection = await prisma.seatSelection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeatSelectionCreateManyArgs>(args?: SelectSubset<T, SeatSelectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeatSelections and returns the data saved in the database.
     * @param {SeatSelectionCreateManyAndReturnArgs} args - Arguments to create many SeatSelections.
     * @example
     * // Create many SeatSelections
     * const seatSelection = await prisma.seatSelection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeatSelections and only return the `position`
     * const seatSelectionWithPositionOnly = await prisma.seatSelection.createManyAndReturn({
     *   select: { position: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeatSelectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SeatSelectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatSelectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeatSelection.
     * @param {SeatSelectionDeleteArgs} args - Arguments to delete one SeatSelection.
     * @example
     * // Delete one SeatSelection
     * const SeatSelection = await prisma.seatSelection.delete({
     *   where: {
     *     // ... filter to delete one SeatSelection
     *   }
     * })
     * 
     */
    delete<T extends SeatSelectionDeleteArgs>(args: SelectSubset<T, SeatSelectionDeleteArgs<ExtArgs>>): Prisma__SeatSelectionClient<$Result.GetResult<Prisma.$SeatSelectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeatSelection.
     * @param {SeatSelectionUpdateArgs} args - Arguments to update one SeatSelection.
     * @example
     * // Update one SeatSelection
     * const seatSelection = await prisma.seatSelection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeatSelectionUpdateArgs>(args: SelectSubset<T, SeatSelectionUpdateArgs<ExtArgs>>): Prisma__SeatSelectionClient<$Result.GetResult<Prisma.$SeatSelectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeatSelections.
     * @param {SeatSelectionDeleteManyArgs} args - Arguments to filter SeatSelections to delete.
     * @example
     * // Delete a few SeatSelections
     * const { count } = await prisma.seatSelection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeatSelectionDeleteManyArgs>(args?: SelectSubset<T, SeatSelectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeatSelections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatSelectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeatSelections
     * const seatSelection = await prisma.seatSelection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeatSelectionUpdateManyArgs>(args: SelectSubset<T, SeatSelectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeatSelections and returns the data updated in the database.
     * @param {SeatSelectionUpdateManyAndReturnArgs} args - Arguments to update many SeatSelections.
     * @example
     * // Update many SeatSelections
     * const seatSelection = await prisma.seatSelection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeatSelections and only return the `position`
     * const seatSelectionWithPositionOnly = await prisma.seatSelection.updateManyAndReturn({
     *   select: { position: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeatSelectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SeatSelectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatSelectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeatSelection.
     * @param {SeatSelectionUpsertArgs} args - Arguments to update or create a SeatSelection.
     * @example
     * // Update or create a SeatSelection
     * const seatSelection = await prisma.seatSelection.upsert({
     *   create: {
     *     // ... data to create a SeatSelection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeatSelection we want to update
     *   }
     * })
     */
    upsert<T extends SeatSelectionUpsertArgs>(args: SelectSubset<T, SeatSelectionUpsertArgs<ExtArgs>>): Prisma__SeatSelectionClient<$Result.GetResult<Prisma.$SeatSelectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeatSelections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatSelectionCountArgs} args - Arguments to filter SeatSelections to count.
     * @example
     * // Count the number of SeatSelections
     * const count = await prisma.seatSelection.count({
     *   where: {
     *     // ... the filter for the SeatSelections we want to count
     *   }
     * })
    **/
    count<T extends SeatSelectionCountArgs>(
      args?: Subset<T, SeatSelectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatSelectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeatSelection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatSelectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeatSelectionAggregateArgs>(args: Subset<T, SeatSelectionAggregateArgs>): Prisma.PrismaPromise<GetSeatSelectionAggregateType<T>>

    /**
     * Group by SeatSelection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatSelectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeatSelectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeatSelectionGroupByArgs['orderBy'] }
        : { orderBy?: SeatSelectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeatSelectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatSelectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeatSelection model
   */
  readonly fields: SeatSelectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeatSelection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeatSelectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SeatSelection model
   */
  interface SeatSelectionFieldRefs {
    readonly position: FieldRef<"SeatSelection", 'String'>
    readonly selected: FieldRef<"SeatSelection", 'Boolean'>
    readonly updatedAt: FieldRef<"SeatSelection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SeatSelection findUnique
   */
  export type SeatSelectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatSelection
     */
    select?: SeatSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatSelection
     */
    omit?: SeatSelectionOmit<ExtArgs> | null
    /**
     * Filter, which SeatSelection to fetch.
     */
    where: SeatSelectionWhereUniqueInput
  }

  /**
   * SeatSelection findUniqueOrThrow
   */
  export type SeatSelectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatSelection
     */
    select?: SeatSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatSelection
     */
    omit?: SeatSelectionOmit<ExtArgs> | null
    /**
     * Filter, which SeatSelection to fetch.
     */
    where: SeatSelectionWhereUniqueInput
  }

  /**
   * SeatSelection findFirst
   */
  export type SeatSelectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatSelection
     */
    select?: SeatSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatSelection
     */
    omit?: SeatSelectionOmit<ExtArgs> | null
    /**
     * Filter, which SeatSelection to fetch.
     */
    where?: SeatSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatSelections to fetch.
     */
    orderBy?: SeatSelectionOrderByWithRelationInput | SeatSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeatSelections.
     */
    cursor?: SeatSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeatSelections.
     */
    distinct?: SeatSelectionScalarFieldEnum | SeatSelectionScalarFieldEnum[]
  }

  /**
   * SeatSelection findFirstOrThrow
   */
  export type SeatSelectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatSelection
     */
    select?: SeatSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatSelection
     */
    omit?: SeatSelectionOmit<ExtArgs> | null
    /**
     * Filter, which SeatSelection to fetch.
     */
    where?: SeatSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatSelections to fetch.
     */
    orderBy?: SeatSelectionOrderByWithRelationInput | SeatSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeatSelections.
     */
    cursor?: SeatSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeatSelections.
     */
    distinct?: SeatSelectionScalarFieldEnum | SeatSelectionScalarFieldEnum[]
  }

  /**
   * SeatSelection findMany
   */
  export type SeatSelectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatSelection
     */
    select?: SeatSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatSelection
     */
    omit?: SeatSelectionOmit<ExtArgs> | null
    /**
     * Filter, which SeatSelections to fetch.
     */
    where?: SeatSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatSelections to fetch.
     */
    orderBy?: SeatSelectionOrderByWithRelationInput | SeatSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeatSelections.
     */
    cursor?: SeatSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatSelections.
     */
    skip?: number
    distinct?: SeatSelectionScalarFieldEnum | SeatSelectionScalarFieldEnum[]
  }

  /**
   * SeatSelection create
   */
  export type SeatSelectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatSelection
     */
    select?: SeatSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatSelection
     */
    omit?: SeatSelectionOmit<ExtArgs> | null
    /**
     * The data needed to create a SeatSelection.
     */
    data: XOR<SeatSelectionCreateInput, SeatSelectionUncheckedCreateInput>
  }

  /**
   * SeatSelection createMany
   */
  export type SeatSelectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeatSelections.
     */
    data: SeatSelectionCreateManyInput | SeatSelectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeatSelection createManyAndReturn
   */
  export type SeatSelectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatSelection
     */
    select?: SeatSelectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeatSelection
     */
    omit?: SeatSelectionOmit<ExtArgs> | null
    /**
     * The data used to create many SeatSelections.
     */
    data: SeatSelectionCreateManyInput | SeatSelectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeatSelection update
   */
  export type SeatSelectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatSelection
     */
    select?: SeatSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatSelection
     */
    omit?: SeatSelectionOmit<ExtArgs> | null
    /**
     * The data needed to update a SeatSelection.
     */
    data: XOR<SeatSelectionUpdateInput, SeatSelectionUncheckedUpdateInput>
    /**
     * Choose, which SeatSelection to update.
     */
    where: SeatSelectionWhereUniqueInput
  }

  /**
   * SeatSelection updateMany
   */
  export type SeatSelectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeatSelections.
     */
    data: XOR<SeatSelectionUpdateManyMutationInput, SeatSelectionUncheckedUpdateManyInput>
    /**
     * Filter which SeatSelections to update
     */
    where?: SeatSelectionWhereInput
    /**
     * Limit how many SeatSelections to update.
     */
    limit?: number
  }

  /**
   * SeatSelection updateManyAndReturn
   */
  export type SeatSelectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatSelection
     */
    select?: SeatSelectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeatSelection
     */
    omit?: SeatSelectionOmit<ExtArgs> | null
    /**
     * The data used to update SeatSelections.
     */
    data: XOR<SeatSelectionUpdateManyMutationInput, SeatSelectionUncheckedUpdateManyInput>
    /**
     * Filter which SeatSelections to update
     */
    where?: SeatSelectionWhereInput
    /**
     * Limit how many SeatSelections to update.
     */
    limit?: number
  }

  /**
   * SeatSelection upsert
   */
  export type SeatSelectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatSelection
     */
    select?: SeatSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatSelection
     */
    omit?: SeatSelectionOmit<ExtArgs> | null
    /**
     * The filter to search for the SeatSelection to update in case it exists.
     */
    where: SeatSelectionWhereUniqueInput
    /**
     * In case the SeatSelection found by the `where` argument doesn't exist, create a new SeatSelection with this data.
     */
    create: XOR<SeatSelectionCreateInput, SeatSelectionUncheckedCreateInput>
    /**
     * In case the SeatSelection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeatSelectionUpdateInput, SeatSelectionUncheckedUpdateInput>
  }

  /**
   * SeatSelection delete
   */
  export type SeatSelectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatSelection
     */
    select?: SeatSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatSelection
     */
    omit?: SeatSelectionOmit<ExtArgs> | null
    /**
     * Filter which SeatSelection to delete.
     */
    where: SeatSelectionWhereUniqueInput
  }

  /**
   * SeatSelection deleteMany
   */
  export type SeatSelectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeatSelections to delete
     */
    where?: SeatSelectionWhereInput
    /**
     * Limit how many SeatSelections to delete.
     */
    limit?: number
  }

  /**
   * SeatSelection without action
   */
  export type SeatSelectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatSelection
     */
    select?: SeatSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatSelection
     */
    omit?: SeatSelectionOmit<ExtArgs> | null
  }


  /**
   * Model ResetTracker
   */

  export type AggregateResetTracker = {
    _count: ResetTrackerCountAggregateOutputType | null
    _min: ResetTrackerMinAggregateOutputType | null
    _max: ResetTrackerMaxAggregateOutputType | null
  }

  export type ResetTrackerMinAggregateOutputType = {
    id: string | null
    lastReset: Date | null
    updatedAt: Date | null
  }

  export type ResetTrackerMaxAggregateOutputType = {
    id: string | null
    lastReset: Date | null
    updatedAt: Date | null
  }

  export type ResetTrackerCountAggregateOutputType = {
    id: number
    lastReset: number
    updatedAt: number
    _all: number
  }


  export type ResetTrackerMinAggregateInputType = {
    id?: true
    lastReset?: true
    updatedAt?: true
  }

  export type ResetTrackerMaxAggregateInputType = {
    id?: true
    lastReset?: true
    updatedAt?: true
  }

  export type ResetTrackerCountAggregateInputType = {
    id?: true
    lastReset?: true
    updatedAt?: true
    _all?: true
  }

  export type ResetTrackerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResetTracker to aggregate.
     */
    where?: ResetTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetTrackers to fetch.
     */
    orderBy?: ResetTrackerOrderByWithRelationInput | ResetTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResetTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetTrackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResetTrackers
    **/
    _count?: true | ResetTrackerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResetTrackerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResetTrackerMaxAggregateInputType
  }

  export type GetResetTrackerAggregateType<T extends ResetTrackerAggregateArgs> = {
        [P in keyof T & keyof AggregateResetTracker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResetTracker[P]>
      : GetScalarType<T[P], AggregateResetTracker[P]>
  }




  export type ResetTrackerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResetTrackerWhereInput
    orderBy?: ResetTrackerOrderByWithAggregationInput | ResetTrackerOrderByWithAggregationInput[]
    by: ResetTrackerScalarFieldEnum[] | ResetTrackerScalarFieldEnum
    having?: ResetTrackerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResetTrackerCountAggregateInputType | true
    _min?: ResetTrackerMinAggregateInputType
    _max?: ResetTrackerMaxAggregateInputType
  }

  export type ResetTrackerGroupByOutputType = {
    id: string
    lastReset: Date
    updatedAt: Date
    _count: ResetTrackerCountAggregateOutputType | null
    _min: ResetTrackerMinAggregateOutputType | null
    _max: ResetTrackerMaxAggregateOutputType | null
  }

  type GetResetTrackerGroupByPayload<T extends ResetTrackerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResetTrackerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResetTrackerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResetTrackerGroupByOutputType[P]>
            : GetScalarType<T[P], ResetTrackerGroupByOutputType[P]>
        }
      >
    >


  export type ResetTrackerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastReset?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["resetTracker"]>

  export type ResetTrackerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastReset?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["resetTracker"]>

  export type ResetTrackerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastReset?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["resetTracker"]>

  export type ResetTrackerSelectScalar = {
    id?: boolean
    lastReset?: boolean
    updatedAt?: boolean
  }

  export type ResetTrackerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lastReset" | "updatedAt", ExtArgs["result"]["resetTracker"]>

  export type $ResetTrackerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResetTracker"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lastReset: Date
      updatedAt: Date
    }, ExtArgs["result"]["resetTracker"]>
    composites: {}
  }

  type ResetTrackerGetPayload<S extends boolean | null | undefined | ResetTrackerDefaultArgs> = $Result.GetResult<Prisma.$ResetTrackerPayload, S>

  type ResetTrackerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResetTrackerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResetTrackerCountAggregateInputType | true
    }

  export interface ResetTrackerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResetTracker'], meta: { name: 'ResetTracker' } }
    /**
     * Find zero or one ResetTracker that matches the filter.
     * @param {ResetTrackerFindUniqueArgs} args - Arguments to find a ResetTracker
     * @example
     * // Get one ResetTracker
     * const resetTracker = await prisma.resetTracker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResetTrackerFindUniqueArgs>(args: SelectSubset<T, ResetTrackerFindUniqueArgs<ExtArgs>>): Prisma__ResetTrackerClient<$Result.GetResult<Prisma.$ResetTrackerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResetTracker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResetTrackerFindUniqueOrThrowArgs} args - Arguments to find a ResetTracker
     * @example
     * // Get one ResetTracker
     * const resetTracker = await prisma.resetTracker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResetTrackerFindUniqueOrThrowArgs>(args: SelectSubset<T, ResetTrackerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResetTrackerClient<$Result.GetResult<Prisma.$ResetTrackerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResetTracker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTrackerFindFirstArgs} args - Arguments to find a ResetTracker
     * @example
     * // Get one ResetTracker
     * const resetTracker = await prisma.resetTracker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResetTrackerFindFirstArgs>(args?: SelectSubset<T, ResetTrackerFindFirstArgs<ExtArgs>>): Prisma__ResetTrackerClient<$Result.GetResult<Prisma.$ResetTrackerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResetTracker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTrackerFindFirstOrThrowArgs} args - Arguments to find a ResetTracker
     * @example
     * // Get one ResetTracker
     * const resetTracker = await prisma.resetTracker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResetTrackerFindFirstOrThrowArgs>(args?: SelectSubset<T, ResetTrackerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResetTrackerClient<$Result.GetResult<Prisma.$ResetTrackerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResetTrackers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTrackerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResetTrackers
     * const resetTrackers = await prisma.resetTracker.findMany()
     * 
     * // Get first 10 ResetTrackers
     * const resetTrackers = await prisma.resetTracker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resetTrackerWithIdOnly = await prisma.resetTracker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResetTrackerFindManyArgs>(args?: SelectSubset<T, ResetTrackerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetTrackerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResetTracker.
     * @param {ResetTrackerCreateArgs} args - Arguments to create a ResetTracker.
     * @example
     * // Create one ResetTracker
     * const ResetTracker = await prisma.resetTracker.create({
     *   data: {
     *     // ... data to create a ResetTracker
     *   }
     * })
     * 
     */
    create<T extends ResetTrackerCreateArgs>(args: SelectSubset<T, ResetTrackerCreateArgs<ExtArgs>>): Prisma__ResetTrackerClient<$Result.GetResult<Prisma.$ResetTrackerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResetTrackers.
     * @param {ResetTrackerCreateManyArgs} args - Arguments to create many ResetTrackers.
     * @example
     * // Create many ResetTrackers
     * const resetTracker = await prisma.resetTracker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResetTrackerCreateManyArgs>(args?: SelectSubset<T, ResetTrackerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResetTrackers and returns the data saved in the database.
     * @param {ResetTrackerCreateManyAndReturnArgs} args - Arguments to create many ResetTrackers.
     * @example
     * // Create many ResetTrackers
     * const resetTracker = await prisma.resetTracker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResetTrackers and only return the `id`
     * const resetTrackerWithIdOnly = await prisma.resetTracker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResetTrackerCreateManyAndReturnArgs>(args?: SelectSubset<T, ResetTrackerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetTrackerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResetTracker.
     * @param {ResetTrackerDeleteArgs} args - Arguments to delete one ResetTracker.
     * @example
     * // Delete one ResetTracker
     * const ResetTracker = await prisma.resetTracker.delete({
     *   where: {
     *     // ... filter to delete one ResetTracker
     *   }
     * })
     * 
     */
    delete<T extends ResetTrackerDeleteArgs>(args: SelectSubset<T, ResetTrackerDeleteArgs<ExtArgs>>): Prisma__ResetTrackerClient<$Result.GetResult<Prisma.$ResetTrackerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResetTracker.
     * @param {ResetTrackerUpdateArgs} args - Arguments to update one ResetTracker.
     * @example
     * // Update one ResetTracker
     * const resetTracker = await prisma.resetTracker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResetTrackerUpdateArgs>(args: SelectSubset<T, ResetTrackerUpdateArgs<ExtArgs>>): Prisma__ResetTrackerClient<$Result.GetResult<Prisma.$ResetTrackerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResetTrackers.
     * @param {ResetTrackerDeleteManyArgs} args - Arguments to filter ResetTrackers to delete.
     * @example
     * // Delete a few ResetTrackers
     * const { count } = await prisma.resetTracker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResetTrackerDeleteManyArgs>(args?: SelectSubset<T, ResetTrackerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResetTrackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTrackerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResetTrackers
     * const resetTracker = await prisma.resetTracker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResetTrackerUpdateManyArgs>(args: SelectSubset<T, ResetTrackerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResetTrackers and returns the data updated in the database.
     * @param {ResetTrackerUpdateManyAndReturnArgs} args - Arguments to update many ResetTrackers.
     * @example
     * // Update many ResetTrackers
     * const resetTracker = await prisma.resetTracker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResetTrackers and only return the `id`
     * const resetTrackerWithIdOnly = await prisma.resetTracker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResetTrackerUpdateManyAndReturnArgs>(args: SelectSubset<T, ResetTrackerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetTrackerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResetTracker.
     * @param {ResetTrackerUpsertArgs} args - Arguments to update or create a ResetTracker.
     * @example
     * // Update or create a ResetTracker
     * const resetTracker = await prisma.resetTracker.upsert({
     *   create: {
     *     // ... data to create a ResetTracker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResetTracker we want to update
     *   }
     * })
     */
    upsert<T extends ResetTrackerUpsertArgs>(args: SelectSubset<T, ResetTrackerUpsertArgs<ExtArgs>>): Prisma__ResetTrackerClient<$Result.GetResult<Prisma.$ResetTrackerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResetTrackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTrackerCountArgs} args - Arguments to filter ResetTrackers to count.
     * @example
     * // Count the number of ResetTrackers
     * const count = await prisma.resetTracker.count({
     *   where: {
     *     // ... the filter for the ResetTrackers we want to count
     *   }
     * })
    **/
    count<T extends ResetTrackerCountArgs>(
      args?: Subset<T, ResetTrackerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResetTrackerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResetTracker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTrackerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResetTrackerAggregateArgs>(args: Subset<T, ResetTrackerAggregateArgs>): Prisma.PrismaPromise<GetResetTrackerAggregateType<T>>

    /**
     * Group by ResetTracker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTrackerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResetTrackerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResetTrackerGroupByArgs['orderBy'] }
        : { orderBy?: ResetTrackerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResetTrackerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResetTrackerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResetTracker model
   */
  readonly fields: ResetTrackerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResetTracker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResetTrackerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResetTracker model
   */
  interface ResetTrackerFieldRefs {
    readonly id: FieldRef<"ResetTracker", 'String'>
    readonly lastReset: FieldRef<"ResetTracker", 'DateTime'>
    readonly updatedAt: FieldRef<"ResetTracker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResetTracker findUnique
   */
  export type ResetTrackerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetTracker
     */
    select?: ResetTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetTracker
     */
    omit?: ResetTrackerOmit<ExtArgs> | null
    /**
     * Filter, which ResetTracker to fetch.
     */
    where: ResetTrackerWhereUniqueInput
  }

  /**
   * ResetTracker findUniqueOrThrow
   */
  export type ResetTrackerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetTracker
     */
    select?: ResetTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetTracker
     */
    omit?: ResetTrackerOmit<ExtArgs> | null
    /**
     * Filter, which ResetTracker to fetch.
     */
    where: ResetTrackerWhereUniqueInput
  }

  /**
   * ResetTracker findFirst
   */
  export type ResetTrackerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetTracker
     */
    select?: ResetTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetTracker
     */
    omit?: ResetTrackerOmit<ExtArgs> | null
    /**
     * Filter, which ResetTracker to fetch.
     */
    where?: ResetTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetTrackers to fetch.
     */
    orderBy?: ResetTrackerOrderByWithRelationInput | ResetTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResetTrackers.
     */
    cursor?: ResetTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetTrackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResetTrackers.
     */
    distinct?: ResetTrackerScalarFieldEnum | ResetTrackerScalarFieldEnum[]
  }

  /**
   * ResetTracker findFirstOrThrow
   */
  export type ResetTrackerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetTracker
     */
    select?: ResetTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetTracker
     */
    omit?: ResetTrackerOmit<ExtArgs> | null
    /**
     * Filter, which ResetTracker to fetch.
     */
    where?: ResetTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetTrackers to fetch.
     */
    orderBy?: ResetTrackerOrderByWithRelationInput | ResetTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResetTrackers.
     */
    cursor?: ResetTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetTrackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResetTrackers.
     */
    distinct?: ResetTrackerScalarFieldEnum | ResetTrackerScalarFieldEnum[]
  }

  /**
   * ResetTracker findMany
   */
  export type ResetTrackerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetTracker
     */
    select?: ResetTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetTracker
     */
    omit?: ResetTrackerOmit<ExtArgs> | null
    /**
     * Filter, which ResetTrackers to fetch.
     */
    where?: ResetTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetTrackers to fetch.
     */
    orderBy?: ResetTrackerOrderByWithRelationInput | ResetTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResetTrackers.
     */
    cursor?: ResetTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetTrackers.
     */
    skip?: number
    distinct?: ResetTrackerScalarFieldEnum | ResetTrackerScalarFieldEnum[]
  }

  /**
   * ResetTracker create
   */
  export type ResetTrackerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetTracker
     */
    select?: ResetTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetTracker
     */
    omit?: ResetTrackerOmit<ExtArgs> | null
    /**
     * The data needed to create a ResetTracker.
     */
    data: XOR<ResetTrackerCreateInput, ResetTrackerUncheckedCreateInput>
  }

  /**
   * ResetTracker createMany
   */
  export type ResetTrackerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResetTrackers.
     */
    data: ResetTrackerCreateManyInput | ResetTrackerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResetTracker createManyAndReturn
   */
  export type ResetTrackerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetTracker
     */
    select?: ResetTrackerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResetTracker
     */
    omit?: ResetTrackerOmit<ExtArgs> | null
    /**
     * The data used to create many ResetTrackers.
     */
    data: ResetTrackerCreateManyInput | ResetTrackerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResetTracker update
   */
  export type ResetTrackerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetTracker
     */
    select?: ResetTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetTracker
     */
    omit?: ResetTrackerOmit<ExtArgs> | null
    /**
     * The data needed to update a ResetTracker.
     */
    data: XOR<ResetTrackerUpdateInput, ResetTrackerUncheckedUpdateInput>
    /**
     * Choose, which ResetTracker to update.
     */
    where: ResetTrackerWhereUniqueInput
  }

  /**
   * ResetTracker updateMany
   */
  export type ResetTrackerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResetTrackers.
     */
    data: XOR<ResetTrackerUpdateManyMutationInput, ResetTrackerUncheckedUpdateManyInput>
    /**
     * Filter which ResetTrackers to update
     */
    where?: ResetTrackerWhereInput
    /**
     * Limit how many ResetTrackers to update.
     */
    limit?: number
  }

  /**
   * ResetTracker updateManyAndReturn
   */
  export type ResetTrackerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetTracker
     */
    select?: ResetTrackerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResetTracker
     */
    omit?: ResetTrackerOmit<ExtArgs> | null
    /**
     * The data used to update ResetTrackers.
     */
    data: XOR<ResetTrackerUpdateManyMutationInput, ResetTrackerUncheckedUpdateManyInput>
    /**
     * Filter which ResetTrackers to update
     */
    where?: ResetTrackerWhereInput
    /**
     * Limit how many ResetTrackers to update.
     */
    limit?: number
  }

  /**
   * ResetTracker upsert
   */
  export type ResetTrackerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetTracker
     */
    select?: ResetTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetTracker
     */
    omit?: ResetTrackerOmit<ExtArgs> | null
    /**
     * The filter to search for the ResetTracker to update in case it exists.
     */
    where: ResetTrackerWhereUniqueInput
    /**
     * In case the ResetTracker found by the `where` argument doesn't exist, create a new ResetTracker with this data.
     */
    create: XOR<ResetTrackerCreateInput, ResetTrackerUncheckedCreateInput>
    /**
     * In case the ResetTracker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResetTrackerUpdateInput, ResetTrackerUncheckedUpdateInput>
  }

  /**
   * ResetTracker delete
   */
  export type ResetTrackerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetTracker
     */
    select?: ResetTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetTracker
     */
    omit?: ResetTrackerOmit<ExtArgs> | null
    /**
     * Filter which ResetTracker to delete.
     */
    where: ResetTrackerWhereUniqueInput
  }

  /**
   * ResetTracker deleteMany
   */
  export type ResetTrackerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResetTrackers to delete
     */
    where?: ResetTrackerWhereInput
    /**
     * Limit how many ResetTrackers to delete.
     */
    limit?: number
  }

  /**
   * ResetTracker without action
   */
  export type ResetTrackerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetTracker
     */
    select?: ResetTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetTracker
     */
    omit?: ResetTrackerOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FoodOptionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon: 'icon',
    selected: 'selected',
    updatedAt: 'updatedAt'
  };

  export type FoodOptionScalarFieldEnum = (typeof FoodOptionScalarFieldEnum)[keyof typeof FoodOptionScalarFieldEnum]


  export const SeatSelectionScalarFieldEnum: {
    position: 'position',
    selected: 'selected',
    updatedAt: 'updatedAt'
  };

  export type SeatSelectionScalarFieldEnum = (typeof SeatSelectionScalarFieldEnum)[keyof typeof SeatSelectionScalarFieldEnum]


  export const ResetTrackerScalarFieldEnum: {
    id: 'id',
    lastReset: 'lastReset',
    updatedAt: 'updatedAt'
  };

  export type ResetTrackerScalarFieldEnum = (typeof ResetTrackerScalarFieldEnum)[keyof typeof ResetTrackerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type FoodOptionWhereInput = {
    AND?: FoodOptionWhereInput | FoodOptionWhereInput[]
    OR?: FoodOptionWhereInput[]
    NOT?: FoodOptionWhereInput | FoodOptionWhereInput[]
    id?: StringFilter<"FoodOption"> | string
    name?: StringFilter<"FoodOption"> | string
    icon?: StringFilter<"FoodOption"> | string
    selected?: BoolFilter<"FoodOption"> | boolean
    updatedAt?: DateTimeFilter<"FoodOption"> | Date | string
  }

  export type FoodOptionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    selected?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoodOptionWhereInput | FoodOptionWhereInput[]
    OR?: FoodOptionWhereInput[]
    NOT?: FoodOptionWhereInput | FoodOptionWhereInput[]
    name?: StringFilter<"FoodOption"> | string
    icon?: StringFilter<"FoodOption"> | string
    selected?: BoolFilter<"FoodOption"> | boolean
    updatedAt?: DateTimeFilter<"FoodOption"> | Date | string
  }, "id">

  export type FoodOptionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    selected?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodOptionCountOrderByAggregateInput
    _max?: FoodOptionMaxOrderByAggregateInput
    _min?: FoodOptionMinOrderByAggregateInput
  }

  export type FoodOptionScalarWhereWithAggregatesInput = {
    AND?: FoodOptionScalarWhereWithAggregatesInput | FoodOptionScalarWhereWithAggregatesInput[]
    OR?: FoodOptionScalarWhereWithAggregatesInput[]
    NOT?: FoodOptionScalarWhereWithAggregatesInput | FoodOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FoodOption"> | string
    name?: StringWithAggregatesFilter<"FoodOption"> | string
    icon?: StringWithAggregatesFilter<"FoodOption"> | string
    selected?: BoolWithAggregatesFilter<"FoodOption"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"FoodOption"> | Date | string
  }

  export type SeatSelectionWhereInput = {
    AND?: SeatSelectionWhereInput | SeatSelectionWhereInput[]
    OR?: SeatSelectionWhereInput[]
    NOT?: SeatSelectionWhereInput | SeatSelectionWhereInput[]
    position?: StringFilter<"SeatSelection"> | string
    selected?: BoolFilter<"SeatSelection"> | boolean
    updatedAt?: DateTimeFilter<"SeatSelection"> | Date | string
  }

  export type SeatSelectionOrderByWithRelationInput = {
    position?: SortOrder
    selected?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeatSelectionWhereUniqueInput = Prisma.AtLeast<{
    position?: string
    AND?: SeatSelectionWhereInput | SeatSelectionWhereInput[]
    OR?: SeatSelectionWhereInput[]
    NOT?: SeatSelectionWhereInput | SeatSelectionWhereInput[]
    selected?: BoolFilter<"SeatSelection"> | boolean
    updatedAt?: DateTimeFilter<"SeatSelection"> | Date | string
  }, "position">

  export type SeatSelectionOrderByWithAggregationInput = {
    position?: SortOrder
    selected?: SortOrder
    updatedAt?: SortOrder
    _count?: SeatSelectionCountOrderByAggregateInput
    _max?: SeatSelectionMaxOrderByAggregateInput
    _min?: SeatSelectionMinOrderByAggregateInput
  }

  export type SeatSelectionScalarWhereWithAggregatesInput = {
    AND?: SeatSelectionScalarWhereWithAggregatesInput | SeatSelectionScalarWhereWithAggregatesInput[]
    OR?: SeatSelectionScalarWhereWithAggregatesInput[]
    NOT?: SeatSelectionScalarWhereWithAggregatesInput | SeatSelectionScalarWhereWithAggregatesInput[]
    position?: StringWithAggregatesFilter<"SeatSelection"> | string
    selected?: BoolWithAggregatesFilter<"SeatSelection"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"SeatSelection"> | Date | string
  }

  export type ResetTrackerWhereInput = {
    AND?: ResetTrackerWhereInput | ResetTrackerWhereInput[]
    OR?: ResetTrackerWhereInput[]
    NOT?: ResetTrackerWhereInput | ResetTrackerWhereInput[]
    id?: StringFilter<"ResetTracker"> | string
    lastReset?: DateTimeFilter<"ResetTracker"> | Date | string
    updatedAt?: DateTimeFilter<"ResetTracker"> | Date | string
  }

  export type ResetTrackerOrderByWithRelationInput = {
    id?: SortOrder
    lastReset?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResetTrackerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResetTrackerWhereInput | ResetTrackerWhereInput[]
    OR?: ResetTrackerWhereInput[]
    NOT?: ResetTrackerWhereInput | ResetTrackerWhereInput[]
    lastReset?: DateTimeFilter<"ResetTracker"> | Date | string
    updatedAt?: DateTimeFilter<"ResetTracker"> | Date | string
  }, "id">

  export type ResetTrackerOrderByWithAggregationInput = {
    id?: SortOrder
    lastReset?: SortOrder
    updatedAt?: SortOrder
    _count?: ResetTrackerCountOrderByAggregateInput
    _max?: ResetTrackerMaxOrderByAggregateInput
    _min?: ResetTrackerMinOrderByAggregateInput
  }

  export type ResetTrackerScalarWhereWithAggregatesInput = {
    AND?: ResetTrackerScalarWhereWithAggregatesInput | ResetTrackerScalarWhereWithAggregatesInput[]
    OR?: ResetTrackerScalarWhereWithAggregatesInput[]
    NOT?: ResetTrackerScalarWhereWithAggregatesInput | ResetTrackerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResetTracker"> | string
    lastReset?: DateTimeWithAggregatesFilter<"ResetTracker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ResetTracker"> | Date | string
  }

  export type FoodOptionCreateInput = {
    id: string
    name: string
    icon: string
    selected?: boolean
    updatedAt?: Date | string
  }

  export type FoodOptionUncheckedCreateInput = {
    id: string
    name: string
    icon: string
    selected?: boolean
    updatedAt?: Date | string
  }

  export type FoodOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    selected?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    selected?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodOptionCreateManyInput = {
    id: string
    name: string
    icon: string
    selected?: boolean
    updatedAt?: Date | string
  }

  export type FoodOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    selected?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    selected?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatSelectionCreateInput = {
    position: string
    selected?: boolean
    updatedAt?: Date | string
  }

  export type SeatSelectionUncheckedCreateInput = {
    position: string
    selected?: boolean
    updatedAt?: Date | string
  }

  export type SeatSelectionUpdateInput = {
    position?: StringFieldUpdateOperationsInput | string
    selected?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatSelectionUncheckedUpdateInput = {
    position?: StringFieldUpdateOperationsInput | string
    selected?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatSelectionCreateManyInput = {
    position: string
    selected?: boolean
    updatedAt?: Date | string
  }

  export type SeatSelectionUpdateManyMutationInput = {
    position?: StringFieldUpdateOperationsInput | string
    selected?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatSelectionUncheckedUpdateManyInput = {
    position?: StringFieldUpdateOperationsInput | string
    selected?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetTrackerCreateInput = {
    id?: string
    lastReset: Date | string
    updatedAt?: Date | string
  }

  export type ResetTrackerUncheckedCreateInput = {
    id?: string
    lastReset: Date | string
    updatedAt?: Date | string
  }

  export type ResetTrackerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastReset?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetTrackerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastReset?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetTrackerCreateManyInput = {
    id?: string
    lastReset: Date | string
    updatedAt?: Date | string
  }

  export type ResetTrackerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastReset?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetTrackerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastReset?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FoodOptionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    selected?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    selected?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodOptionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    selected?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SeatSelectionCountOrderByAggregateInput = {
    position?: SortOrder
    selected?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeatSelectionMaxOrderByAggregateInput = {
    position?: SortOrder
    selected?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeatSelectionMinOrderByAggregateInput = {
    position?: SortOrder
    selected?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResetTrackerCountOrderByAggregateInput = {
    id?: SortOrder
    lastReset?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResetTrackerMaxOrderByAggregateInput = {
    id?: SortOrder
    lastReset?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResetTrackerMinOrderByAggregateInput = {
    id?: SortOrder
    lastReset?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}