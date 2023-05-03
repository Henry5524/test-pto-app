import React from "react";

export interface TabProps<T = string | number> {
  title: string;
  id: T;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  badgeCount?: number;
  className?: string;
  testId?: string;
}

export default function Tab({ children }: TabProps) {
  return <>{children}</>;
}
