import { HeroList } from "../components/HeroList";

export const DcPage = () => {
  return (
    <>
      <h2 className="text-center ">Dc Comics</h2>
      <hr />
      <HeroList publisher="DC Comics" />
    </>
  );
};
