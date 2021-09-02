import { FooterContainer, FooterTitle, FooterListItem, SocialContainer, AppList, FooterSocialList, SocialButton, FooterGrid } from './Footer.style';
import { List, Box, Typography } from '@material-ui/core';
import Link from 'ui/components/navigation/Link/Link';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterGrid>
                <div>
                    <FooterTitle>Menu</FooterTitle>
                    <List>
                        <FooterListItem>
                            <Link
                                href={'/encontrar-servico'}
                                mui={{ color: 'inherit', variant: 'body2' }}
                            >
                                Encontrar serviços
                            </Link>
                        </FooterListItem>
                        <FooterListItem>
                            <Link
                                href={'/cadastro/usuario'}
                                mui={{ color: 'inherit', variant: 'body2' }}
                            >
                                Faça seu cadastro
                            </Link>
                        </FooterListItem>
                        <FooterListItem>
                            <Link
                                href={'/'}
                                mui={{ color: 'inherit', variant: 'body2' }}
                            >
                                Por que trabalhar com Zascha?
                            </Link>
                        </FooterListItem>
                        <FooterListItem>
                            <Link
                                href={'/'}
                                mui={{ color: 'inherit', variant: 'body2' }}
                            >
                                Principais Dúvidas
                            </Link>
                        </FooterListItem>
                    </List>
                </div>

                <Box sx={{ maxWidth: '400px' }}>
                    <FooterTitle>Quem somos</FooterTitle>
                    <Typography variant={'body2'} sx={{ mt: 2 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas, quia mollitia veritatis vel quibusdam reiciendis tempora totam quo quod voluptates maxime? Unde nulla quis natus. Placeat quia corporis impedit.
                    </Typography>
                </Box>

                <SocialContainer>
                    <Box>
                        <FooterTitle>
                            Baixe o aplicativo
                        </FooterTitle>
                        <AppList>
                            <li>
                                <a href={'/'} target={'_blank'}
                                    rel={'noopener noreferrer'}>
                                    <img src={'/img/logos/app-store.png'} alt={'AppStore'} />
                                </a>
                            </li>
                            <li>
                                <a href={'/'} target={'_blank'}
                                    rel={'noopener noreferrer'}>
                                    <img src={'/img/logos/google-play.png'} alt={'Google Play'} />
                                </a>
                            </li>
                        </AppList>
                    </Box>
                    <div>
                        <FooterTitle>Redes Sociais</FooterTitle>
                        <FooterSocialList>
                            <FooterListItem>
                                <SocialButton href={'/'} >
                                    <i className={'twf-facebook-f'}></i>
                                </SocialButton>
                            </FooterListItem>
                            <FooterListItem>
                                <SocialButton href={'/'} >
                                    <i className={'twf-instagram'}></i>
                                </SocialButton>
                            </FooterListItem>
                            <FooterListItem>
                                <SocialButton href={'/'} >
                                    <i className={'twf-youtube'}></i>
                                </SocialButton>
                            </FooterListItem>
                        </FooterSocialList>
                    </div>
                </SocialContainer>
            </FooterGrid>
        </FooterContainer >
    );
};

export default Footer;