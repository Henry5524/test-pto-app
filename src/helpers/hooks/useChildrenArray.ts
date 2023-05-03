import { Children, useMemo } from "react";

export function useChildrenArray<T = any>(children: JSX.Element[]): T[] {
  return useMemo(() => {
    const arrayChildren = Children.toArray(children) as JSX.Element[];
    return Children.map(arrayChildren, (child) => {
      return child?.props;
    });
  }, [children]);
}
