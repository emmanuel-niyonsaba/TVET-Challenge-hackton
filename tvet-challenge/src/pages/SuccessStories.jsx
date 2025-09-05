import React, { useMemo, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import darius from "../assets/landingPage/darius.jpg";
import janvier from "../assets/landingPage/janvier.jpg";
import merci from "../assets/landingPage/merci.jpg";
import muhoza from "../assets/landingPage/muhoza.jpg";
import mukayi from '../assets/landingPage/mukayi.jpg';
import vidd from '../assets/vidd.mp4';

const sectors = ["All", "ICT", "Welding", "Hospitality", "Agriculture", "Hairdressing"];
const storyTypes = ["All", "Graduate", "Employer"];

const STORIES = [
  {
    id: 1,
    name: "Uwizeye Darius",
    role: "Graduate",
    sector: "Welding",
    title: "Owner of Welding Workshops",
    quote: "I studied welding through TVET, got a teaching job, and later opened my own workshops.",
    full: "TVET gave me income, stability, and a better life.",
    img: darius,
    ref: "https://trust-fund-for-africa.europa.eu/",
  },
  {
    id: 2,
    name: "Janvier Ndereyimana",
    role: "Employer",
    sector: "Hospitality",
    title: "Teacher & Beverage Operations",
    quote: "I was lucky to go abroad for a year-long internship in Dubai.",
    full: "Now, I can guide a student from not knowing how to mix flour to baking and decorating cakes that impress customers.",
    img: janvier,
    ref: "https://trust-fund-for-africa.europa.eu/",
  },
  {
    id: 3,
    name: "Muhoza Joyeuse",
    role: "Graduate",
    sector: "Hairdressing",
    title: "Hairdresser",
    quote: "I dropped out of school in Senior 5 due to financial hardship.",
    full: "Thanks to the Dukorane Umurava TVET initiative, I gained practical training and now I’m employed.",
    img: muhoza,
    ref: "https://trust-fund-for-africa.europa.eu/",
  },
  {
    id: 4,
    name: "Ngarukiye Dieu Merci",
    role: "Graduate",
    sector: "Hairdressing",
    title: "Salon Owner",
    quote: "After joining Dukorane Umurava’s TVET programme, I gained hairdressing skills and opened a salon.",
    full: "Now I support my family by working in salons alongside colleagues.",
    img: merci,
    ref: "https://trust-fund-for-africa.europa.eu/",
  },
  {
    id: 5,
    name: "Mukayisinga Sezibera Dionyse",
    role: "Employer",
    sector: "Agriculture",
    title: "Entrepreneur and Mother",
    quote: "Thanks to the TVET entrepreneurship training from Dukorane Umurava Project I regained confidence",
    full: "I regained confidence, resumed my chicken-rearing business, and can now provide for my family of five.",
    img: mukayi,
    ref: "https://trust-fund-for-africa.europa.eu/",
  },
];


function classNames(...c) {
  return c.filter(Boolean).join(" ");
}

function FilterPill({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "px-4 py-2 rounded-full text-sm transition shadow-sm",
        active
          ? "bg-green-600 text-white"
          : "bg-white text-green-700 border border-green-300 hover:bg-green-100"
      )}
    >
      {children}
    </button>
  );
}

function StoryCard({ story, onOpen }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col">
      <div className="h-40 w-full overflow-hidden relative">
        <img
          src={story.img}
          alt={story.name}
          className="h-full w-full object-cover group-hover:scale-105 transition"
        />
        <MoreVertIcon className="absolute top-2 right-2 text-white/80 hover:text-white cursor-pointer" />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-green-200 text-green-900 px-3 py-1 text-xs font-medium">
            {story.role}
          </span>
          <span className="text-xs text-green-800 bg-green-100 px-2 py-1 rounded-full">{story.sector}</span>
        </div>
        <h3 className="text-lg font-semibold text-green-900">{story.name}</h3>
        <p className="text-sm text-gray-700 line-clamp-3">“{story.quote}”</p>
        <button
          onClick={() => onOpen(story)}
          className="mt-3 inline-flex justify-center items-center gap-2 rounded-xl bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700 hover:cursor-pointer"
        >
          Read Full Story
        </button>
      </div>
    </div>
  );
}

function StoryModal({ story, onClose }) {
  if (!story) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <img src={story.img} alt={story.name} className="h-56 w-full object-cover md:h-full" />
            <div className="p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-green-200 text-green-900 px-3 py-1 text-xs font-medium">
                  {story.role}
                </span>
                <span className="text-xs text-green-800 bg-green-100 px-2 py-1 rounded-full">{story.sector}</span>
              </div>
              <h3 className="text-2xl font-semibold text-green-900">{story.name}</h3>
              <p className="text-sm text-gray-700">{story.full}</p>
              <div className="mt-2 text-xs text-green-700">
                Reference:{" "}
                <a href={story.ref} target="_blank" rel="noreferrer" className="underline">
                  {story.ref}
                </a>
              </div>
              <div className="mt-auto flex gap-3 pt-3">
                <button
                  onClick={onClose}
                  className="inline-flex justify-center rounded-xl border border-green-300 px-4 py-2 text-sm text-green-900 hover:bg-green-100"
                >
                  Close
                </button>
                <a
                  href="#"
                  className="inline-flex justify-center rounded-xl bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700"
                >
                  Share Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SuccessStories() {
  const [activeSector, setActiveSector] = useState("All");
  const [activeType, setActiveType] = useState("All");
  const [query, setQuery] = useState("");
  const [openStory, setOpenStory] = useState(null);

  const filtered = useMemo(() => {
    return STORIES.filter((s) => {
      const bySector = activeSector === "All" || s.sector === activeSector;
      const byType = activeType === "All" || s.role === activeType;
      const byQuery =
        !query || `${s.name} ${s.sector} ${s.title} ${s.quote}`.toLowerCase().includes(query.toLowerCase());
      return bySector && byType && byQuery;
    });
  }, [activeSector, activeType, query]);

  return (
    <div className="min-h-screen bg-green-50">
      <section className="w-full h-[60vh] bg-gradient-to-r from-green-200 to-green-400 flex flex-col justify-center items-center space-y-6 shadow-xl shadow-green-300 p-8 text-2xl text-gray-800">
        <p className="font-extrabold text-4xl text-green-900 tracking-wide">Success Stories</p>
        <p className="text-center leading-relaxed max-w-4xl">
          Success Stories is here to inspire and prove what TVET can do. It highlights real people who chose the TVET
          path and turned their skills into opportunities, income, and a brighter future.
          <br />
          <span className="block mt-4 font-semibold italic text-green-800">
            "TVET is not just education, it’s a gateway to independence, growth, and success."
          </span>
        </p>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-sm">
            <span className="text-xs text-green-700">Search</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Name, sector, keyword..."
              className="bg-transparent outline-none text-sm placeholder:text-green-700/70"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {sectors.map((s) => (
              <FilterPill key={s} active={activeSector === s} onClick={() => setActiveSector(s)}>
                {s}
              </FilterPill>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {storyTypes.map((t) => (
              <FilterPill key={t} active={activeType === t} onClick={() => setActiveType(t)}>
                {t}
              </FilterPill>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s) => (
            <StoryCard key={s.id} story={s} onOpen={setOpenStory} />
          ))}
        </div>
      </section>

      <StoryModal story={openStory} onClose={() => setOpenStory(null)} />

      <div className="bg-[#def0df] flex space-x-7 h-[50vh] justify-around items-center p-4">
        <div className="w-2/3 ">
          <p className="font-semibold text-[#1b5e20] text-3xl">Watch their journey</p>
          <p className="text-[#333355] text-xl">Short testimonies from graduates and employers describe how work-based
            learning leads to real jobs and businesses.</p>
        </div>

        <div className="w-[400px] ">
          <a href="https://youtu.be/FfougCB8O8k?si=BU-AVDEWW3KIv7Y3" target="_blank">
            <video src={vidd} autoPlay muted className="hover:cursor-pointer" >
          </video>
          </a>
        </div>
      </div><br />
    </div>
  );
}
