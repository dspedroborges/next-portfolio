import { BsEnvelope, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

type OptionType = {
  name: string;
  link: string;
}

const options = [
  { name: "Projetos", link: "#projetos" },
  { name: "Contato", link: "#contato" },
]

const projects = [
  {
    title: "Teste",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laudantium cumque suscipit, debitis obcaecati tempore ipsum minus libero rem eos consectetur ab magni? Optio maxime assumenda numquam reiciendis illo. Ipsum.",
    techs: ["Next", "Prisma", "Tailwind"],
    liveDemoLink: "",
    codeLink: "",
  },
  {
    title: "Teste",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laudantium cumque suscipit, debitis obcaecati tempore ipsum minus libero rem eos consectetur ab magni? Optio maxime assumenda numquam reiciendis illo. Ipsum.",
    techs: ["Next", "Prisma", "Tailwind"],
    liveDemoLink: "",
    codeLink: "",
  },
  {
    title: "Teste",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laudantium cumque suscipit, debitis obcaecati tempore ipsum minus libero rem eos consectetur ab magni? Optio maxime assumenda numquam reiciendis illo. Ipsum.",
    techs: ["Next", "Prisma", "Tailwind"],
    liveDemoLink: "",
    codeLink: "",
  }
];

export default function Home() {
  return (
    <div className="bg-gray-950 pt-16" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%23353535' fill-opacity='0.44' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E")` }}>
      <Navbar options={options} />
      <h1 className="text-2xl lg:text-4xl font-bold text-center my-4 text-green-400"> &gt; Pedro Borges <span className="font-bold animate-blink ml-2 border-r-[25px] border-green-400 p-0"></span></h1>
      <p className="text-center text-green-400 text-xs md:text-md lg:text-lg p-2">Sou desenvolvedor de software, principalmente para web. Atuo como front-end e back-end, isto é, full-stack.</p>

      <div className="bg-black text-green-400 w-[98%] mx-auto lg:w-1/2 p-4 rounded-xl my-8">
        <div className="mb-8">
          <p>&gt; Pedro.currentLocation</p>
          <p>"Brasília-DF"</p>
        </div>
        <div className="mb-8">
          <p>&gt; Pedro.contactInfo</p>
          <p>[
            "<a href="#" target="_blank" className="text-blue-300 hover:text-blue-400 hover:underline">tpedroborges@gmail.com</a>",
            "<a href="#" target="_blank" className="text-blue-300 hover:text-blue-400 hover:underline">Linkedin</a>",
            "<a href="#" target="_blank" className="text-blue-300 hover:text-blue-400 hover:underline">Github</a>",
            ]
          </p>
        </div>
        <div className="mb-8">
          <p>&gt; Pedro.resume</p>
          <p>"<a href="#" target="_blank" className="text-blue-300 hover:text-blue-400 hover:underline">pedro.pdf</a>",</p>
        </div>
        <div className="mb-8">
          <p>&gt; Pedro.interests</p>
          <p>["acoustic guitar", "juggling"]</p>
        </div>
        <div className="mb-8">
          <p>&gt; Pedro.education</p>
          <p>"Tecnólogo em Sistemas para Internet"</p>
        </div>
        <div className="mb-8">
          <p>&gt; Pedro.skills</p>
          <p>["Javascript", "Typescript", "React", "Next", "Prisma", "Tailwind", "Git"]</p>
        </div>
        <div className="mb-8">
          <p>&gt; <span className="font-bold animate-blink ml-2 border-r-8 border-green-400 p-0"></span></p>
        </div>
      </div>

      <div id="projetos" className="pt-20">
        <div>
          <h2 className="text-2xl font-bold text-center text-green-400">Projetos</h2>
          <div className="h-2 mt-4 bg-green-400 w-[75px] mx-auto"></div>
        </div>

        <div className="flex justify-around items-center p-8 flex-wrap gap-4">
          {
            projects.map((project, i) => {
              return (
                <ProjectCard key={i} {...project} />
              )
            })
          }
        </div>
      </div>

      <div id="contato" className="pt-20">
        <div>
          <h2 className="text-2xl font-bold text-center text-green-400">Contato</h2>
          <div className="h-2 mt-4 bg-green-400 w-[75px] mx-auto"></div>
        </div>

        <div className="flex justify-center pt-12 pb-28 px-2 lg:px-12">
          <ul className="flex flex-col justify-center items-start gap-4">
            <li className="text-green-400 text-center"><span className="font-bold"><BsWhatsapp className="inline" /> Whatsapp: </span><span>(61) 9 9874-6331</span></li>
            <li className="text-green-400 text-center"><span className="font-bold"><BsEnvelope className="inline" /> Email: </span><span>tpedroborges@gmail.com</span></li>
            <li className="text-green-400 text-center"><span className="font-bold"><BsLinkedin className="inline" /> Linkedin: </span><span>pedroborges11</span></li>
            <li className="text-green-400 text-center"><span className="font-bold"><BsGithub className="inline" /> Github: </span><span>wdpedroborges</span></li>
          </ul>
        </div>
      </div>

      <div className="bg-black bg-opacity-50 flex flex-col items-center justify-center min-h-[100px]">
        <p className="text-center text-green-400">Desenvolvido por Pedro Borges &copy; {new Date().getFullYear()} </p>
      </div>
    </div>
  );
}

function Navbar({ options }: { options: OptionType[] }) {
  return (
    <nav className="w-full bg-black bg-opacity-75 text-green-400 fixed top-0 z-50 h-[65px]">
      <ul className="flex justify-around items-center p-4">
        {
          options.map((option: OptionType, i) => {
            return (
              <li key={i} className="group overflow-hidden">
                <a href={ option.link }>{ option.name } </a>
                <div className="-translate-x-[200%] group-hover:translate-x-0 h-1 mt-2 bg-green-400 w-[40px] mx-auto transition-all"></div>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

function ProjectCard({ title, description, techs, liveDemoLink, codeLink }: { title: string, description: string, techs: string[], liveDemoLink: string, codeLink: string }) {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl flex flex-col gap-4 justify-center items-center">
      <div className="h-[100px] w-full bg-black rounded-xl bg-fixed" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%234ade80' fill-opacity='1'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      <div className="flex flex-col items-center gap-8">
        <h3 className="font-bold text-center">{title}</h3>
        <p className="w-[90%] lg:w-[45ch] text-justify">{description}</p>

        <div className="flex justify-center items-center gap-2 flex-wrap">
          {
            techs.map((tech, i) => {
              return (
                <span key={i} className="border p-2 border-green-400 rounded cursor-pointer hover:-translate-y-1">{tech}</span>
              )
            })
          }
        </div>

        <div className="flex gap-2 justify-center">
          <a href={liveDemoLink} className="bg-green-400 text-black p-2 rounded-xl font-bold hover:bg-green-300">Live Demo <FiExternalLink className="inline" /> </a>
          <a href={codeLink} className="bg-black text-green-400 p-2 rounded-xl font-bold hover:bg-gray-800">Código <BsGithub className="inline" /> </a>
        </div>
      </div>
    </div>
  )
}