import styled from '@emotion/styled'

const Card = styled.div`
  background: white;
  background: var(--theme-container-background, #fff);
  margin: 68px auto 20px;
  text-align: left;
  border: var(--theme-container-border, 1px solid #d6d6d6);
  box-shadow: 3px 3px 0px #bababa;
  box-shadow: var(--theme-container-box-shadow, 3px 3px 0px #bababa);
  border-radius: 3px;
  max-width: 800px;
  width: auto;
  padding: 50px ${props => props.padding || 85}px;

  @media only screen and (max-width: 420px) {
    padding: 50px 20px;
    margin: 0 auto 50px;
  }
`

export default Card
