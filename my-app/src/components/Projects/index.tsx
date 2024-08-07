import { projects } from "../data/Detail";
import { projectsType } from "../data/Type";
import Icon from "../Icon";
import Library from "../Library";

export default function Projects() {
  return (
    <div className="w-full h-fit flex flex-col py-6 space-y-4">
      <div>
        <h2 className="w-full text-2xl text-left font-lexend-600 text-navy">
          Projects
        </h2>
        {/* <p>Show All</p> */}
      </div>
        {projects.map((item: projectsType) => (
          <div className="w-full h-fit flex flex-row">
            <Library
              key={item.id}
              image={item.image}
              title={item.title}
              detail={item.tech}
              link={item.links.url}
            />
            <p>{item.desc}</p>
          </div>
        ))}
    </div>
  );
}
