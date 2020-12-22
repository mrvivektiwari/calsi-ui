import styled from 'styled-components';

const ButtonStyle = styled.input`
  color: ${props => props.theme.font_color};
  background: ${props => props.theme.background_color};
  width: 130px;
  height: 50px;
`;

function Button(props) {
  return (
    <ButtonStyle
        name={props.name}
        type="button"
        value={props.label} 
        onClick={props.handleClick}
    /> 
  );
}

export default Button;
