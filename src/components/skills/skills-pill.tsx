import { FC, SVGProps } from 'react';
import Image from 'next/image';

export type SkillPillProps = {
  name: string;
  // icon: FC<SVGProps<SVGSVGElement>>;
  icon: any;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon } = props;
  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-accent/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
      {/* <Icon className="h-5 w-5 sm:h-8 sm:w-8" /> */}
      {!!icon && (
        <Image
          src={icon}
          alt="logo"
          loading="eager"
          priority
          height={1000}
          width={1000}
          className="h-5 w-5 sm:h-8 sm:w-8"
        />
      )}

      <span className="font-medium">{name}</span>
    </div>
  );
}
