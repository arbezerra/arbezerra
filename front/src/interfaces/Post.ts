import type { ICategory } from "./Category";

export type IPost = {
    id: string;
    slug: string;
    title: string;
    content: string;
    summary: string;
    date: string;
    category: string;
    category_slug: string;

    author_id: string;
    category_id: string;
}