import { useContext } from "react";
import { PostCard } from "../../components/PostCard";
import { Profile } from "../../components/Profile/Profile";
import { SearchInput } from "../../components/SearchInput";
import { PostsListContainer } from "./styles";
import { Context, UserI } from "../../context/Context";
import { Spinner } from "../../components/Spinner";

export function Home() {
    const { posts, isLoading } = useContext(Context)

    return (
        <>
            <Profile />
            <SearchInput />
            {
                isLoading ? <Spinner /> : (
                    <PostsListContainer>
                        {
                            posts !== undefined ? (
                                posts.items?.map(item => (
                                    <PostCard
                                        key={item.number}
                                        title={item.title}
                                        number={item.number}
                                        body={item.body}
                                        created_at={item.created_at}
                                        comments={item.comments}
                                        html_url={item.html_url}
                                        user={item.user}
                                    />
                                ))
                            ) : (
                                <h1>Nenhuma Postagem Encontrada</h1>
                            )
                        }
                    </PostsListContainer>
                )
            }
        </>
    )
}
