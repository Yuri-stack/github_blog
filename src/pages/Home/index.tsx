import { Post } from "../../components/CardPosts";
import { Profile } from "../../components/Profile/Profile";
import { SearchInput } from "../../components/SearchInput";
import { PostsListContainer } from "./styles";

export function Home() {
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
