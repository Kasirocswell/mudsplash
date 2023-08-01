import Image from "next/image";

const founders = [
  {
    name: "Lewis Meyers",
    imageSrc: "/x.PNG",
  },
  {
    name: "Kasi Reeves",
    imageSrc: "/g.PNG",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      <section
        className="flex flex-col h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/cdbg.jpg)" }}
      >
        <button className="w-[75px] h-[50px] bg-[#a212b5] rounded-xl ml-[75%] mt-2">
          LOGIN
        </button>
        <div className="flex flex-col mx-auto my-auto text-6xl">
          <p>An</p>
          <p>Immersive</p>
          <p>MUD</p>
          <p>Experience</p>
        </div>
      </section>
      <section
        className="flex flex-col h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/cdbg2.jpg)" }}
      >
        <p className="text-xl mx-auto my-auto text-center">
          Dive into the "Celestial Deep", an immersive MUD that propels you into
          the vast expanse of the cosmos. Navigate through alien worlds, engage
          in epic starship battles, and unravel the enigmas of the universe.
          Encounter a myriad of alien species, each with unique cultures and
          narratives. Choose to trade, negotiate, or engage in combat - the
          choice is yours. Customize your starship, venture into unexplored
          territories, and etch your name in the stars. Whether you're an
          explorer, a trader, or a warrior, your interstellar adventure awaits.
          Are you ready to plunge into the celestial deep? Join us in the cosmos
          today!
        </p>
      </section>
      <section
        className="flex flex-col h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/cdbg3.jpg)" }}
      >
        <div className="flex mx-auto my-auto space-x-10">
          {founders.map((founder, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={founder.imageSrc}
                alt={founder.name}
                width={100}
                height={100}
                className="rounded-full"
              />
              <h2 className="text-white">{founder.name}</h2>
              <p className="text-white">founder</p>
              <div className="flex space-x-2">
                <a href="https://twitter.com/username">
                  <img src="/x.PNG" alt="Twitter" />
                </a>
                <a href="https://github.com/username">
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
