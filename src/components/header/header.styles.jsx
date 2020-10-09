// import styled, {css} from 'styled-components';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// const OptionContainerStyles = css`
//   padding: 10px 20px;
//   cursor: pointer;
// `
export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 80px;
`;
export const LogoContainer = styled(Link)`
  width:70px;
  height: 100%;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width:50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

// export const OptionLink = styled(Link)`
//   ${OptionContainerStyles}
// `

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `


export const OptionLink = styled(Link)`
  padding: 10px 20px;
  cursor: pointer;
`