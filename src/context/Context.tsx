import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';
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

export interface PostI {
    total_count: number
    items: ItemI[]
}

export interface ContextI {
    user?: UserI
    posts: PostI
    getPosts: (query?: string) => Promise<void>
    isLoading: boolean
}

export interface ProviderI {
    children: ReactNode
}

export interface ItemI {
    title: string
    body: string
    created_at: string
    number: string
    html_url: string
    comments: number
    user: UserI
}

export const Context = createContext({} as ContextI);

export function Provider({ children }: ProviderI) {

    const [user, setUser] = useState<UserI>({} as UserI)
    const [posts, setPosts] = useState<PostI>({} as PostI)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const username = import.meta.env.VITE_GITHUB_USERNAME
    const repo = import.meta.env.VITE_GITHUB_REPO

    const getUser = useCallback(async () => {
        setIsLoading(true)
        try {
            const response = await api.get(`/users/${username}`)
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }, [user])

    const getPosts = useCallback(async (query: string = "") => {
        setIsLoading(true)
        try {
            const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repo}`)
            setPosts(response.data)
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }, [posts])

    useEffect(() => {
        getUser()
        getPosts()
    }, [])

    return (
        <Context.Provider value={{ user, posts, getPosts, isLoading }}>
            {children}
        </Context.Provider>
    )
}