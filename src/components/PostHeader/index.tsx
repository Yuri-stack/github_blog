import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../ExternalLink";
import { PostHeaderContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar,faChevronLeft,faComment } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function PostHeader() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <PostHeaderContainer>
            <header>
                <ExternalLink 
                    as="button" 
                    onClick={ goBack }
                    icon={<FontAwesomeIcon icon={faChevronLeft} />} 
                    text="Voltar" href="#" variant="iconLeft"
                />
                <ExternalLink text="Ver no Github" href="#" />
            </header>

            <h1>Javascript</h1>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faGithub} />
                    Yuri-stack
                </li>
                <li>
                    <FontAwesomeIcon icon={faCalendar} />
                    Há 1 dia
                </li>
                <li>
                    <FontAwesomeIcon icon={faComment} />
                    5 comentários
                </li>
            </ul>
        </PostHeaderContainer>
    )
}
