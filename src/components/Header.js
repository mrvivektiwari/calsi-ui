import styled from 'styled-components';

const ThemeButton = styled.button`
  color: ${props => props.theme.font_color};
  background: ${props => props.theme.background_color};
`;

const HeaderDiv = styled.div`
  color: ${props => props.theme.font_color};
  background: ${props => props.theme.background_color};
`;

function Header(props) {
    return (
        <HeaderDiv className="d-flex justify-content-between">
            <div>
                <ThemeButton type="button" onClick={props.changeMode}>
                    {props.mode ? 'Normal Mode' : 'Scientific Mode'}
                </ThemeButton>
            </div>
            <div>
                <ThemeButton type="button" onClick={() => props.changeTheme('light')}>Light Theme</ThemeButton>
                <ThemeButton type="button" onClick={() => props.changeTheme('dark')}>Dark Theme</ThemeButton>
            </div>
        </HeaderDiv>
    );
  }
  
export default Header;
  