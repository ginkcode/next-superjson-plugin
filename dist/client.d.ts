import { SuperJSONProps } from "./tools";
import * as React from "react";
export default function SuperJSONComponent<P>({
  component,
  props,
  children,
}: {
  component: React.ComponentType<P>;
  props: SuperJSONProps<P>;
  children?: React.ReactNode;
}): JSX.Element;
