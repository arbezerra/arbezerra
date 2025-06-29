import { experiences } from "@/data/data";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Experience
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {experiences.map((exp, expIndex) => (
                <div
                  key={expIndex}
                  className={`relative flex items-center ${expIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:transform md:-translate-x-1.5 z-10"></div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${expIndex % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
                  >
                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex flex-col space-y-1">
                          <CardTitle className="text-xl">
                            {exp.company}
                          </CardTitle>
                          <div className="text-sm text-muted-foreground">
                            {exp.period}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {exp.positions.map((position, positionIndex) => (
                            <div
                              key={positionIndex}
                              className={
                                positionIndex > 0 ? "border-t pt-6" : ""
                              }
                            >
                              <div className="flex flex-col space-y-2 mb-3">
                                <h4 className="text-lg font-semibold text-primary">
                                  {position.title}
                                </h4>
                                <div className="text-sm text-muted-foreground">
                                  {position.period}
                                </div>
                              </div>
                              <p className="text-muted-foreground mb-4 leading-relaxed">
                                {position.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {position.technologies.map(
                                  (tech, techIndex) => (
                                    <span
                                      key={techIndex}
                                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                                    >
                                      {tech}
                                    </span>
                                  ),
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
