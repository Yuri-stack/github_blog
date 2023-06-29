import { useCallback, useContext, useEffect, useState } from "react";
import { Post } from "../../components/CardPosts";
import { Profile } from "../../components/Profile/Profile";
import { SearchInput } from "../../components/SearchInput";
import { PostsListContainer } from "./styles";
import { PostsContext, UserI } from "../../context/PostsContext";
import { api } from "../../lib/axios";

interface ProfileData {
    login: string;
    bio: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company?: string;
    followers: number;
  }

export function Home() {
    
    const { user } = useContext(PostsContext)

    // console.log(user.name)

    // const [user, setUser] = useState<UserI>({} as UserI)

    // async function getUserData(){
    //     try {
    //         const response = await api.get(`/users/Yuri-stack`);
    //         setUser(response.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
        
    // }

    // const getUser = async () => {
    //     const response = await api.get('/users/Yuri-stack')
    //     setUser(response.data)
    // }

    // useEffect(() => {getUserData}, [])

    // const [profileData, setProfileData] = useState<ProfileData>(
    //     {} as ProfileData
    //   );
    //   const [isLoading, setIsLoading] = useState(true);
    
    //   const getProfileData = useCallback(async () => {
    //     try {
    //       setIsLoading(true);
    //       const response = await api.get(`/users/Yuri-stack`);
    
    //       setProfileData(response.data);
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   }, [profileData]);
    
    //   useEffect(() => {
    //     getProfileData();
    //   }, []);

    //   console.log(profileData.login)

    // console.log(user.name)

    return (
        <>
            <Profile />
            <SearchInput />
            <PostsListContainer>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </PostsListContainer>
        </>
    )
}
