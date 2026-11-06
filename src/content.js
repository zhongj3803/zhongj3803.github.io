// All of the site's words, links, and project details live in this file.
// Colors are palette names from the top of styles.css:
// blue, lavender, mint, peach, or pink.

import spotifyImage from "./Assets/Projects/spotify-stats.webp";
import dalleImage from "./Assets/Projects/dalle-clone.webp";
import tractographyImage from "./Assets/Projects/tractography.webp";
import xorImage from "./Assets/Projects/xor.webp";
import parserImage from "./Assets/Projects/parser.webp";
import twoSigmaLogo from "./Assets/Logos/two-sigma.svg";
import coinbaseLogo from "./Assets/Logos/coinbase.svg";
import splunkLogo from "./Assets/Logos/splunk.svg";
import openAvenuesLogo from "./Assets/Logos/open-avenues.svg";
import brainRacersLogo from "./Assets/Logos/brain-racers.svg";
import vanderbiltLogo from "./Assets/Logos/vanderbilt.svg";

export const profile = {
  name: "Jesse Zhong",
};

// The songs beside the keyboard. Each entry in `measures` is one measure, with one
// slot per eighth note: a note and its octave (Eb5, F#4), or "-" to hold the note
// before it. Setting `slotsPerBeat` changes that: 4 is sixteenth notes, 3 is triplets.
// An optional `bass` is written the same way and plays along with the melody.
// The keyboard runs from C3 to C6. Phones show C4 to E5, so other notes are still
// heard there, but their keys are off screen.
export const songs = [
  {
    title: "Clocks",
    artist: "Coldplay",
    color: "mint",
    bpm: 131,
    measures: [
      "Eb5 Bb4 G4 Eb5 Bb4 G4 Eb5 Bb4",
      "Db5 Bb4 F4 Db5 Bb4 F4 Db5 Bb4",
      "Db5 Bb4 F4 Db5 Bb4 F4 Db5 Bb4",
      "C5 Ab4 F4 C5 Ab4 F4 C5 Ab4",
    ],
    bass: [
      "Eb3 - - Eb3 - - Eb3 -",
      "Bb3 - - Bb3 - - Bb3 -",
      "Bb3 - - Bb3 - - Bb3 -",
      "F3 - - F3 - - F3 -",
    ],
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    color: "peach",
    bpm: 171,
    measures: [
      "F4 - - - F4 - - Eb4",
      "F4 G4 - C4 - Eb4 - -",
      "F4 - - - F4 - - Eb4",
      "F4 G4 - C4 - Eb4 - -",
      "Bb4 G4 - F4 - Eb4 - -",
      "Bb4 G4 - F4 - Eb4 - F4",
      "- - - - - - - -",
    ],
    bass: [
      "F3 - - - F3 - - -",
      "F3 - - - F3 - - -",
      "C3 - - - C3 - - -",
      "C3 - - - C3 - - -",
      "Eb3 - - - Eb3 - - -",
      "Eb3 - - - Eb3 - - -",
      "Bb3 - - - - - - -",
    ],
  },
  {
    title: "Sanguine Paradise",
    artist: "Lil Uzi Vert",
    color: "lavender",
    bpm: 135,
    slotsPerBeat: 4,
    measures: [
      "E5 - F#4 A4 - F#4 A4 - B4 - - C#5 - - F#4 -",
      "E5 - F#4 A4 - F#4 A4 - B4 - - C#5 - - F#4 -",
      "E5 - F#4 A4 - F#4 A4 - B4 - - C#5 - - F#4 -",
      "E5 - F#4 A4 - F#4 A4 - B4 - - C#5 - - F#4 -",
      "A4 - F#4 A4 - F#4 A4 - G#4 - - A4 - - F#4 -",
      "A4 - F#4 A4 - F#4 A4 - G#4 - - A4 - - F#4 -",
      "A4 - F#4 A4 - F#4 A4 - G#4 - - A4 - - F#4 -",
      "A4 - F#4 A4 - F#4 A4 - G#4 - - A4 - - F#4 -",
    ],
    bass: [
      "F#3 - - - - - - - - - - - F#3 - - -",
      "- - - - F#3 - - - - - F#3 - - - F#3 -",
      "D3 - - - - - D3 - - - - - D3 - - -",
      "- - - - E3 - - - - - E3 - - - E3 -",
      "F#3 - - - - - - - - - - - F#3 - - -",
      "- - - - F#3 - - - - - F#3 - - - F#3 -",
      "D3 - - - - - D3 - - - - - D3 - - -",
      "- - - - E3 - - - - - E3 - - - E3 -",
    ],
  },
  {
    title: "Looks Can Kill",
    artist: "IVE",
    color: "blue",
    bpm: 130,
    slotsPerBeat: 4,
    measures: [
      "C#4 - C#4 - C#4 - E4 F#4 - G#4 - G#4 - G#4 G4 -",
      "F#4 - - - - - - - F#4 - - F#4 - - F#4 G#4",
      "C#4 - C#4 - C#4 - E4 F#4 - G#4 - G#4 - G#4 G4 -",
      "F#4 - - - - - - - - - - - - - - -",
      "C#4 - C#4 - C#4 - E4 F#4 - G#4 - G#4 - G#4 G4 -",
      "F#4 - - - - - - - F#4 - - F#4 - - F#4 G#4",
      "C#4 - C#4 - C#4 - E4 F#4 - G#4 - G#4 - G#4 G4 -",
      "F#4 - - - - - - - - - - - - - - -",
    ],
    bass: [
      "C#3 - - - C#3 - - - C#3 - - - C#3 - - -",
      "G#3 - - - G#3 - - - E3 - - - E3 - - -",
      "C#3 - - - C#3 - - - C#3 - - - C#3 - - -",
      "G#3 - - - G#3 - - - E3 - - - E3 - - -",
      "C#3 - - - C#3 - - - C#3 - - - C#3 - - -",
      "G#3 - - - G#3 - - - E3 - - - E3 - - -",
      "C#3 - - - C#3 - - - C#3 - - - C#3 - - -",
      "G#3 - - - G#3 - - - E3 - - - E3 - - -",
    ],
  },
  {
    title: "Summertime Sadness",
    artist: "Lana Del Rey",
    color: "pink",
    bpm: 112,
    slotsPerBeat: 4,
    measures: [
      "- - C#5 - C#5 - C#5 - E5 - F#5 - E5 - - -",
      "C#5 - C#5 - C#5 - - - E5 - - F#5 E5 - - -",
      "- - - - C#5 - C#5 - E5 - F#5 - E5 - - -",
      "C#5 - C#5 - C#5 - - - E5 - - F#5 E5 - - -",
      "- - - - C#5 - C#5 - E5 - F#5 - E5 - - -",
      "C#5 - C#5 - C#5 - - - E5 F#5 E5 - - - D#5 -",
      "D#5 - - - - - - - D#5 - F#5 - E5 - D#5 -",
      "C#5 - - - - - - - - - - - - - - -",
    ],
    bass: [
      "A3 - - - - - - - A3 - - - - - - -",
      "C#3 - - - - - - - C#3 - - - - - - -",
      "B3 - - - - - - - B3 - - - - - - -",
      "F#3 - - - - - - - F#3 - - - - - - -",
      "A3 - - - - - - - A3 - - - - - - -",
      "C#3 - - - - - - - C#3 - - - - - - -",
      "B3 - - - - - - - B3 - - - - - - -",
      "F#3 - - - - - - - F#3 - - - - - - -",
    ],
  },
  {
    title: "Golden",
    artist: "HUNTR/X",
    color: "peach",
    bpm: 123,
    slotsPerBeat: 3,
    measures: [
      "B4 - B4 - E5 -",
      "E5 - - E5 - - E5 - B4 B4 - D5",
      "D5 - - - - - D5 D5 D5 D5 C5 C5",
      "C5 - B4 - - - D5 D5 D5 D5 C5 C5",
      "C5 - B4 - - - - - - - - -",
    ],
    bass: [
      "- - - - - -",
      "C3 - - C3 - - C3 - - C3 - -",
      "D3 - - D3 - - D3 - - D3 - -",
      "G3 - - G3 - - G3 - - G3 - -",
      "E3 - - E3 - - E3 - - E3 - -",
    ],
  },
];

export const navigation = [
  { id: "about", label: "About", color: "blue" },
  { id: "projects", label: "Projects", color: "lavender" },
  { id: "experience", label: "Experience", color: "mint" },
  { id: "contact", label: "Contact", color: "peach" },
];

export const about = {
  title: "A bit about me",
  paragraphs: [
    "Hey, I'm Jesse! I'm on the Model Data Access team at Two Sigma. I studied computer science and math at Vanderbilt, and took quite a few CS courses along the way, including machine learning, operating systems, cryptography, compilers, and search engines.",
    "I've also interned at Coinbase and Splunk, done some self-studying, and built a few fun projects. To be honest, I really don't know what I want to do in the future, so I'm still trying to figure things out!",
  ],
  education: {
    school: "Vanderbilt University",
    studies: ["BS/MS Computer Science", "Minor in Mathematics"],
  },
  hobbiesIntro: "Here are some things I like to do outside of coding...",
  hobbies: [
    { icon: "basketball", label: "Basketball", color: "mint" },
    { icon: "piano", label: "Piano", color: "lavender" },
    { icon: "cooking", label: "Cooking", color: "peach" },
    { icon: "spotify", label: "Spotify", color: "blue" },
  ],
};

export const projectsIntro = {
  title: "Things I've built",
};

// `frame: "window"` shows the image as a screenshot with a shadow.
// `frame: "free"` places a transparent image straight onto the card.
// Add `github` or `demo` URLs to a project to show those buttons on its card.
export const projects = [
  {
    title: "Spotify Stats",
    color: "blue",
    image: spotifyImage,
    frame: "window",
    alt: "The Spotify Stats app showing a ranked list of a listener's top tracks with album art.",
    description:
      "A centralized site where you can view your Spotify stats, including recently played tracks, top tracks, top artists, and personal information. Unfortunately, Spotify requires me to explicitly whitelist you before you can access it.",
    tags: ["React", "AWS Amplify", "Lambda", "DynamoDB", "API Gateway"],
    // github: "https://github.com/zhongj3803/Spotify-Stats",
    // demo: "https://main.d3alb154qr6hrl.amplifyapp.com/",
  },
  {
    title: "DALL-E Clone",
    color: "mint",
    image: dalleImage,
    frame: "window",
    alt: "The DALL-E clone's art gallery page with a search box above a grid of generated images.",
    description:
      "Clone of the well-known AI image generator DALL-E, with functions for creating images and adding them to a gallery!",
    tags: ["React", "Node", "Express", "MongoDB", "Tailwind CSS", "Cloudinary"],
    // github: "https://github.com/zhongj3803/DALL-E-clone",
  },
  {
    title: "White Matter Tractography",
    color: "lavender",
    image: tractographyImage,
    frame: "free",
    alt: "Two slices of a brain scan with the traced white matter tracts highlighted.",
    description:
      "A C++ executable that highlights the white matter tracts (fiber pathways) of an input diffusion tensor image. I used ITK to extract the principal eigenvectors, calculate the fractional anisotropy, and trace brain tracts from seed points based on vector fields and stopping conditions.",
    tags: ["C++", "ITK"],
  },
  {
    title: "The XOR Problem",
    color: "peach",
    image: xorImage,
    frame: "window",
    alt: "Four clusters of points split into two classes by the neural network's curved decision boundaries.",
    description:
      "A solution to the famous XOR classification problem, driven by a multi-layer neural network with adjustable hyperparameters. The decision boundaries of the trained classifier are shown here!",
    tags: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
  },
  {
    title: "Parser",
    color: "pink",
    image: parserImage,
    frame: "free",
    alt: "Diagram of a line of COOL code passing through the lexer into tokens, then through the parser into an abstract syntax tree.",
    description:
      "A parser for COOL (Classroom Object Oriented Language) that deserializes input from the lexer and generates a serialized abstract syntax tree for the semantic analyzer. This made heavy use of Python's lex and yacc tools.",
    tags: ["Python", "Lex & Yacc", "Compilers"],
  },
];

export const experienceIntro = {
  title: "Where I've worked",
};

// To change a logo, replace its file in Assets/Logos, or import a different image
// at the top of this file. Any SVG, PNG, or WebP works, and it's fitted to the tile.
export const experience = [
  {
    org: "Two Sigma",
    role: "Model Data Access team",
    dates: "Present",
    logo: twoSigmaLogo,
    color: "blue",
  },
  {
    org: "Coinbase",
    role: "Software Engineer Intern",
    dates: "May – Aug 2025",
    logo: coinbaseLogo,
    color: "lavender",
    note: "Stablecoin Ecosystem team. Built a Temporal workflow to monitor mints and burns in progress, plus a retry flow for failed verifications that saved 12+ hours of debugging a week.",
  },
  {
    org: "Splunk",
    role: "Software Engineer Intern",
    dates: "Jun – Aug 2024",
    logo: splunkLogo,
    color: "mint",
    note: "Search Lifecycle team. Cut episode triaging noise by 29% with a new SLI, built dashboards deployed across 10,000+ production customer stacks, and fixed a C++ bug in Splunk Daemon.",
  },
  {
    org: "Open Avenues",
    role: "Software Engineer Intern",
    dates: "Jun – Aug 2023",
    logo: openAvenuesLogo,
    color: "peach",
    note: "Automated sending birthday cards with the Lob API and Python, built Node REST APIs on PostgreSQL, and redesigned the React frontend, cutting navigation time by 30%.",
  },
  {
    org: "Brain Racers",
    role: "Software Engineer Intern",
    dates: "Jan – Apr 2023",
    logo: brainRacersLogo,
    color: "pink",
    note: "Raised user retention by 24% with educational animations in React and TypeScript, and wrote SQL queries that improved data processing efficiency by 23%.",
  },
  {
    org: "Vanderbilt Computer Science",
    role: "Head Teaching Assistant",
    dates: "Aug 2023 – May 2026",
    logo: vanderbiltLogo,
    color: "blue",
    note: "Managed and trained a team of 15 TAs, and delivered lectures to 200+ students on advanced C++, software design principles, and design patterns.",
  },
];

export const skillsIntro = {
  title: "Languages, technologies, and tools",
};

// Names with a matching entry in components/Skills.js get a logo. Others just show the text.
export const skills = [
  {
    group: "Languages",
    items: [
      "C++",
      "C",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "Go",
      "Rust",
      "SQL",
      "Bash",
      "Racket",
      "Prolog",
      "XML",
      "mtail",
    ],
  },
  {
    group: "Frameworks and technologies",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "AWS",
      "Linux",
      "Docker",
      "Kubernetes",
      "Terraform",
      "TensorFlow",
      "Keras",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "GraphQL",
      "gRPC",
      "Temporal",
      "Datadog",
      "Jest",
    ],
  },
  {
    group: "Tools",
    items: [
      "Git",
      "GDB",
      "Vim",
      "Emacs",
      "VS Code",
      "Jira",
      "Linear",
      "Confluence",
      "Retool",
      "Figma",
      "Postman",
      "Insomnia",
      "Jupyter",
      "Splunk",
      "Vercel",
      "GitHub Pages",
    ],
  },
];

export const contact = {
  title: "Connect with me.",
  links: [
    { icon: "github", label: "GitHub", href: "https://github.com/zhongj3803" },
    { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/jesse-zhong" },
    { icon: "instagram", label: "Instagram", href: "https://www.instagram.com/besse.bong/" },
  ],
};

export const footer = "Designed and Developed by Jesse Zhong";
