import React from 'react'
import {styled, connect, css} from "frontity"
import {Container, Grid, Typography, Button, IconButton, makeStyles, Box} from "@material-ui/core"
import logoGHCW from "../../assets/logo-GHC-W.png";
import logo from "../../assets/logo-footer.png";
import {pagesMap, footerLinks} from "../config";
import translations from "../translations";
// import {Facebook, LinkedIn} from "@material-ui/icons";


const ContainerWrapper = styled(Box)`
    padding: 32px 0;
    // background-color: #375172;
    color: #FFFFFF;
`;

const FooterLink = styled(Button)`
    display: block !important;
    color: #FFFFFF !important;
    margin-bottom: 16px !important;
`;

const HHCredits = styled(Typography)`
  text-align: center;
`;

const NimbleCredits = styled(Typography)`
    margin-top: 16px;
    text-align: center;
`;

const LogoGHC = styled.img`
  padding: 16px 0;
  height: 24px;
  margin-right: 32px;
 `;

const Contacts = styled(Typography)`
  padding-left: 16px;
`;

const PrivacyPolicy = styled(Button)`
  padding: 0 !important;
  color: #FFFFFF !important;
  margin-bottom: 16px !important;
`;

const LogoHH = styled.img`
  padding: 16px 0;
  height: 24px;
`;

const HeartIcon = () => (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="red" stroke="red" style={{transform: 'scale(0.5) translate(0px, 17px)'}}>
        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/>
    </svg>
)

const Footer = ({ state, actions, libraries }) => {
    const Html2React = libraries.html2react.Component;
    return (
        <ContainerWrapper marginTop={{md: '8px', lg: '32px'}} bgcolor="primary.main">
            <Container>
                <Grid container justify="space-between">
                    <Grid item xs={12} sm={8}>
                        <a href="https://garofalohealthcare.com" target="_blank">
                            <LogoGHC src={state.theme.options.logoGHCWhite.url} alt="Logo Garofalo Health Care"/>
                        </a>
                        <LogoHH src={state.theme.options.logoFooter.url} alt="Logo Istituto Raffaele Garofalo"/>
                    </Grid>
                    {/*<Grid item xs={12} sm={4} classes={{root: classes.socials}}>
                        <IconButton href="https://www.facebook.com/hesperiahospital" target="_blank" edge="start">
                            <Facebook />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/company/6907246" target="_blank" edge="end">
                            <LinkedIn />
                        </IconButton>
                    </Grid>*/}
                </Grid>
                <Grid container style={{margin: '16px 0'}}>
                    {footerLinks.map((chunk, id) => (
                        <Grid key={id} item xs={12} md={3}>
                            {chunk.map(linkId => (
                                <FooterLink key={linkId} onClick={() => actions.router.set(pagesMap[linkId][state.theme.lang][1])}>
                                    {pagesMap[linkId][state.theme.lang][0]}
                                </FooterLink>
                            ))}
                        </Grid>
                    ))}
                    <Grid item xs={12} md={3} css={css`border-left: 1px solid #FFFFFF;`}>
                        <Contacts variant="body2">
                            {state.theme.options.contactsFooter.map(ct => (<>
                                {ct.label}{ct.value && ': '}<b>{ct.value}</b><br />
                            </>))}
                        </Contacts>
                    </Grid>
                </Grid>
                <HHCredits variant="body2">
                    <Html2React html={state.theme.options.legal } />
                </HHCredits>
                <NimbleCredits variant="body2">
                    Made with <HeartIcon /> by <a href="https://www.nimble-solutions.com" target="_blank">Nimble Solutions</a>
                </NimbleCredits>
            </Container>
        </ContainerWrapper>
    )
}

export default connect(Footer)