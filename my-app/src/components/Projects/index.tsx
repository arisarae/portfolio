import { projects } from "../data/Detail";
import { projectsType } from "../data/Type";
import Icon from "../Icon";
import Library from "../Library";

export default function Projects() {
  return (
    <div className="w-full h-fit flex flex-col py-6 space-y-4">
      <div>
        <h2 className="w-full text-3xl text-left font-lexend-600 text-navy">
          Projects
        </h2>
        {/* <p>Show All</p> */}
      </div>
      <div className="w-full h-fit space-y-14">
        {projects.map((item: projectsType) => (
          <div className="w-full h-fit flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <Library
              key={item.id}
              image={item.image}
              title={item.title}
              detail={item.tech}
              link={item.links.url}
            />
            <p
              className="w-5/6 md:w-4/6 h-full text-left text-sm md:text-base font-lexend-400 text-dark-blue"
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
