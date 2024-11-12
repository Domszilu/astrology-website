import { useContext } from "react";
import { BirthContext } from "../context/BirthContext";

export const useAspects = () => {
  const { aspectData } = useContext(BirthContext);

  // ASPECTS
  const aspects = aspectData.map((object) => {
    const { p1_name, aspect, p2_name, diff, orbit } = object;
    const firstDigitOfOrbit = Math.abs(orbit).toString()[0];

    return (
      <p key={p1_name + p2_name}>
        {p1_name} {aspect} {p2_name}: orb{" "}
        <span className="orbit">{firstDigitOfOrbit}°</span>
      </p>
    );
  });
  return { aspects };
};
