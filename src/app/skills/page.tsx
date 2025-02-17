"use client";

import Heading from "@/components/Heading";
import { AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import SkillPill, {
  type SkillPillProps,
} from "@/components/skills/skills-pill";
import FadeRight from "@/components/animation/fade-right";
import { useDebounceValue } from "@/hooks/useDebounceValue";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { SKILLS_DATA } from "@/utility/skills";

export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

const SkillPage = () => {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebonced = useDebounceValue(isMobile, 600);

  return (
    <div className="min-h-[100vh] w-full relative flex flex-col items-start gap-5 overflow-hidden py-10 md:pt-40">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <LightbulbIcon className="w-4 h-4" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        {SKILLS_DATA.map((section) => (
          <AnimatePresence key={section.sectionName}>
            <div className="mt-4">
              <span className="text-xs font-semibold text-foreground sm:text-sm">
                {section.sectionName}
              </span>
              <div className="mt-2 flex flex-wrap gap-4 text-xl text-accent-foreground">
                {section.skills.map((pill, index) => (
                  <FadeRight
                    key={`lang-${index}`}
                    duration={0.4}
                    delay={0.1 + index * 0.1}
                    whileInView={!isMobileDebonced}
                    className="-z-20"
                  >
                    <SkillPill {...pill} />
                  </FadeRight>
                ))}
              </div>
            </div>
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default SkillPage;
