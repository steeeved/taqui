import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export const siteConfig = {
  name: "Stephen Muchendu",
  description: "I am a Passionate Software Developer",
  ogImage: "https://mdTaquiImam.vercel.app/og-image.png",
  url: "https://mdTaquiImam.vercel.app",
};
export default function Home() {
  return (
    <>
      <FramerWrapper
        className="h-full  flex flex-col justify-start gap-4 "
        y={0}
        x={-100}
      >
        <HeroTexts />
      </FramerWrapper>
      <GithubBtn />
    </>
  );
}
