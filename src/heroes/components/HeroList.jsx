import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroItem } from "./HeroItem";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher));

  return (
    <div className="container py-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {heroes.map((hero) => (
          <div className="col" key={hero.id}>
            <HeroItem hero={hero} />
          </div>
        ))}
      </div>
    </div>
  );
};
