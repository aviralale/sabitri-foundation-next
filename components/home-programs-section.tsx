import { Carousel } from "@/components/shared/carousel";
import { HOMEDATA } from "@/data/home.data";
export function ProgramsSection() {
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel
        title={HOMEDATA.programs.title}
        subtitle={HOMEDATA.programs.subtitle}
        slides={HOMEDATA.programs.slides}
      />
    </div>
  );
}
