import Tag from "./tag";

interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  tags: Tag[] | undefined;
}

export default Project;