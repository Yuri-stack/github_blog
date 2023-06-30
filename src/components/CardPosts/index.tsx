import { PostContainer } from "./styles";

interface PostI{
    title: string
    updated_at: string
    body: string
}

export function Post({ title, body, updated_at }: PostI) {
    return (
        <PostContainer to={`/post/1`}>
            <div>
                <strong>{ title }</strong>
                <span>{ updated_at }</span>
            </div>
            <p>{ body }</p>
        </PostContainer>
    );
}