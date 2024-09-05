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
            <Button style={{ flex: 1 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                margin="5"
                fill="currentColor"
                className="bi bi-send bold"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
              </svg>{" "}
              TELL US YOUR STORY
            </Button>
          </ButtonsWrapper>
        </TextContainer>
      </ImageBoxWrapper>
    </ImageBoxContainer>
  );
}

export default HeroBox;