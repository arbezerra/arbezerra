import type { ICategory } from "./Category";

export type IPost = {
    id: string;
    slug: string;
    title: string;
    content: string;
    summary: string;
    date: Date;
    category: ICategory;
}