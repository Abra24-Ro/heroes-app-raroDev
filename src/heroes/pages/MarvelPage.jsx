import { HeroList } from "../components/HeroList";

export const MarvelPage = () => {
  return (
    <>
      <h2 className="text-center ">Marvel Comics</h2>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </>
  );
};
