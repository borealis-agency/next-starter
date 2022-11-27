---
to: components/Icon/Icon.tsx
---
import { ICONS_SPRITE_URL } from "@/constants";
import { TIconName } from "@/types";

import styles from "./Icon.module.scss";

type IconProps = {
  name: TIconName;
};

export const Icon = ({ name }: IconProps) => {
  const iconURL = `${ICONS_SPRITE_URL}#icon-${name}`;

  return (
    <svg className={styles.icon}>
      <use href={iconURL} xlinkHref={iconURL} />
    </svg>
  );
};
