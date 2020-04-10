import styled from 'styled-components';

const size = ({ 
    width,
    height 
}) => `
  ${ width ? `width: ${width}` : "" };
  ${ height ? `height: ${height}` : "" };
`;
const margin = ({
    margin, 
    marginT, 
    marginB, 
    marginL, 
    marginR 
}) => `
  ${ margin ? `margin: ${margin};` : "" };
  ${ marginT ? `margin-top: ${marginT};` : "" };
  ${ marginB ? `margin-bottom: ${marginB};` : "" };
  ${ marginL ? `margin-left: ${marginL};` : "" };
  ${ marginR ? `margin-right: ${marginR};` : "" };
`;
const padding = ({ 
    padding, 
    paddingT, 
    paddingB, 
    paddingL, 
    paddingR
}) => `
    ${ padding ? `padding: ${padding};` : "" };
    ${ paddingT ? `padding-top: ${paddingT};` : "" };
    ${ paddingB ? `padding-bottom: ${paddingB};` : "" };
    ${ paddingL ? `padding-left: ${paddingL};` : "" };
    ${ paddingR ? `padding-right: ${paddingR};` : "" };
`;
const positions = ({
    position, 
    top,
    right, 
    bottom, 
    left
}) => `
  ${ position ? `position: ${position};` : "" };
  ${ top ? `top: ${top};` : "" };
  ${ right ? `right: ${right};` : "" };
  ${ bottom ? `bottom: ${bottom};` : "" };
  ${ left ? `left: ${left};` : "" };

`;

const border = ({
    border,
    radius
}) => `
    ${ border ? `border: ${border};` : "" };
    ${ radius ? `border-radius: ${radius};` : "" };

`;
const styles = props => `
  ${ size(props) }
  ${ margin(props) }
  ${ padding(props) }
  ${ positions(props) }
  ${ border(props) }
`;

const StyledImage = styled.img`
    ${styles}
`

export default StyledImage;