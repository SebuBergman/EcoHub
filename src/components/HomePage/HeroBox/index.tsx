import {
  Button,
  ButtonsWrapper,
  HeroText,
  HeroTitle,
  ImageBoxContainer,
  ImageBoxWrapper,
  TextWrapper,
  TextContainer,
} from "./styled";

function HeroBox() {
  return (
    <ImageBoxContainer>
      <ImageBoxWrapper>
        <TextContainer>
          <TextWrapper>
            <HeroTitle>EcoHub: Centre for Sustainable Living</HeroTitle>
            <HeroText>
              At EcoHub, we believe in the power of collective action to bring
              about positive change on our planet. Our mission is to empower
              people of all ages to adopt sustainable lifestyles and promote a
              healthier and greener future.
            </HeroText>
          </TextWrapper>
          <ButtonsWrapper>
            <Button>HOW TO GET INVOLVED</Button>
            <Button style={{ flex: 1 }}> TELL US YOUR STORY</Button>
          </ButtonsWrapper>
        </TextContainer>
      </ImageBoxWrapper>
    </ImageBoxContainer>
  );
}

export default HeroBox;
