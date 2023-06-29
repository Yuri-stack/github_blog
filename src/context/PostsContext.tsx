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

export interface PostsContextI {
    user: UserI
}

export interface PostsProviderI {
    children: ReactNode
}

export const PostsContext = createContext({} as PostsContextI);

export function PostsProvider({ children }: PostsProviderI) {
    const [user, setUser] = useState<UserI>({} as UserI)

    async function getUser() {
        try {
            const response = await api.get('/users/Yuri-stack')
            setUser(response.data)
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
    }, [])

    return (
        <PostsContext.Provider value={{ user }}>
            {children}
        </PostsContext.Provider>
    )
}
