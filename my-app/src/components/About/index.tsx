import { projects } from "../data/Detail";
import { projectsType } from "../data/Type";
import Icon from "../Icon";
import Library from "../Library";

export default function About() {
  return (
    <div className="w-full h-fit flex flex-col py-6 space-y-4">
      <h2 className="w-full text-3xl text-left font-lexend-600 text-navy">
        About Me
      </h2>
      <div
        className="relative w-full h-[570px] rounded-3xl overflow-hidden bg-neutral-500 bg-cover bg-bottom flex flex-col"
        style={{
          backgroundImage: `url(/aboutPic.svg)`,
        }}
      >
        <div className="absolute w-full h-3/4 top-1/4 bg-gradient-to-b from-baby-blue/0 to-baby-blue/100 z-0"></div>
        <div className="relative m-8 h-full">
          <div className="absolute inset-x-0 bottom-0 space-y-4">
            <p className="w-full md:w-4/6 h-full text-left text-base 2sm:text-lg sm:text-xl md:text-2xl font-lexend-600 text-dark-blue">
              Stop Dreaming, Start Doing!
            </p>
            <p className="w-full text-sm 2sm:text-base sm:text-lg md:text-xl font-lexend-400 text-dark-blue">
              Hello there! I’m an aspiring front-end engineer that enjoys
              learning new things. I recently completed a 6-month software
              engineering boot camp with RevoU, where I honed my skills in web
              development and multiple programming languages. Currently, I’m
              pursuing a Computer Science degree at Universitas Indonesia. I’m
              excited to bring my skills to front-end engineering projects and
              help boosting business performance. I’m ready to overcome new
              challenges and keep growing in this exciting field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
