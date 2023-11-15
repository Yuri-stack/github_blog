import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../../context/Context";
import { PostContent } from "../../components/PostContent";
import { PostHeader } from "../../components/PostHeader";

export function Post() {
    const { posts } = useContext(Context)
    const { id } = useParams<string>()
    const post = posts.items.filter((post) => post.number == id);

    return (
        <>
            {post.length !== 0 ? (
                <>
                    <PostHeader item={post[0]} />
                    <PostContent content={post[0].body}/>
                </>
            ) : (
                <>Erro ao Carregar a Postagem</>
            )}
        </>
    )
}
