import { ItemI } from "../../context/Context";
import { relativeDateFormatter } from "../../utils/formatter";
import { PostContainer } from "./styles";

export function PostCard({ title, body, number, created_at }: ItemI) {
    const formattedDate = relativeDateFormatter(created_at)

    return (
        <PostContainer to={`/post/${number}`}>
            <div>
                <strong>{ title }</strong>
                <span>{ formattedDate }</span>
            </div>
            <p>{ body }</p>
        </PostContainer>
    );
}