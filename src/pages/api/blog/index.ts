import { NextApiRequest, NextApiResponse } from "next";
import { ApiResult, BlogPosts } from "./common";
import { waitCallback, waitSimpleCallback, parseMdFile } from "@/utilities/";

import fs from "fs";
import path from "path";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse<ApiResult<BlogPosts>>
) {
    const postsPath = path.join(process.cwd(), "public/posts");
    const existsPosts = await waitSimpleCallback<boolean>(call => fs.exists(postsPath, call));

    if(!existsPosts) {
        res.status(200).json([]);
        return;
    }

    const posts = await waitCallback<string[], unknown>(call => fs.readdir(postsPath, call));

    if(!posts.length)
        res.status(200).json([]);

    const availableMdFiles = posts.filter(p => p.endsWith(".md"));

    const readFiles = await Promise.all(availableMdFiles.map(async p => {
        const postPath = path.join(postsPath, p);
        const file = await waitCallback<Buffer, unknown>(call => fs.readFile(postPath, call));
        const stripExt = p.substring(0, p.length - 3);
        return [stripExt, file] as [string, Buffer];
    }));

    const parsedFiles = readFiles.map(([name, content]) => parseMdFile(content, name));


    res.status(200).json(parsedFiles);
} 
