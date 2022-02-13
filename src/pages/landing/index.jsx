import { Container, NavBar, SocialMedia, TikTokLogo, InstagramLogo, EmailLogo,Enter,LinkTo,LinkRouter } from './styles'
export function Landing() {

  return (
    <Container>
      <NavBar>
        <SocialMedia>
          <LinkTo href="https://www.tiktok.com/@255cl" target="_blank"><TikTokLogo /></LinkTo>
          <LinkTo href="https://www.instagram.com/255cl/" target="_blank"><InstagramLogo /></LinkTo>
          <LinkTo href="mailto:contacto@255.cl"><EmailLogo /></LinkTo>
        </SocialMedia>
        <LinkRouter to="/films" style={{paddingRight:"3rem"}}><Enter>Enter</Enter></LinkRouter>
      </NavBar>
      
    </Container>
  )
}
