import { useContext } from "react";
import { SearchInputContainer } from "./styles";
import { Context } from "../../context/Context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchInput() {
    const { posts, getPosts } = useContext(Context)

    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchPosts(data: SearchFormInput) {
        await getPosts(data.query)
    }

    return (
        <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
            <header>
                <h3>Publicações</h3>
                <span>{posts?.total_count} publicações</span>
            </header>

            <input
                type="text"
                placeholder="Buscar conteúdo" {...register("query")} />
        </SearchInputContainer>
    )
}
