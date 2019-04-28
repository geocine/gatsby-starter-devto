import styled from '@emotion/styled'

const Card = styled.div`
  background: #fff;
  margin: 20px auto;
  text-align: left;
  border: 1px solid #d6d6d6;
  box-shadow: 3px 3px 0px #bababa;
  border-radius: 3px;
  max-width: 800px;
  width: auto;
  padding: 50px ${props => props.padding || 85}px;

  @media only screen and (max-width: 420px) {
    padding: 50px 20px;
    margin: 0 5px 10px 5px;
  }
`

export default Card
