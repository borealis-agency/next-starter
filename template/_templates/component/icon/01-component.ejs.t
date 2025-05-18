---
to: src/components/Icon/Icon.tsx
---
import { ICONS_SPRITE_URL } from "@/constants/icons";
import { TIconName } from "@/types/icons";

type IconProps = {
  name: TIconName;
};

export const Icon = ({ name }: IconProps) => {
  const iconURL = `${ICONS_SPRITE_URL}#${name}`;

  return (
    <svg className="min-w-[1em] min-h-[1em] h-[1em] w-[1em] inline-flex fill-current">
      <use href={iconURL} xlinkHref={iconURL} />
    </svg>
  );
};
