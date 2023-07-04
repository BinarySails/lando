import { BlogPost } from "@/pages/api/blog/common";
import { DependencyList, EffectCallback, useEffect } from "react";


export function useEffectHaveWindow(effect: EffectCallback, deps?: DependencyList) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            return effect();
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}

export function buildUrl(w: string) : string {
    const base = process.env.NEXT_PUBLIC_BASE_URL;

    if(!base)
        throw new Error("NEXT_PUBLIC_BASE_URL is not set");

    let url = base;

    if(!url.endsWith("/")) {
        url += "/";
    }

    if(w.startsWith("/")) {
        w = w.substring(1);
    }

    return url + w;
}

export async function waitCallback<T, E>(callback: (call: (err: E, data: T) => void) => void) : Promise<T> {
    return await new Promise((resolve, reject) => {
        callback((err, data) => {
            if(err) {
                reject(err);
                return;
            }

            resolve(data);
        });;
    });
}


export async function waitSimpleCallback<T>(callback: (call: (data: T) => void) => void) : Promise<T> {
    return await new Promise((resolve, reject) => {
        callback((data) => {
            resolve(data);
        });;
    });
}

export function parseMdFile(content: string | Buffer, slug?: string) {
    const lines = content.toString().split("\n");

    const data = {} as Record<string, string>;
    let state: "init" | "open" | "close" = "init";

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if(!line.length)
            continue;


        switch(state) {
            case "init":
                if(line === "---") {
                    state = "open";
                }
            continue;

            case "open":
                if(line === "---") {
                    state = "close";
                    data["body"] = lines.slice(i + 1).join("\n");
                } else {
                    const total = line.split(":");


                    if(total.length !== 2) {
                        throw new Error("Invalid format");
                    }

                    data[total[0].trim()] = total[1].trim();
                }
            continue;
        }
    }

    // validation
    const required = ["name", "description", "body"];

    const missing = required.filter(r => !data[r]);

    if(missing.length) {
        throw new Error("Missing required fields: " + missing.join(", "));
    }

    if(slug)
        data["slug"] = slug;

    return data as unknown as BlogPost;
}
