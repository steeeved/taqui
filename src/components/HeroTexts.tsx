import TextRotator from "./TextRotator";

 
const HeroTexts = () => {
 
  
  return (
    <div className="pt-10 md:pt-40">
      {/* <h3 className="font-poppins text-2xl max-sm:text-xl" >My Name is</h3> */}
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl " >
        Stephen<br /> Muchendu .
      </h1>
        <TextRotator/>
    </div>
  );
};
export default HeroTexts