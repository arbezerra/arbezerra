import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Hero({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void;
}) {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm Andre, a{" "}
            <span className="text-primary">Full-Stack Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            I build modern web applications with Next.js and Node.js
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="text-lg px-8 py-6 cursor-pointer"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
