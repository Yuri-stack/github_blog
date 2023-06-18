import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
    return (
        <ProfileContainer>
            <ProfilePicture
                src="https://avatars.githubusercontent.com/u/62682253?v=4"
                alt="Foto do Perfil do Github" />

            <ProfileDetails>
                <header>
                    <h1>Yuri Oliveira</h1>

                    <ExternalLink text="Github" href="#" />
                </header>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quod saepe cumque fuga suscipit, facere voluptatum deserunt iure dignissimos quas recusandae! Nostrum veritatis in mollitia neque unde. Blanditiis, itaque laborum!
                </p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                        lik
                    </li>
                        <li>
                            <FontAwesomeIcon icon={faBuilding} />
                            Gene
                        </li>
                    <li>
                        <FontAwesomeIcon icon={faUserGroup} />
                        20 seguidores
                    </li>
                </ul>
            </ProfileDetails>
        </ProfileContainer>
    )
}
