import { useState, useEffect } from "react";
import {
    ContainerStyled,
    SectionContainer,
    SectionTitle,
    SectionDescription,
    SectionButton,
    SectionPictureContainer,
    BottomButton,
} from "./_presentation.styled";


const Presentation = () => {
    const [cleanerPicture, setCleanerPicture] = useState('');

    useEffect(() => {
        const newCleanerPicture = Math.random() < 0.5 ? '/img/home/housekeeper.png' : '/img/home/janitor.png';
        setCleanerPicture(newCleanerPicture);
    }, []) 

    return <SectionContainer>
        <ContainerStyled>
            <SectionTitle>
                Conheça a <em>Plataforma</em>
                <i className={'twf-search'} />
            </SectionTitle>
            <SectionDescription>
                Acompanhe tudo o que rola com os seus Leads nos lançamentos de produtos digitais.
            </SectionDescription>

            <SectionButton
                mui={{ variant: 'contained' }}
                href={'/encontrar-diarista'}>
                Encontrar serviços
            </SectionButton>

            <SectionPictureContainer>
                <img src={cleanerPicture} alt={'Bg_Zascha'}/>
            </SectionPictureContainer>

        </ContainerStyled>

        <BottomButton>
            <i className={'twf-caret-down'} />
        </BottomButton>
    </SectionContainer>
}

export default Presentation;