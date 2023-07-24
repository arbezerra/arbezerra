import { Request, Response } from "express";
import pool from "../lib/db";
import Project from "../models/project";
import { ValidateMethod } from "../middlewares/validate";
import { z } from "zod";
import { v4 as uuid4 } from "uuid";
import Tag from "../models/tag";

const ProjectController = {
  index: async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 0;
    const size = parseInt(req.query.size as string) || 5;
    const items = await pool<Project>("projects")
      .offset(page * size)
      .limit(size)
      .orderBy("title", "asc");
    const total = pool<{ total: number }>("projects")
      .count("id", { as: "total" })
      .first();
    items.map(async (item) => {
      item.tags = await pool<Tag>("tags")
        .select("tags.*")
        .join("projects_tags", "projects_tags.tag_id", "tags.id")
        .where("project_id", item.id);
    });
    return res.status(200).json({
      items: items,
      paginate: {
        page,
        size,
        total: (await total)?.total,
      },
    });
  },
  show: async (req: Request, res: Response) => {
    const item = await pool<Project>("projects")
      .where("id", req.params.id)
      .first();
    if (item) {
      item.tags = await pool<Tag>("tags")
        .select("tags.*")
        .join("projects_tags", "projects_tags.tag_id", "tags.id")
        .where("project_id", item.id);
    }
    return res.status(200).json(item);
  },
  slug: async (req: Request, res: Response) => {
    const item = await pool<Project>("projects")
      .where("projects.slug", req.params.slug)
      .first();
    if (item) {
      item.tags = await pool<Tag>("tags")
        .select("tags.*")
        .join("projects_tags", "projects_tags.tag_id", "tags.id")
        .where("project_id", item.id);
    }
    return res.status(200).json(item);
  },
  store: async (req: Request, res: Response) => {
    req.body.id = uuid4();
    const item = await pool<Project>("projects").insert(req.body, "id");
    return res.status(200).json(item);
  },
  tag: async (req: Request, res: Response) => {
    await pool("projects_tags").where("project_id", req.params.id).delete();
    const items = await pool("projects_tags").insert(
      req.body.tags.map((t: string) => ({ project_id: req.params.id, tag_id: t })),
      ["project_id", "tag_id"]
    );
    return res.status(200).json(items);
  },
  update: async (req: Request, res: Response) => {
    const item = await pool<Project>("projects")
      .where("id", req.params.id)
      .update(req.body);
    return res.status(200).json(item);
  },
  delete: async (req: Request, res: Response) => {
    const item = await pool<Project>("projects")
      .where("id", req.params.id)
      .delete();
    return res.status(200).json(item);
  },
  validate: (method: ValidateMethod) => {
    switch (method) {
      case ValidateMethod.CREATE:
        return z.object({
          body: z.object({
            title: z.string(),
            description: z.string(),
            href: z.string().url(),
          }),
        });
      case ValidateMethod.UPDATE:
        return z.object({
          body: z.object({
            title: z.string(),
            description: z.string(),
            href: z.string().url(),
          }),
          params: z.object({
            id: z.string().uuid(),
          }),
        });
      case ValidateMethod.TAG:
        return z.object({
          body: z.object({
            tags: z.array(z.string()),
          }),
          params: z.object({
            id: z.string().uuid(),
          }),
        });
      case ValidateMethod.ID:
        return z.object({
          params: z.object({
            id: z.string().uuid(),
          }),
        });
      case ValidateMethod.PAGINATE:
        return z.object({
          query: z.object({
            page: z
              .string()
              .optional()
              .transform((x) => parseInt(x || "0"))
              .pipe(z.number().nonnegative()),
            size: z
              .string()
              .optional()
              .transform((x) => parseInt(x || "5"))
              .pipe(z.number().positive()),
          }),
          params: z.object({
            tag: z.string().optional(),
          }),
        });
      default:
        return z.object({});
    }
  },
};

export default ProjectController;
