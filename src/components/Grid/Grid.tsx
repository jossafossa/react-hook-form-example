import type { PropsWithChildren } from "react";
import styles from "./Grid.module.scss";

const _Grid = ({ children }: PropsWithChildren) => {
  return <div className={styles.grid}>{children}</div>;
};

type ItemProps = {
  span?: number;
  small?: number;
  medium?: number;
  large?: number;
};

const Item = ({
  children,
  span = 12,
  small,
  medium,
  large,
}: PropsWithChildren<ItemProps>) => {
  return (
    <div
      className={styles.item}
      style={
        {
          "--span": span,
          "--span-small": small,
          "--span-medium": medium,
          "--span-large": large,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export const Grid = Object.assign(_Grid, {
  Item,
});
