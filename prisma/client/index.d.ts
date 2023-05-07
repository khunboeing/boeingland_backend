
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Ticket
 * 
 */
export type Ticket = {
  ticketId: number
  title: string
  description: string
  levelId: number
  statusId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model Contact
 * 
 */
export type Contact = {
  contactId: number
  name: string
  tel: string
  age: number
  email: string
  ticketId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model Level
 * 
 */
export type Level = {
  levelId: number
  name: string
  zone: string
  createAt: Date
  updateAt: Date
}

/**
 * Model Status
 * 
 */
export type Status = {
  statusId: number
  name: string
  createAt: Date
  updateAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tickets
 * const tickets = await prisma.ticket.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tickets
   * const tickets = await prisma.ticket.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<GlobalReject>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<GlobalReject>;

  /**
   * `prisma.level`: Exposes CRUD operations for the **Level** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Levels
    * const levels = await prisma.level.findMany()
    * ```
    */
  get level(): Prisma.LevelDelegate<GlobalReject>;

  /**
   * `prisma.status`: Exposes CRUD operations for the **Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.status.findMany()
    * ```
    */
  get status(): Prisma.StatusDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.13.0
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Ticket: 'Ticket',
    Contact: 'Contact',
    Level: 'Level',
    Status: 'Status'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LevelCountOutputType
   */


  export type LevelCountOutputType = {
    Ticket: number
  }

  export type LevelCountOutputTypeSelect = {
    Ticket?: boolean
  }

  export type LevelCountOutputTypeGetPayload<S extends boolean | null | undefined | LevelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LevelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (LevelCountOutputTypeArgs)
    ? LevelCountOutputType 
    : S extends { select: any } & (LevelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof LevelCountOutputType ? LevelCountOutputType[P] : never
  } 
      : LevelCountOutputType




  // Custom InputTypes

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LevelCountOutputType
     */
    select?: LevelCountOutputTypeSelect | null
  }



  /**
   * Count Type StatusCountOutputType
   */


  export type StatusCountOutputType = {
    Ticket: number
  }

  export type StatusCountOutputTypeSelect = {
    Ticket?: boolean
  }

  export type StatusCountOutputTypeGetPayload<S extends boolean | null | undefined | StatusCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StatusCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (StatusCountOutputTypeArgs)
    ? StatusCountOutputType 
    : S extends { select: any } & (StatusCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof StatusCountOutputType ? StatusCountOutputType[P] : never
  } 
      : StatusCountOutputType




  // Custom InputTypes

  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StatusCountOutputType
     */
    select?: StatusCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Ticket
   */


  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    ticketId: number | null
    levelId: number | null
    statusId: number | null
  }

  export type TicketSumAggregateOutputType = {
    ticketId: number | null
    levelId: number | null
    statusId: number | null
  }

  export type TicketMinAggregateOutputType = {
    ticketId: number | null
    title: string | null
    description: string | null
    levelId: number | null
    statusId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    ticketId: number | null
    title: string | null
    description: string | null
    levelId: number | null
    statusId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    ticketId: number
    title: number
    description: number
    levelId: number
    statusId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    ticketId?: true
    levelId?: true
    statusId?: true
  }

  export type TicketSumAggregateInputType = {
    ticketId?: true
    levelId?: true
    statusId?: true
  }

  export type TicketMinAggregateInputType = {
    ticketId?: true
    title?: true
    description?: true
    levelId?: true
    statusId?: true
    createAt?: true
    updateAt?: true
  }

  export type TicketMaxAggregateInputType = {
    ticketId?: true
    title?: true
    description?: true
    levelId?: true
    statusId?: true
    createAt?: true
    updateAt?: true
  }

  export type TicketCountAggregateInputType = {
    ticketId?: true
    title?: true
    description?: true
    levelId?: true
    statusId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type TicketAggregateArgs = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: Enumerable<TicketOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs = {
    where?: TicketWhereInput
    orderBy?: Enumerable<TicketOrderByWithAggregationInput>
    by: TicketScalarFieldEnum[]
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }


  export type TicketGroupByOutputType = {
    ticketId: number
    title: string
    description: string
    levelId: number
    statusId: number
    createAt: Date
    updateAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect = {
    ticketId?: boolean
    title?: boolean
    description?: boolean
    levelId?: boolean
    statusId?: boolean
    createAt?: boolean
    updateAt?: boolean
    level?: boolean | LevelArgs
    status?: boolean | StatusArgs
    Contact?: boolean | ContactArgs
  }


  export type TicketInclude = {
    level?: boolean | LevelArgs
    status?: boolean | StatusArgs
    Contact?: boolean | ContactArgs
  }

  export type TicketGetPayload<S extends boolean | null | undefined | TicketArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Ticket :
    S extends undefined ? never :
    S extends { include: any } & (TicketArgs | TicketFindManyArgs)
    ? Ticket  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'level' ? LevelGetPayload<S['include'][P]> :
        P extends 'status' ? StatusGetPayload<S['include'][P]> :
        P extends 'Contact' ? ContactGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (TicketArgs | TicketFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'level' ? LevelGetPayload<S['select'][P]> :
        P extends 'status' ? StatusGetPayload<S['select'][P]> :
        P extends 'Contact' ? ContactGetPayload<S['select'][P]> | null :  P extends keyof Ticket ? Ticket[P] : never
  } 
      : Ticket


  type TicketCountArgs = 
    Omit<TicketFindManyArgs, 'select' | 'include'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TicketFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TicketFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Ticket'> extends True ? Prisma__TicketClient<TicketGetPayload<T>> : Prisma__TicketClient<TicketGetPayload<T> | null, null>

    /**
     * Find one Ticket that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TicketFindUniqueOrThrowArgs>
    ): Prisma__TicketClient<TicketGetPayload<T>>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TicketFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TicketFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Ticket'> extends True ? Prisma__TicketClient<TicketGetPayload<T>> : Prisma__TicketClient<TicketGetPayload<T> | null, null>

    /**
     * Find the first Ticket that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TicketFindFirstOrThrowArgs>
    ): Prisma__TicketClient<TicketGetPayload<T>>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `ticketId`
     * const ticketWithTicketIdOnly = await prisma.ticket.findMany({ select: { ticketId: true } })
     * 
    **/
    findMany<T extends TicketFindManyArgs>(
      args?: SelectSubset<T, TicketFindManyArgs>
    ): Prisma.PrismaPromise<Array<TicketGetPayload<T>>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
    **/
    create<T extends TicketCreateArgs>(
      args: SelectSubset<T, TicketCreateArgs>
    ): Prisma__TicketClient<TicketGetPayload<T>>

    /**
     * Create many Tickets.
     *     @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     *     @example
     *     // Create many Tickets
     *     const ticket = await prisma.ticket.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TicketCreateManyArgs>(
      args?: SelectSubset<T, TicketCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
    **/
    delete<T extends TicketDeleteArgs>(
      args: SelectSubset<T, TicketDeleteArgs>
    ): Prisma__TicketClient<TicketGetPayload<T>>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TicketUpdateArgs>(
      args: SelectSubset<T, TicketUpdateArgs>
    ): Prisma__TicketClient<TicketGetPayload<T>>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TicketDeleteManyArgs>(
      args?: SelectSubset<T, TicketDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TicketUpdateManyArgs>(
      args: SelectSubset<T, TicketUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
    **/
    upsert<T extends TicketUpsertArgs>(
      args: SelectSubset<T, TicketUpsertArgs>
    ): Prisma__TicketClient<TicketGetPayload<T>>

    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TicketClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    level<T extends LevelArgs= {}>(args?: Subset<T, LevelArgs>): Prisma__LevelClient<LevelGetPayload<T> | Null>;

    status<T extends StatusArgs= {}>(args?: Subset<T, StatusArgs>): Prisma__StatusClient<StatusGetPayload<T> | Null>;

    Contact<T extends ContactArgs= {}>(args?: Subset<T, ContactArgs>): Prisma__ContactClient<ContactGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Ticket base type for findUnique actions
   */
  export type TicketFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUnique
   */
  export interface TicketFindUniqueArgs extends TicketFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket base type for findFirst actions
   */
  export type TicketFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: Enumerable<TicketOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: Enumerable<TicketScalarFieldEnum>
  }

  /**
   * Ticket findFirst
   */
  export interface TicketFindFirstArgs extends TicketFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: Enumerable<TicketOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: Enumerable<TicketScalarFieldEnum>
  }


  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: Enumerable<TicketOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: Enumerable<TicketScalarFieldEnum>
  }


  /**
   * Ticket create
   */
  export type TicketCreateArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }


  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs = {
    /**
     * The data used to create many Tickets.
     */
    data: Enumerable<TicketCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Ticket update
   */
  export type TicketUpdateArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }


  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }


  /**
   * Ticket delete
   */
  export type TicketDeleteArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }


  /**
   * Ticket without action
   */
  export type TicketArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
  }



  /**
   * Model Contact
   */


  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    contactId: number | null
    age: number | null
    ticketId: number | null
  }

  export type ContactSumAggregateOutputType = {
    contactId: number | null
    age: number | null
    ticketId: number | null
  }

  export type ContactMinAggregateOutputType = {
    contactId: number | null
    name: string | null
    tel: string | null
    age: number | null
    email: string | null
    ticketId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    contactId: number | null
    name: string | null
    tel: string | null
    age: number | null
    email: string | null
    ticketId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    contactId: number
    name: number
    tel: number
    age: number
    email: number
    ticketId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    contactId?: true
    age?: true
    ticketId?: true
  }

  export type ContactSumAggregateInputType = {
    contactId?: true
    age?: true
    ticketId?: true
  }

  export type ContactMinAggregateInputType = {
    contactId?: true
    name?: true
    tel?: true
    age?: true
    email?: true
    ticketId?: true
    createAt?: true
    updateAt?: true
  }

  export type ContactMaxAggregateInputType = {
    contactId?: true
    name?: true
    tel?: true
    age?: true
    email?: true
    ticketId?: true
    createAt?: true
    updateAt?: true
  }

  export type ContactCountAggregateInputType = {
    contactId?: true
    name?: true
    tel?: true
    age?: true
    email?: true
    ticketId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ContactAggregateArgs = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs = {
    where?: ContactWhereInput
    orderBy?: Enumerable<ContactOrderByWithAggregationInput>
    by: ContactScalarFieldEnum[]
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }


  export type ContactGroupByOutputType = {
    contactId: number
    name: string
    tel: string
    age: number
    email: string
    ticketId: number
    createAt: Date
    updateAt: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect = {
    contactId?: boolean
    name?: boolean
    tel?: boolean
    age?: boolean
    email?: boolean
    ticketId?: boolean
    createAt?: boolean
    updateAt?: boolean
    ticket?: boolean | TicketArgs
  }


  export type ContactInclude = {
    ticket?: boolean | TicketArgs
  }

  export type ContactGetPayload<S extends boolean | null | undefined | ContactArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Contact :
    S extends undefined ? never :
    S extends { include: any } & (ContactArgs | ContactFindManyArgs)
    ? Contact  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ticket' ? TicketGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ContactArgs | ContactFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ticket' ? TicketGetPayload<S['select'][P]> :  P extends keyof Contact ? Contact[P] : never
  } 
      : Contact


  type ContactCountArgs = 
    Omit<ContactFindManyArgs, 'select' | 'include'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ContactFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Contact'> extends True ? Prisma__ContactClient<ContactGetPayload<T>> : Prisma__ContactClient<ContactGetPayload<T> | null, null>

    /**
     * Find one Contact that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ContactFindUniqueOrThrowArgs>
    ): Prisma__ContactClient<ContactGetPayload<T>>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ContactFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Contact'> extends True ? Prisma__ContactClient<ContactGetPayload<T>> : Prisma__ContactClient<ContactGetPayload<T> | null, null>

    /**
     * Find the first Contact that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ContactFindFirstOrThrowArgs>
    ): Prisma__ContactClient<ContactGetPayload<T>>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `contactId`
     * const contactWithContactIdOnly = await prisma.contact.findMany({ select: { contactId: true } })
     * 
    **/
    findMany<T extends ContactFindManyArgs>(
      args?: SelectSubset<T, ContactFindManyArgs>
    ): Prisma.PrismaPromise<Array<ContactGetPayload<T>>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
    **/
    create<T extends ContactCreateArgs>(
      args: SelectSubset<T, ContactCreateArgs>
    ): Prisma__ContactClient<ContactGetPayload<T>>

    /**
     * Create many Contacts.
     *     @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     *     @example
     *     // Create many Contacts
     *     const contact = await prisma.contact.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContactCreateManyArgs>(
      args?: SelectSubset<T, ContactCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
    **/
    delete<T extends ContactDeleteArgs>(
      args: SelectSubset<T, ContactDeleteArgs>
    ): Prisma__ContactClient<ContactGetPayload<T>>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactUpdateArgs>(
      args: SelectSubset<T, ContactUpdateArgs>
    ): Prisma__ContactClient<ContactGetPayload<T>>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactDeleteManyArgs>(
      args?: SelectSubset<T, ContactDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactUpdateManyArgs>(
      args: SelectSubset<T, ContactUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
    **/
    upsert<T extends ContactUpsertArgs>(
      args: SelectSubset<T, ContactUpsertArgs>
    ): Prisma__ContactClient<ContactGetPayload<T>>

    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ContactClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ticket<T extends TicketArgs= {}>(args?: Subset<T, TicketArgs>): Prisma__TicketClient<TicketGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Contact base type for findUnique actions
   */
  export type ContactFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUnique
   */
  export interface ContactFindUniqueArgs extends ContactFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact base type for findFirst actions
   */
  export type ContactFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: Enumerable<ContactScalarFieldEnum>
  }

  /**
   * Contact findFirst
   */
  export interface ContactFindFirstArgs extends ContactFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: Enumerable<ContactScalarFieldEnum>
  }


  /**
   * Contact findMany
   */
  export type ContactFindManyArgs = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: Enumerable<ContactScalarFieldEnum>
  }


  /**
   * Contact create
   */
  export type ContactCreateArgs = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }


  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs = {
    /**
     * The data used to create many Contacts.
     */
    data: Enumerable<ContactCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Contact update
   */
  export type ContactUpdateArgs = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
  }


  /**
   * Contact upsert
   */
  export type ContactUpsertArgs = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }


  /**
   * Contact delete
   */
  export type ContactDeleteArgs = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
  }


  /**
   * Contact without action
   */
  export type ContactArgs = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude | null
  }



  /**
   * Model Level
   */


  export type AggregateLevel = {
    _count: LevelCountAggregateOutputType | null
    _avg: LevelAvgAggregateOutputType | null
    _sum: LevelSumAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  export type LevelAvgAggregateOutputType = {
    levelId: number | null
  }

  export type LevelSumAggregateOutputType = {
    levelId: number | null
  }

  export type LevelMinAggregateOutputType = {
    levelId: number | null
    name: string | null
    zone: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type LevelMaxAggregateOutputType = {
    levelId: number | null
    name: string | null
    zone: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type LevelCountAggregateOutputType = {
    levelId: number
    name: number
    zone: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type LevelAvgAggregateInputType = {
    levelId?: true
  }

  export type LevelSumAggregateInputType = {
    levelId?: true
  }

  export type LevelMinAggregateInputType = {
    levelId?: true
    name?: true
    zone?: true
    createAt?: true
    updateAt?: true
  }

  export type LevelMaxAggregateInputType = {
    levelId?: true
    name?: true
    zone?: true
    createAt?: true
    updateAt?: true
  }

  export type LevelCountAggregateInputType = {
    levelId?: true
    name?: true
    zone?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type LevelAggregateArgs = {
    /**
     * Filter which Level to aggregate.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: Enumerable<LevelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Levels
    **/
    _count?: true | LevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelMaxAggregateInputType
  }

  export type GetLevelAggregateType<T extends LevelAggregateArgs> = {
        [P in keyof T & keyof AggregateLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevel[P]>
      : GetScalarType<T[P], AggregateLevel[P]>
  }




  export type LevelGroupByArgs = {
    where?: LevelWhereInput
    orderBy?: Enumerable<LevelOrderByWithAggregationInput>
    by: LevelScalarFieldEnum[]
    having?: LevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelCountAggregateInputType | true
    _avg?: LevelAvgAggregateInputType
    _sum?: LevelSumAggregateInputType
    _min?: LevelMinAggregateInputType
    _max?: LevelMaxAggregateInputType
  }


  export type LevelGroupByOutputType = {
    levelId: number
    name: string
    zone: string
    createAt: Date
    updateAt: Date
    _count: LevelCountAggregateOutputType | null
    _avg: LevelAvgAggregateOutputType | null
    _sum: LevelSumAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  type GetLevelGroupByPayload<T extends LevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelGroupByOutputType[P]>
            : GetScalarType<T[P], LevelGroupByOutputType[P]>
        }
      >
    >


  export type LevelSelect = {
    levelId?: boolean
    name?: boolean
    zone?: boolean
    createAt?: boolean
    updateAt?: boolean
    Ticket?: boolean | Level$TicketArgs
    _count?: boolean | LevelCountOutputTypeArgs
  }


  export type LevelInclude = {
    Ticket?: boolean | Level$TicketArgs
    _count?: boolean | LevelCountOutputTypeArgs
  }

  export type LevelGetPayload<S extends boolean | null | undefined | LevelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Level :
    S extends undefined ? never :
    S extends { include: any } & (LevelArgs | LevelFindManyArgs)
    ? Level  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Ticket' ? Array < TicketGetPayload<S['include'][P]>>  :
        P extends '_count' ? LevelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (LevelArgs | LevelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Ticket' ? Array < TicketGetPayload<S['select'][P]>>  :
        P extends '_count' ? LevelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Level ? Level[P] : never
  } 
      : Level


  type LevelCountArgs = 
    Omit<LevelFindManyArgs, 'select' | 'include'> & {
      select?: LevelCountAggregateInputType | true
    }

  export interface LevelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Level that matches the filter.
     * @param {LevelFindUniqueArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LevelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LevelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Level'> extends True ? Prisma__LevelClient<LevelGetPayload<T>> : Prisma__LevelClient<LevelGetPayload<T> | null, null>

    /**
     * Find one Level that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LevelFindUniqueOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LevelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LevelFindUniqueOrThrowArgs>
    ): Prisma__LevelClient<LevelGetPayload<T>>

    /**
     * Find the first Level that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LevelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LevelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Level'> extends True ? Prisma__LevelClient<LevelGetPayload<T>> : Prisma__LevelClient<LevelGetPayload<T> | null, null>

    /**
     * Find the first Level that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LevelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LevelFindFirstOrThrowArgs>
    ): Prisma__LevelClient<LevelGetPayload<T>>

    /**
     * Find zero or more Levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Levels
     * const levels = await prisma.level.findMany()
     * 
     * // Get first 10 Levels
     * const levels = await prisma.level.findMany({ take: 10 })
     * 
     * // Only select the `levelId`
     * const levelWithLevelIdOnly = await prisma.level.findMany({ select: { levelId: true } })
     * 
    **/
    findMany<T extends LevelFindManyArgs>(
      args?: SelectSubset<T, LevelFindManyArgs>
    ): Prisma.PrismaPromise<Array<LevelGetPayload<T>>>

    /**
     * Create a Level.
     * @param {LevelCreateArgs} args - Arguments to create a Level.
     * @example
     * // Create one Level
     * const Level = await prisma.level.create({
     *   data: {
     *     // ... data to create a Level
     *   }
     * })
     * 
    **/
    create<T extends LevelCreateArgs>(
      args: SelectSubset<T, LevelCreateArgs>
    ): Prisma__LevelClient<LevelGetPayload<T>>

    /**
     * Create many Levels.
     *     @param {LevelCreateManyArgs} args - Arguments to create many Levels.
     *     @example
     *     // Create many Levels
     *     const level = await prisma.level.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LevelCreateManyArgs>(
      args?: SelectSubset<T, LevelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Level.
     * @param {LevelDeleteArgs} args - Arguments to delete one Level.
     * @example
     * // Delete one Level
     * const Level = await prisma.level.delete({
     *   where: {
     *     // ... filter to delete one Level
     *   }
     * })
     * 
    **/
    delete<T extends LevelDeleteArgs>(
      args: SelectSubset<T, LevelDeleteArgs>
    ): Prisma__LevelClient<LevelGetPayload<T>>

    /**
     * Update one Level.
     * @param {LevelUpdateArgs} args - Arguments to update one Level.
     * @example
     * // Update one Level
     * const level = await prisma.level.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LevelUpdateArgs>(
      args: SelectSubset<T, LevelUpdateArgs>
    ): Prisma__LevelClient<LevelGetPayload<T>>

    /**
     * Delete zero or more Levels.
     * @param {LevelDeleteManyArgs} args - Arguments to filter Levels to delete.
     * @example
     * // Delete a few Levels
     * const { count } = await prisma.level.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LevelDeleteManyArgs>(
      args?: SelectSubset<T, LevelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LevelUpdateManyArgs>(
      args: SelectSubset<T, LevelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Level.
     * @param {LevelUpsertArgs} args - Arguments to update or create a Level.
     * @example
     * // Update or create a Level
     * const level = await prisma.level.upsert({
     *   create: {
     *     // ... data to create a Level
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Level we want to update
     *   }
     * })
    **/
    upsert<T extends LevelUpsertArgs>(
      args: SelectSubset<T, LevelUpsertArgs>
    ): Prisma__LevelClient<LevelGetPayload<T>>

    /**
     * Count the number of Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelCountArgs} args - Arguments to filter Levels to count.
     * @example
     * // Count the number of Levels
     * const count = await prisma.level.count({
     *   where: {
     *     // ... the filter for the Levels we want to count
     *   }
     * })
    **/
    count<T extends LevelCountArgs>(
      args?: Subset<T, LevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LevelAggregateArgs>(args: Subset<T, LevelAggregateArgs>): Prisma.PrismaPromise<GetLevelAggregateType<T>>

    /**
     * Group by Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelGroupByArgs} args - Group by arguments.
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
      T extends LevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelGroupByArgs['orderBy'] }
        : { orderBy?: LevelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Level.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LevelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Ticket<T extends Level$TicketArgs= {}>(args?: Subset<T, Level$TicketArgs>): Prisma.PrismaPromise<Array<TicketGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Level base type for findUnique actions
   */
  export type LevelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LevelInclude | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findUnique
   */
  export interface LevelFindUniqueArgs extends LevelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Level findUniqueOrThrow
   */
  export type LevelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LevelInclude | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }


  /**
   * Level base type for findFirst actions
   */
  export type LevelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LevelInclude | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: Enumerable<LevelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: Enumerable<LevelScalarFieldEnum>
  }

  /**
   * Level findFirst
   */
  export interface LevelFindFirstArgs extends LevelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Level findFirstOrThrow
   */
  export type LevelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LevelInclude | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: Enumerable<LevelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: Enumerable<LevelScalarFieldEnum>
  }


  /**
   * Level findMany
   */
  export type LevelFindManyArgs = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LevelInclude | null
    /**
     * Filter, which Levels to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: Enumerable<LevelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    distinct?: Enumerable<LevelScalarFieldEnum>
  }


  /**
   * Level create
   */
  export type LevelCreateArgs = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LevelInclude | null
    /**
     * The data needed to create a Level.
     */
    data: XOR<LevelCreateInput, LevelUncheckedCreateInput>
  }


  /**
   * Level createMany
   */
  export type LevelCreateManyArgs = {
    /**
     * The data used to create many Levels.
     */
    data: Enumerable<LevelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Level update
   */
  export type LevelUpdateArgs = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LevelInclude | null
    /**
     * The data needed to update a Level.
     */
    data: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
    /**
     * Choose, which Level to update.
     */
    where: LevelWhereUniqueInput
  }


  /**
   * Level updateMany
   */
  export type LevelUpdateManyArgs = {
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
  }


  /**
   * Level upsert
   */
  export type LevelUpsertArgs = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LevelInclude | null
    /**
     * The filter to search for the Level to update in case it exists.
     */
    where: LevelWhereUniqueInput
    /**
     * In case the Level found by the `where` argument doesn't exist, create a new Level with this data.
     */
    create: XOR<LevelCreateInput, LevelUncheckedCreateInput>
    /**
     * In case the Level was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
  }


  /**
   * Level delete
   */
  export type LevelDeleteArgs = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LevelInclude | null
    /**
     * Filter which Level to delete.
     */
    where: LevelWhereUniqueInput
  }


  /**
   * Level deleteMany
   */
  export type LevelDeleteManyArgs = {
    /**
     * Filter which Levels to delete
     */
    where?: LevelWhereInput
  }


  /**
   * Level.Ticket
   */
  export type Level$TicketArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    where?: TicketWhereInput
    orderBy?: Enumerable<TicketOrderByWithRelationInput>
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TicketScalarFieldEnum>
  }


  /**
   * Level without action
   */
  export type LevelArgs = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LevelInclude | null
  }



  /**
   * Model Status
   */


  export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export type StatusAvgAggregateOutputType = {
    statusId: number | null
  }

  export type StatusSumAggregateOutputType = {
    statusId: number | null
  }

  export type StatusMinAggregateOutputType = {
    statusId: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type StatusMaxAggregateOutputType = {
    statusId: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type StatusCountAggregateOutputType = {
    statusId: number
    name: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type StatusAvgAggregateInputType = {
    statusId?: true
  }

  export type StatusSumAggregateInputType = {
    statusId?: true
  }

  export type StatusMinAggregateInputType = {
    statusId?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type StatusMaxAggregateInputType = {
    statusId?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type StatusCountAggregateInputType = {
    statusId?: true
    name?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type StatusAggregateArgs = {
    /**
     * Filter which Status to aggregate.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: Enumerable<StatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statuses
    **/
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }




  export type StatusGroupByArgs = {
    where?: StatusWhereInput
    orderBy?: Enumerable<StatusOrderByWithAggregationInput>
    by: StatusScalarFieldEnum[]
    having?: StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _avg?: StatusAvgAggregateInputType
    _sum?: StatusSumAggregateInputType
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }


  export type StatusGroupByOutputType = {
    statusId: number
    name: string
    createAt: Date
    updateAt: Date
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusGroupByOutputType[P]>
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
        }
      >
    >


  export type StatusSelect = {
    statusId?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
    Ticket?: boolean | Status$TicketArgs
    _count?: boolean | StatusCountOutputTypeArgs
  }


  export type StatusInclude = {
    Ticket?: boolean | Status$TicketArgs
    _count?: boolean | StatusCountOutputTypeArgs
  }

  export type StatusGetPayload<S extends boolean | null | undefined | StatusArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Status :
    S extends undefined ? never :
    S extends { include: any } & (StatusArgs | StatusFindManyArgs)
    ? Status  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Ticket' ? Array < TicketGetPayload<S['include'][P]>>  :
        P extends '_count' ? StatusCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (StatusArgs | StatusFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Ticket' ? Array < TicketGetPayload<S['select'][P]>>  :
        P extends '_count' ? StatusCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Status ? Status[P] : never
  } 
      : Status


  type StatusCountArgs = 
    Omit<StatusFindManyArgs, 'select' | 'include'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface StatusDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Status that matches the filter.
     * @param {StatusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StatusFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StatusFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Status'> extends True ? Prisma__StatusClient<StatusGetPayload<T>> : Prisma__StatusClient<StatusGetPayload<T> | null, null>

    /**
     * Find one Status that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StatusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StatusFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StatusFindUniqueOrThrowArgs>
    ): Prisma__StatusClient<StatusGetPayload<T>>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StatusFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StatusFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Status'> extends True ? Prisma__StatusClient<StatusGetPayload<T>> : Prisma__StatusClient<StatusGetPayload<T> | null, null>

    /**
     * Find the first Status that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StatusFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StatusFindFirstOrThrowArgs>
    ): Prisma__StatusClient<StatusGetPayload<T>>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     * 
     * // Only select the `statusId`
     * const statusWithStatusIdOnly = await prisma.status.findMany({ select: { statusId: true } })
     * 
    **/
    findMany<T extends StatusFindManyArgs>(
      args?: SelectSubset<T, StatusFindManyArgs>
    ): Prisma.PrismaPromise<Array<StatusGetPayload<T>>>

    /**
     * Create a Status.
     * @param {StatusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     * 
    **/
    create<T extends StatusCreateArgs>(
      args: SelectSubset<T, StatusCreateArgs>
    ): Prisma__StatusClient<StatusGetPayload<T>>

    /**
     * Create many Statuses.
     *     @param {StatusCreateManyArgs} args - Arguments to create many Statuses.
     *     @example
     *     // Create many Statuses
     *     const status = await prisma.status.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StatusCreateManyArgs>(
      args?: SelectSubset<T, StatusCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Status.
     * @param {StatusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     * 
    **/
    delete<T extends StatusDeleteArgs>(
      args: SelectSubset<T, StatusDeleteArgs>
    ): Prisma__StatusClient<StatusGetPayload<T>>

    /**
     * Update one Status.
     * @param {StatusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StatusUpdateArgs>(
      args: SelectSubset<T, StatusUpdateArgs>
    ): Prisma__StatusClient<StatusGetPayload<T>>

    /**
     * Delete zero or more Statuses.
     * @param {StatusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StatusDeleteManyArgs>(
      args?: SelectSubset<T, StatusDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StatusUpdateManyArgs>(
      args: SelectSubset<T, StatusUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Status.
     * @param {StatusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
    **/
    upsert<T extends StatusUpsertArgs>(
      args: SelectSubset<T, StatusUpsertArgs>
    ): Prisma__StatusClient<StatusGetPayload<T>>

    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends StatusCountArgs>(
      args?: Subset<T, StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusGroupByArgs} args - Group by arguments.
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
      T extends StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusGroupByArgs['orderBy'] }
        : { orderBy?: StatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StatusClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Ticket<T extends Status$TicketArgs= {}>(args?: Subset<T, Status$TicketArgs>): Prisma.PrismaPromise<Array<TicketGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Status base type for findUnique actions
   */
  export type StatusFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findUnique
   */
  export interface StatusFindUniqueArgs extends StatusFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Status findUniqueOrThrow
   */
  export type StatusFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }


  /**
   * Status base type for findFirst actions
   */
  export type StatusFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: Enumerable<StatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: Enumerable<StatusScalarFieldEnum>
  }

  /**
   * Status findFirst
   */
  export interface StatusFindFirstArgs extends StatusFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Status findFirstOrThrow
   */
  export type StatusFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: Enumerable<StatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: Enumerable<StatusScalarFieldEnum>
  }


  /**
   * Status findMany
   */
  export type StatusFindManyArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * Filter, which Statuses to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: Enumerable<StatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    distinct?: Enumerable<StatusScalarFieldEnum>
  }


  /**
   * Status create
   */
  export type StatusCreateArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * The data needed to create a Status.
     */
    data: XOR<StatusCreateInput, StatusUncheckedCreateInput>
  }


  /**
   * Status createMany
   */
  export type StatusCreateManyArgs = {
    /**
     * The data used to create many Statuses.
     */
    data: Enumerable<StatusCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Status update
   */
  export type StatusUpdateArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * The data needed to update a Status.
     */
    data: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
    /**
     * Choose, which Status to update.
     */
    where: StatusWhereUniqueInput
  }


  /**
   * Status updateMany
   */
  export type StatusUpdateManyArgs = {
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
  }


  /**
   * Status upsert
   */
  export type StatusUpsertArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * The filter to search for the Status to update in case it exists.
     */
    where: StatusWhereUniqueInput
    /**
     * In case the Status found by the `where` argument doesn't exist, create a new Status with this data.
     */
    create: XOR<StatusCreateInput, StatusUncheckedCreateInput>
    /**
     * In case the Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
  }


  /**
   * Status delete
   */
  export type StatusDeleteArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
    /**
     * Filter which Status to delete.
     */
    where: StatusWhereUniqueInput
  }


  /**
   * Status deleteMany
   */
  export type StatusDeleteManyArgs = {
    /**
     * Filter which Statuses to delete
     */
    where?: StatusWhereInput
  }


  /**
   * Status.Ticket
   */
  export type Status$TicketArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    where?: TicketWhereInput
    orderBy?: Enumerable<TicketOrderByWithRelationInput>
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TicketScalarFieldEnum>
  }


  /**
   * Status without action
   */
  export type StatusArgs = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StatusInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ContactScalarFieldEnum: {
    contactId: 'contactId',
    name: 'name',
    tel: 'tel',
    age: 'age',
    email: 'email',
    ticketId: 'ticketId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const LevelScalarFieldEnum: {
    levelId: 'levelId',
    name: 'name',
    zone: 'zone',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type LevelScalarFieldEnum = (typeof LevelScalarFieldEnum)[keyof typeof LevelScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StatusScalarFieldEnum: {
    statusId: 'statusId',
    name: 'name',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    ticketId: 'ticketId',
    title: 'title',
    description: 'description',
    levelId: 'levelId',
    statusId: 'statusId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type TicketWhereInput = {
    AND?: Enumerable<TicketWhereInput>
    OR?: Enumerable<TicketWhereInput>
    NOT?: Enumerable<TicketWhereInput>
    ticketId?: IntFilter | number
    title?: StringFilter | string
    description?: StringFilter | string
    levelId?: IntFilter | number
    statusId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    level?: XOR<LevelRelationFilter, LevelWhereInput>
    status?: XOR<StatusRelationFilter, StatusWhereInput>
    Contact?: XOR<ContactRelationFilter, ContactWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    ticketId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    levelId?: SortOrder
    statusId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    level?: LevelOrderByWithRelationInput
    status?: StatusOrderByWithRelationInput
    Contact?: ContactOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = {
    ticketId?: number
  }

  export type TicketOrderByWithAggregationInput = {
    ticketId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    levelId?: SortOrder
    statusId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TicketScalarWhereWithAggregatesInput>
    OR?: Enumerable<TicketScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TicketScalarWhereWithAggregatesInput>
    ticketId?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    levelId?: IntWithAggregatesFilter | number
    statusId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ContactWhereInput = {
    AND?: Enumerable<ContactWhereInput>
    OR?: Enumerable<ContactWhereInput>
    NOT?: Enumerable<ContactWhereInput>
    contactId?: IntFilter | number
    name?: StringFilter | string
    tel?: StringFilter | string
    age?: IntFilter | number
    email?: StringFilter | string
    ticketId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }

  export type ContactOrderByWithRelationInput = {
    contactId?: SortOrder
    name?: SortOrder
    tel?: SortOrder
    age?: SortOrder
    email?: SortOrder
    ticketId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
  }

  export type ContactWhereUniqueInput = {
    contactId?: number
    email?: string
    ticketId?: number
  }

  export type ContactOrderByWithAggregationInput = {
    contactId?: SortOrder
    name?: SortOrder
    tel?: SortOrder
    age?: SortOrder
    email?: SortOrder
    ticketId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ContactScalarWhereWithAggregatesInput>
    OR?: Enumerable<ContactScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ContactScalarWhereWithAggregatesInput>
    contactId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    tel?: StringWithAggregatesFilter | string
    age?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    ticketId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type LevelWhereInput = {
    AND?: Enumerable<LevelWhereInput>
    OR?: Enumerable<LevelWhereInput>
    NOT?: Enumerable<LevelWhereInput>
    levelId?: IntFilter | number
    name?: StringFilter | string
    zone?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    Ticket?: TicketListRelationFilter
  }

  export type LevelOrderByWithRelationInput = {
    levelId?: SortOrder
    name?: SortOrder
    zone?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    Ticket?: TicketOrderByRelationAggregateInput
  }

  export type LevelWhereUniqueInput = {
    levelId?: number
  }

  export type LevelOrderByWithAggregationInput = {
    levelId?: SortOrder
    name?: SortOrder
    zone?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: LevelCountOrderByAggregateInput
    _avg?: LevelAvgOrderByAggregateInput
    _max?: LevelMaxOrderByAggregateInput
    _min?: LevelMinOrderByAggregateInput
    _sum?: LevelSumOrderByAggregateInput
  }

  export type LevelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LevelScalarWhereWithAggregatesInput>
    OR?: Enumerable<LevelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LevelScalarWhereWithAggregatesInput>
    levelId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    zone?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type StatusWhereInput = {
    AND?: Enumerable<StatusWhereInput>
    OR?: Enumerable<StatusWhereInput>
    NOT?: Enumerable<StatusWhereInput>
    statusId?: IntFilter | number
    name?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    Ticket?: TicketListRelationFilter
  }

  export type StatusOrderByWithRelationInput = {
    statusId?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    Ticket?: TicketOrderByRelationAggregateInput
  }

  export type StatusWhereUniqueInput = {
    statusId?: number
  }

  export type StatusOrderByWithAggregationInput = {
    statusId?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: StatusCountOrderByAggregateInput
    _avg?: StatusAvgOrderByAggregateInput
    _max?: StatusMaxOrderByAggregateInput
    _min?: StatusMinOrderByAggregateInput
    _sum?: StatusSumOrderByAggregateInput
  }

  export type StatusScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StatusScalarWhereWithAggregatesInput>
    OR?: Enumerable<StatusScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StatusScalarWhereWithAggregatesInput>
    statusId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TicketCreateInput = {
    title: string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
    level: LevelCreateNestedOneWithoutTicketInput
    status: StatusCreateNestedOneWithoutTicketInput
    Contact?: ContactCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    ticketId?: number
    title: string
    description: string
    levelId: number
    statusId: number
    createAt?: Date | string
    updateAt?: Date | string
    Contact?: ContactUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: LevelUpdateOneRequiredWithoutTicketNestedInput
    status?: StatusUpdateOneRequiredWithoutTicketNestedInput
    Contact?: ContactUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Contact?: ContactUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    ticketId?: number
    title: string
    description: string
    levelId: number
    statusId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    name: string
    tel: string
    age: number
    email: string
    createAt?: Date | string
    updateAt?: Date | string
    ticket: TicketCreateNestedOneWithoutContactInput
  }

  export type ContactUncheckedCreateInput = {
    contactId?: number
    name: string
    tel: string
    age: number
    email: string
    ticketId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ContactUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    contactId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    ticketId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    contactId?: number
    name: string
    tel: string
    age: number
    email: string
    ticketId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    contactId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    ticketId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelCreateInput = {
    name: string
    zone: string
    createAt?: Date | string
    updateAt?: Date | string
    Ticket?: TicketCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateInput = {
    levelId?: number
    name: string
    zone: string
    createAt?: Date | string
    updateAt?: Date | string
    Ticket?: TicketUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateInput = {
    levelId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type LevelCreateManyInput = {
    levelId?: number
    name: string
    zone: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type LevelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelUncheckedUpdateManyInput = {
    levelId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusCreateInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    Ticket?: TicketCreateNestedManyWithoutStatusInput
  }

  export type StatusUncheckedCreateInput = {
    statusId?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    Ticket?: TicketUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateManyWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateInput = {
    statusId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type StatusCreateManyInput = {
    statusId?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type StatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusUncheckedUpdateManyInput = {
    statusId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type LevelRelationFilter = {
    is?: LevelWhereInput
    isNot?: LevelWhereInput
  }

  export type StatusRelationFilter = {
    is?: StatusWhereInput
    isNot?: StatusWhereInput
  }

  export type ContactRelationFilter = {
    is?: ContactWhereInput | null
    isNot?: ContactWhereInput | null
  }

  export type TicketCountOrderByAggregateInput = {
    ticketId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    levelId?: SortOrder
    statusId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    ticketId?: SortOrder
    levelId?: SortOrder
    statusId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    ticketId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    levelId?: SortOrder
    statusId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    ticketId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    levelId?: SortOrder
    statusId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    ticketId?: SortOrder
    levelId?: SortOrder
    statusId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type TicketRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type ContactCountOrderByAggregateInput = {
    contactId?: SortOrder
    name?: SortOrder
    tel?: SortOrder
    age?: SortOrder
    email?: SortOrder
    ticketId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    contactId?: SortOrder
    age?: SortOrder
    ticketId?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    contactId?: SortOrder
    name?: SortOrder
    tel?: SortOrder
    age?: SortOrder
    email?: SortOrder
    ticketId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    contactId?: SortOrder
    name?: SortOrder
    tel?: SortOrder
    age?: SortOrder
    email?: SortOrder
    ticketId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    contactId?: SortOrder
    age?: SortOrder
    ticketId?: SortOrder
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LevelCountOrderByAggregateInput = {
    levelId?: SortOrder
    name?: SortOrder
    zone?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type LevelAvgOrderByAggregateInput = {
    levelId?: SortOrder
  }

  export type LevelMaxOrderByAggregateInput = {
    levelId?: SortOrder
    name?: SortOrder
    zone?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type LevelMinOrderByAggregateInput = {
    levelId?: SortOrder
    name?: SortOrder
    zone?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type LevelSumOrderByAggregateInput = {
    levelId?: SortOrder
  }

  export type StatusCountOrderByAggregateInput = {
    statusId?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StatusAvgOrderByAggregateInput = {
    statusId?: SortOrder
  }

  export type StatusMaxOrderByAggregateInput = {
    statusId?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StatusMinOrderByAggregateInput = {
    statusId?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StatusSumOrderByAggregateInput = {
    statusId?: SortOrder
  }

  export type LevelCreateNestedOneWithoutTicketInput = {
    create?: XOR<LevelCreateWithoutTicketInput, LevelUncheckedCreateWithoutTicketInput>
    connectOrCreate?: LevelCreateOrConnectWithoutTicketInput
    connect?: LevelWhereUniqueInput
  }

  export type StatusCreateNestedOneWithoutTicketInput = {
    create?: XOR<StatusCreateWithoutTicketInput, StatusUncheckedCreateWithoutTicketInput>
    connectOrCreate?: StatusCreateOrConnectWithoutTicketInput
    connect?: StatusWhereUniqueInput
  }

  export type ContactCreateNestedOneWithoutTicketInput = {
    create?: XOR<ContactCreateWithoutTicketInput, ContactUncheckedCreateWithoutTicketInput>
    connectOrCreate?: ContactCreateOrConnectWithoutTicketInput
    connect?: ContactWhereUniqueInput
  }

  export type ContactUncheckedCreateNestedOneWithoutTicketInput = {
    create?: XOR<ContactCreateWithoutTicketInput, ContactUncheckedCreateWithoutTicketInput>
    connectOrCreate?: ContactCreateOrConnectWithoutTicketInput
    connect?: ContactWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LevelUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<LevelCreateWithoutTicketInput, LevelUncheckedCreateWithoutTicketInput>
    connectOrCreate?: LevelCreateOrConnectWithoutTicketInput
    upsert?: LevelUpsertWithoutTicketInput
    connect?: LevelWhereUniqueInput
    update?: XOR<LevelUpdateWithoutTicketInput, LevelUncheckedUpdateWithoutTicketInput>
  }

  export type StatusUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<StatusCreateWithoutTicketInput, StatusUncheckedCreateWithoutTicketInput>
    connectOrCreate?: StatusCreateOrConnectWithoutTicketInput
    upsert?: StatusUpsertWithoutTicketInput
    connect?: StatusWhereUniqueInput
    update?: XOR<StatusUpdateWithoutTicketInput, StatusUncheckedUpdateWithoutTicketInput>
  }

  export type ContactUpdateOneWithoutTicketNestedInput = {
    create?: XOR<ContactCreateWithoutTicketInput, ContactUncheckedCreateWithoutTicketInput>
    connectOrCreate?: ContactCreateOrConnectWithoutTicketInput
    upsert?: ContactUpsertWithoutTicketInput
    disconnect?: boolean
    delete?: boolean
    connect?: ContactWhereUniqueInput
    update?: XOR<ContactUpdateWithoutTicketInput, ContactUncheckedUpdateWithoutTicketInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContactUncheckedUpdateOneWithoutTicketNestedInput = {
    create?: XOR<ContactCreateWithoutTicketInput, ContactUncheckedCreateWithoutTicketInput>
    connectOrCreate?: ContactCreateOrConnectWithoutTicketInput
    upsert?: ContactUpsertWithoutTicketInput
    disconnect?: boolean
    delete?: boolean
    connect?: ContactWhereUniqueInput
    update?: XOR<ContactUpdateWithoutTicketInput, ContactUncheckedUpdateWithoutTicketInput>
  }

  export type TicketCreateNestedOneWithoutContactInput = {
    create?: XOR<TicketCreateWithoutContactInput, TicketUncheckedCreateWithoutContactInput>
    connectOrCreate?: TicketCreateOrConnectWithoutContactInput
    connect?: TicketWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutContactNestedInput = {
    create?: XOR<TicketCreateWithoutContactInput, TicketUncheckedCreateWithoutContactInput>
    connectOrCreate?: TicketCreateOrConnectWithoutContactInput
    upsert?: TicketUpsertWithoutContactInput
    connect?: TicketWhereUniqueInput
    update?: XOR<TicketUpdateWithoutContactInput, TicketUncheckedUpdateWithoutContactInput>
  }

  export type TicketCreateNestedManyWithoutLevelInput = {
    create?: XOR<Enumerable<TicketCreateWithoutLevelInput>, Enumerable<TicketUncheckedCreateWithoutLevelInput>>
    connectOrCreate?: Enumerable<TicketCreateOrConnectWithoutLevelInput>
    createMany?: TicketCreateManyLevelInputEnvelope
    connect?: Enumerable<TicketWhereUniqueInput>
  }

  export type TicketUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<Enumerable<TicketCreateWithoutLevelInput>, Enumerable<TicketUncheckedCreateWithoutLevelInput>>
    connectOrCreate?: Enumerable<TicketCreateOrConnectWithoutLevelInput>
    createMany?: TicketCreateManyLevelInputEnvelope
    connect?: Enumerable<TicketWhereUniqueInput>
  }

  export type TicketUpdateManyWithoutLevelNestedInput = {
    create?: XOR<Enumerable<TicketCreateWithoutLevelInput>, Enumerable<TicketUncheckedCreateWithoutLevelInput>>
    connectOrCreate?: Enumerable<TicketCreateOrConnectWithoutLevelInput>
    upsert?: Enumerable<TicketUpsertWithWhereUniqueWithoutLevelInput>
    createMany?: TicketCreateManyLevelInputEnvelope
    set?: Enumerable<TicketWhereUniqueInput>
    disconnect?: Enumerable<TicketWhereUniqueInput>
    delete?: Enumerable<TicketWhereUniqueInput>
    connect?: Enumerable<TicketWhereUniqueInput>
    update?: Enumerable<TicketUpdateWithWhereUniqueWithoutLevelInput>
    updateMany?: Enumerable<TicketUpdateManyWithWhereWithoutLevelInput>
    deleteMany?: Enumerable<TicketScalarWhereInput>
  }

  export type TicketUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<Enumerable<TicketCreateWithoutLevelInput>, Enumerable<TicketUncheckedCreateWithoutLevelInput>>
    connectOrCreate?: Enumerable<TicketCreateOrConnectWithoutLevelInput>
    upsert?: Enumerable<TicketUpsertWithWhereUniqueWithoutLevelInput>
    createMany?: TicketCreateManyLevelInputEnvelope
    set?: Enumerable<TicketWhereUniqueInput>
    disconnect?: Enumerable<TicketWhereUniqueInput>
    delete?: Enumerable<TicketWhereUniqueInput>
    connect?: Enumerable<TicketWhereUniqueInput>
    update?: Enumerable<TicketUpdateWithWhereUniqueWithoutLevelInput>
    updateMany?: Enumerable<TicketUpdateManyWithWhereWithoutLevelInput>
    deleteMany?: Enumerable<TicketScalarWhereInput>
  }

  export type TicketCreateNestedManyWithoutStatusInput = {
    create?: XOR<Enumerable<TicketCreateWithoutStatusInput>, Enumerable<TicketUncheckedCreateWithoutStatusInput>>
    connectOrCreate?: Enumerable<TicketCreateOrConnectWithoutStatusInput>
    createMany?: TicketCreateManyStatusInputEnvelope
    connect?: Enumerable<TicketWhereUniqueInput>
  }

  export type TicketUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<Enumerable<TicketCreateWithoutStatusInput>, Enumerable<TicketUncheckedCreateWithoutStatusInput>>
    connectOrCreate?: Enumerable<TicketCreateOrConnectWithoutStatusInput>
    createMany?: TicketCreateManyStatusInputEnvelope
    connect?: Enumerable<TicketWhereUniqueInput>
  }

  export type TicketUpdateManyWithoutStatusNestedInput = {
    create?: XOR<Enumerable<TicketCreateWithoutStatusInput>, Enumerable<TicketUncheckedCreateWithoutStatusInput>>
    connectOrCreate?: Enumerable<TicketCreateOrConnectWithoutStatusInput>
    upsert?: Enumerable<TicketUpsertWithWhereUniqueWithoutStatusInput>
    createMany?: TicketCreateManyStatusInputEnvelope
    set?: Enumerable<TicketWhereUniqueInput>
    disconnect?: Enumerable<TicketWhereUniqueInput>
    delete?: Enumerable<TicketWhereUniqueInput>
    connect?: Enumerable<TicketWhereUniqueInput>
    update?: Enumerable<TicketUpdateWithWhereUniqueWithoutStatusInput>
    updateMany?: Enumerable<TicketUpdateManyWithWhereWithoutStatusInput>
    deleteMany?: Enumerable<TicketScalarWhereInput>
  }

  export type TicketUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<Enumerable<TicketCreateWithoutStatusInput>, Enumerable<TicketUncheckedCreateWithoutStatusInput>>
    connectOrCreate?: Enumerable<TicketCreateOrConnectWithoutStatusInput>
    upsert?: Enumerable<TicketUpsertWithWhereUniqueWithoutStatusInput>
    createMany?: TicketCreateManyStatusInputEnvelope
    set?: Enumerable<TicketWhereUniqueInput>
    disconnect?: Enumerable<TicketWhereUniqueInput>
    delete?: Enumerable<TicketWhereUniqueInput>
    connect?: Enumerable<TicketWhereUniqueInput>
    update?: Enumerable<TicketUpdateWithWhereUniqueWithoutStatusInput>
    updateMany?: Enumerable<TicketUpdateManyWithWhereWithoutStatusInput>
    deleteMany?: Enumerable<TicketScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type LevelCreateWithoutTicketInput = {
    name: string
    zone: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type LevelUncheckedCreateWithoutTicketInput = {
    levelId?: number
    name: string
    zone: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type LevelCreateOrConnectWithoutTicketInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutTicketInput, LevelUncheckedCreateWithoutTicketInput>
  }

  export type StatusCreateWithoutTicketInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type StatusUncheckedCreateWithoutTicketInput = {
    statusId?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type StatusCreateOrConnectWithoutTicketInput = {
    where: StatusWhereUniqueInput
    create: XOR<StatusCreateWithoutTicketInput, StatusUncheckedCreateWithoutTicketInput>
  }

  export type ContactCreateWithoutTicketInput = {
    name: string
    tel: string
    age: number
    email: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ContactUncheckedCreateWithoutTicketInput = {
    contactId?: number
    name: string
    tel: string
    age: number
    email: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ContactCreateOrConnectWithoutTicketInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutTicketInput, ContactUncheckedCreateWithoutTicketInput>
  }

  export type LevelUpsertWithoutTicketInput = {
    update: XOR<LevelUpdateWithoutTicketInput, LevelUncheckedUpdateWithoutTicketInput>
    create: XOR<LevelCreateWithoutTicketInput, LevelUncheckedCreateWithoutTicketInput>
  }

  export type LevelUpdateWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelUncheckedUpdateWithoutTicketInput = {
    levelId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    zone?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusUpsertWithoutTicketInput = {
    update: XOR<StatusUpdateWithoutTicketInput, StatusUncheckedUpdateWithoutTicketInput>
    create: XOR<StatusCreateWithoutTicketInput, StatusUncheckedCreateWithoutTicketInput>
  }

  export type StatusUpdateWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusUncheckedUpdateWithoutTicketInput = {
    statusId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUpsertWithoutTicketInput = {
    update: XOR<ContactUpdateWithoutTicketInput, ContactUncheckedUpdateWithoutTicketInput>
    create: XOR<ContactCreateWithoutTicketInput, ContactUncheckedCreateWithoutTicketInput>
  }

  export type ContactUpdateWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateWithoutTicketInput = {
    contactId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateWithoutContactInput = {
    title: string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
    level: LevelCreateNestedOneWithoutTicketInput
    status: StatusCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutContactInput = {
    ticketId?: number
    title: string
    description: string
    levelId: number
    statusId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutContactInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutContactInput, TicketUncheckedCreateWithoutContactInput>
  }

  export type TicketUpsertWithoutContactInput = {
    update: XOR<TicketUpdateWithoutContactInput, TicketUncheckedUpdateWithoutContactInput>
    create: XOR<TicketCreateWithoutContactInput, TicketUncheckedCreateWithoutContactInput>
  }

  export type TicketUpdateWithoutContactInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: LevelUpdateOneRequiredWithoutTicketNestedInput
    status?: StatusUpdateOneRequiredWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutContactInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateWithoutLevelInput = {
    title: string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
    status: StatusCreateNestedOneWithoutTicketInput
    Contact?: ContactCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutLevelInput = {
    ticketId?: number
    title: string
    description: string
    statusId: number
    createAt?: Date | string
    updateAt?: Date | string
    Contact?: ContactUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutLevelInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutLevelInput, TicketUncheckedCreateWithoutLevelInput>
  }

  export type TicketCreateManyLevelInputEnvelope = {
    data: Enumerable<TicketCreateManyLevelInput>
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutLevelInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutLevelInput, TicketUncheckedUpdateWithoutLevelInput>
    create: XOR<TicketCreateWithoutLevelInput, TicketUncheckedCreateWithoutLevelInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutLevelInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutLevelInput, TicketUncheckedUpdateWithoutLevelInput>
  }

  export type TicketUpdateManyWithWhereWithoutLevelInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketScalarWhereInput = {
    AND?: Enumerable<TicketScalarWhereInput>
    OR?: Enumerable<TicketScalarWhereInput>
    NOT?: Enumerable<TicketScalarWhereInput>
    ticketId?: IntFilter | number
    title?: StringFilter | string
    description?: StringFilter | string
    levelId?: IntFilter | number
    statusId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type TicketCreateWithoutStatusInput = {
    title: string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
    level: LevelCreateNestedOneWithoutTicketInput
    Contact?: ContactCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutStatusInput = {
    ticketId?: number
    title: string
    description: string
    levelId: number
    createAt?: Date | string
    updateAt?: Date | string
    Contact?: ContactUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutStatusInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutStatusInput, TicketUncheckedCreateWithoutStatusInput>
  }

  export type TicketCreateManyStatusInputEnvelope = {
    data: Enumerable<TicketCreateManyStatusInput>
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutStatusInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutStatusInput, TicketUncheckedUpdateWithoutStatusInput>
    create: XOR<TicketCreateWithoutStatusInput, TicketUncheckedCreateWithoutStatusInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutStatusInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutStatusInput, TicketUncheckedUpdateWithoutStatusInput>
  }

  export type TicketUpdateManyWithWhereWithoutStatusInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketCreateManyLevelInput = {
    ticketId?: number
    title: string
    description: string
    statusId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type TicketUpdateWithoutLevelInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StatusUpdateOneRequiredWithoutTicketNestedInput
    Contact?: ContactUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutLevelInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    statusId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Contact?: ContactUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutTicketInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    statusId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyStatusInput = {
    ticketId?: number
    title: string
    description: string
    levelId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type TicketUpdateWithoutStatusInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: LevelUpdateOneRequiredWithoutTicketNestedInput
    Contact?: ContactUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutStatusInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Contact?: ContactUncheckedUpdateOneWithoutTicketNestedInput
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