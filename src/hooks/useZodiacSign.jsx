import { useContext } from "react";
import { BirthContext } from "../context/BirthContext";
import SunSigil from "../../public/sigils/Sun.svg";
import MoonSigil from "../../public/sigils/Moon.svg";
import MercurySigil from "../../public/sigils/Mercury.svg";
import VenusSigil from "../../public/sigils/Venus.svg";
import MarsSigil from "../../public/sigils/Mars.svg";
import JupiterSigil from "../../public/sigils/Jupiter.svg";
import SaturnSigil from "../../public/sigils/Saturn.svg";
import UranusSigil from "../../public/sigils/Uranus.svg";
import NeptuneSigil from "../../public/sigils/Neptune.svg";
import PlutoSigil from "../../public/sigils/Pluto.svg";
import ChironSigil from "../../public/sigils/Chiron.svg";

// ATTACHING VALUES TO KEYS
const zodiacSigns = [
  { key: "Ari", value: "Aries" },
  { key: "Tau", value: "Taurus" },
  { key: "Gem", value: "Gemini" },
  { key: "Can", value: "Cancer" },
  { key: "Leo", value: "Leo" },
  { key: "Vir", value: "Virgo" },
  { key: "Lib", value: "Libra" },
  { key: "Sco", value: "Scorpio" },
  { key: "Sag", value: "Sagittarius" },
  { key: "Cap", value: "Capricorn" },
  { key: "Aqu", value: "Aquarius" },
  { key: "Pis", value: "Pisces" },
];

const planets = [
  { key: "sun", value: "Sun", icon: SunSigil },
  { key: "moon", value: "Moon", icon: MoonSigil },
  { key: "mercury", value: "Mercury", icon: MercurySigil },
  { key: "venus", value: "Venus", icon: VenusSigil },
  { key: "mars", value: "Mars", icon: MarsSigil },
  { key: "jupiter", value: "Jupiter", icon: JupiterSigil },
  { key: "saturn", value: "Saturn", icon: SaturnSigil },
  { key: "uranus", value: "Uranus", icon: UranusSigil },
  { key: "neptune", value: "Neptune", icon: NeptuneSigil },
  { key: "pluto", value: "Pluto", icon: PlutoSigil },
  { key: "chiron", value: "Chiron", icon: ChironSigil },
];

// MATCHING PLANETS TO SIGNS AND SIGILS TO PLANETS
export const useZodiacSigns = () => {
  const { birthData } = useContext(BirthContext);

  // LOADING...
  if (Object.keys(birthData).length === 0) {
    return { isLoading: true, signs: [] };
  }

  // MAPPING ZODIAC SIGNS TO PLANETS
  const signs = planets.map((planet) => {
    const shortSign = birthData.subject[planet.key].sign;
    const signObject = zodiacSigns.find((sign) => sign.key === shortSign);

    return {
      planet: planet.value,
      sign: signObject.value,
      icon: planet.icon,
    };
  });

  return { isLoading: false, signs };
};
