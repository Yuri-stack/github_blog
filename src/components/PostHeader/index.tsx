import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../ExternalLink";
import { PostHeaderContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { ItemI } from "../../context/Context";
import { relativeDateFormatter } from "../../utils/formatter";

interface PostHeaderProps {
    item: ItemI
}

export function PostHeader({ item }: PostHeaderProps) {
    const navigate = useNavigate()

    const formattedDate = relativeDateFormatter(item.created_at)

    const goBack = () => {
        navigate(-1)
    }

    return (
        <PostHeaderContainer>
            <header>
                <ExternalLink
                    as="button"
                    onClick={goBack}
                    icon={<FontAwesomeIcon icon={faChevronLeft} />}
                    text="Voltar" href="#" variant="iconLeft"
                />
                <ExternalLink text="Ver no Github" href={item.html_url} />
            </header>

            <h1>{item.title}</h1>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faGithub} />
                    {item.user.login}
                </li>
                <li>
                    <FontAwesomeIcon icon={faCalendar} />
                    {formattedDate}
                </li>
                <li>
                    <FontAwesomeIcon icon={faComment} />
                    {item.comments} comentários
                </li>
            </ul>
        </PostHeaderContainer>
    )
}
