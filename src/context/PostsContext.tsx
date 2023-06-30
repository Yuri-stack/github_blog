import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from '../lib/axios';

export interface UserI {
    login: string;
    bio: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company?: string;
    followers: number;
}

export interface PostI{
    total_count: number
    items: ItemI[]
}

export interface PostsContextI {
    user: UserI
    posts: PostI
}

export interface PostsProviderI {
    children: ReactNode
}

export interface ItemI{
    title: string
    body: string
    updated_at: string
}

export const PostsContext = createContext({} as PostsContextI);

export function PostsProvider({ children }: PostsProviderI) {

    const [user, setUser] = useState<UserI>({} as UserI)
    const [posts, setPosts] = useState<PostI>({} as PostI)

    let param = "is:issue"
    let username = "Yuri-stack"
    let repo = "github_blog"

    async function getUser() {
        try {
            const response = await api.get('/users/Yuri-stack')
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function getPosts() {
        try {
            const response = await api.get(`/search/issues?q=${param}%20repo:${username}/${repo}`)
            setPosts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // async function loadInfo() {
    //     await getUser()
    // }

    useEffect(() => {
        // loadInfo()
        getUser()
        getPosts()
    }, [])

    console.log(posts)

    return (
        <PostsContext.Provider value={{ user, posts }}>
            {children}
        </PostsContext.Provider>
    )
}
