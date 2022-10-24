import { IconType } from "react-icons";
import {
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiPhp,
  SiAmazonaws,
  SiSwift,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Item = ({ name, _icon }: { name: string; _icon: IconType }) => {
    return (
      <div className="flex items-center space-x-2 rounded-md border 
      border-white/20 bg-white/5 p-3">
        <p className="text-white/80">{name}</p>
        <_icon className="h-6 w-6 text-white/80" />
        
      </div>
    );
  };

const Skills = () => {
    return(
        <div className="space-y-4">
        <h1 className="sm:text-4xl, text-3xl font-bold md:text-5xl pt-12 pl-5">Skills</h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 pl-5 pr-5 rounded-md border ml-5 mr-5
      border-white/20 bg-white/5 pt-12 pb-12">
        <Item name="HTML" _icon={SiHtml5} />
        <Item name="CSS" _icon={SiCss3} />
        <Item name="Javascript" _icon={SiJavascript} />
        <Item name="MySQL" _icon={GrMysql} />

        <Item name="React" _icon={SiReact} />
        <Item name="Typescript" _icon={SiTypescript} />
        <Item name="Node.js" _icon={SiNodedotjs} />
        <Item name="Next.js" _icon={SiNextdotjs} />

        <Item name="Tailwind CSS" _icon={SiTailwindcss} /> 
        <Item name="C++" _icon={SiCplusplus} />
        <Item name="Python" _icon={SiPython} />
        <Item name="Swift" _icon={SiSwift} />

        <Item name="php" _icon={SiPhp} />
        <Item name="AWS" _icon={SiAmazonaws} />
        <Item name="MongoDB" _icon={SiMongodb} />
        <Item name="Git" _icon={SiGit} />
    </div>
    </div>


    )
}

export default Skills;