import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";

export function Profile() {
    const { user } = useContext(PostsContext)

    return (
        <ProfileContainer>
            <ProfilePicture
                src={user.avatar_url}
                alt="Foto do Perfil do Github" />

            <ProfileDetails>
                <header>
                    <h1>{user.name}</h1>

                    <ExternalLink text="Github" href={user.html_url} target="_blank"/>
                </header>
                <p>
                    {user.bio}
                </p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                        {user.login}
                    </li>
                        <li>
                            <FontAwesomeIcon icon={faBuilding} />
                            {user.company}
                        </li>
                    <li>
                        <FontAwesomeIcon icon={faUserGroup} />
                        {user.followers} seguidores
                    </li>
                </ul>
            </ProfileDetails>
        </ProfileContainer>
    )
}
