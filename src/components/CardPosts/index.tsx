import { PostContainer } from "./styles";

export function Post() {
    return (
        <PostContainer to={`/post/1`}>
            <div>
                <strong>Titulo</strong>
                <span>Data</span>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate magnam eaque dolore, assumenda delectus nihil corporis voluptatum itaque ut, error recusandae hic cumque laudantium eum nam quam quos asperiores sequi.</p>
        </PostContainer>
    );
}