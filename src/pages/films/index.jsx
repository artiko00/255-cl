import { Container, NavBar, SocialMedia, TikTokLogo, InstagramLogo, EmailLogo,Enter,LinkTo,LinkRouter } from './styles'

import { FilmsComponent } from '../../components/FilmsComponent'

export function Films() {

  return (
    <Container>
      <FilmsComponent></FilmsComponent>
      <NavBar>
        <SocialMedia>
          <LinkTo href="https://www.tiktok.com/@255cl" target="_blank"><TikTokLogo /></LinkTo>
          <LinkTo href="https://www.instagram.com/255cl/" target="_blank"><InstagramLogo /></LinkTo>
          <LinkTo href="mailto:contacto@255.cl"><EmailLogo /></LinkTo>
        </SocialMedia>
        <LinkRouter to="/" style={{paddingRight:"3rem"}}><Enter>Home</Enter></LinkRouter>
      </NavBar>
      
    </Container>
  )
}
