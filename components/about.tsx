import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { about, techStack } from "@/data/data";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {about}
              </p>
              <Link href="/AndreLandim.pdf" download>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-background border"
                    >
                      <IconComponent className="h-5 w-5 text-primary" />
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
