import type { GetServerSideProps } from "next";
import * as React from "react";
import SuperJSON from "superjson";
export declare type SuperJSONProps<P> = P & {
  _superjson?: ReturnType<typeof SuperJSON.serialize>["meta"];
};
export declare function withSuperJSONProps<P>(
  gssp: GetServerSideProps<P>,
  exclude?: string[]
): GetServerSideProps<SuperJSONProps<P>>;
export declare function withSuperJSONInitProps(
  gip: any,
  exclude?: string[]
): any;
export declare function deserializeProps<P>(
  serializedProps: SuperJSONProps<P>
): P;
export declare function withSuperJSONPage<P>(
  Page: React.ComponentType<P>
): React.ComponentType<SuperJSONProps<P>>;
export declare function serialize<P>(props: P): SuperJSONProps<P>;
