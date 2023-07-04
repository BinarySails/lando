
export interface BlogPost {
    slug: string;
    name: string;
    description: string;
    body: string;
}

export type BlogPosts = Array<Omit<BlogPost, "body">>;

export interface BlogError {
    error: string;
} 

export type ApiResult<T> = T | BlogError;



