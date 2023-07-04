import { waitCallback, parseMdFile } from "@/utilities";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiResult, BlogPost } from "./common";
import fs from "fs";
import path from "path";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse<ApiResult<BlogPost>>
) {
    const slug = req.query.slug;

    if(typeof slug !== "string") {
        res.status(400).json({
            error: "Invalid slug",
        });

        return;
    }

    const filePath = path.join(process.cwd(), "public/posts", slug + ".md");
    const fileContent = await waitCallback<Buffer, unknown>(call => fs.readFile(filePath, call));
    
    const parsedFile = parseMdFile(fileContent, slug);

    res.status(200).json(parsedFile);
} 
