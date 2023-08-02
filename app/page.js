import Image from "next/image";
import { Julius_Sans_One, Lexend_Zetta } from "next/font/google";

const julius = Julius_Sans_One({ weight: "400", subsets: ["latin"] });
const lexend = Lexend_Zetta({ weight: "400", subsets: ["latin"] });

const founders = [
  {
    name: "Lewis Meyers",
    imageSrc: "/x.PNG",
    twitter: "https://twitter.com/DevRelLewis",
    github: "https://github.com/DevRelLewis",
  },
  {
    name: "Kasi Reeves",
    imageSrc: "/g.PNG",
    twitter: "https://twitter.com/RobotProxyWar",
    github: "https://github.com/Kasirocswell",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      <section
        className="flex flex-col h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/cdbg.jpg)" }}
      >
        <button
          className={`w-[75px] h-[50px] bg-[#a212b5] rounded-xl ml-[75%] mt-2 2xl:ml-[90%] 2xl:mt8 ${julius.className}`}
        >
          LOGIN
        </button>
        <div
          className={`flex flex-col mx-auto my-auto text-6xl ${lexend.className} 2xl:text-[125px]`}
        >
          <p>An</p>
          <p>Immersive</p>
          <p className="text-[#a212b5]">MUD</p>
          <p>Experience</p>
        </div>
      </section>
      <section
        className="flex flex-col h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/cdbg2.jpg)" }}
      >
        <p
          className={`text-xl mx-auto my-auto text-center 2xl:w-[80%] 2xl:text-4xl ${lexend.className} `}
        >
          Dive into the <span className="text-[#a212b5]">"Celestial Deep"</span>
          , an immersive MUD that propels you into the vast expanse of the
          cosmos. Navigate through alien worlds, engage in epic starship
          battles, and unravel the enigmas of the universe. Encounter a myriad
          of alien species, each with unique cultures and narratives. Choose to
          trade, negotiate, or engage in combat - the choice is yours. Customize
          your starship, venture into unexplored territories, and etch your name
          in the stars. Whether you're an explorer, a trader, or a warrior, your
          interstellar adventure awaits. Are you ready to plunge into the
          celestial deep? Join us in the cosmos today!
        </p>
      </section>
      <section
        className="flex flex-col h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/cdbg3.jpg)" }}
      >
        <div className="flex mx-auto my-auto space-x-10">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="flex flex-col items-center 2xl:w-[400px] 2xl:h-[600px]"
            >
              <Image
                src={founder.imageSrc}
                alt={founder.name}
                width={100}
                height={100}
                className="rounded-full"
              />
              <h2 className="text-white 2xl:text-4xl">{founder.name}</h2>
              <p className="text-white 2xl:text-2xl">founder</p>
              <div className="flex space-x-2">
                <a href={founder.twitter}>
                  <img src="/x.PNG" alt="Twitter" />
                </a>
                <a href={founder.github}>
                  <img src="/g.PNG" alt="Github" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
