import type { ITag } from "./Tag";

export type IProject = {
    id: string;
    title: string;
    description: string;
    href: string;
    tags: ITag[];
}