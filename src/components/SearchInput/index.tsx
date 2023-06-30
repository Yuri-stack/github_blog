import { useContext } from "react";
import { SearchInputContainer } from "./styles";
import { PostsContext } from "../../context/PostsContext";

export function SearchInput() {
    const { posts } = useContext(PostsContext)

    return (
        <SearchInputContainer>
            <header>
                <h3>Publicações</h3>
                <span>{posts.total_count} publicações</span>
            </header>

            <input type="text" placeholder="Buscar conteúdo" />
        </SearchInputContainer>
    )
}
