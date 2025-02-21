import TextRotator from "./TextRotator";

const HeroTexts = () => {
  return (
    <div className="pt-10">
      <div className="flex flex-col">
        <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl ">
          Stephen
          <br /> Muchendu.
        </h1>
      </div>
      <TextRotator />
    </div>
  );
};
export default HeroTexts;
