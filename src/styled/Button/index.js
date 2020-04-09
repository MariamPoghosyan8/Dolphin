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
  ${ margin ? `margin: ${margin}` : "" };
  ${ marginT ? `margin-top: ${marginT}` : "" };
  ${ marginB ? `margin-bottom: ${marginB}` : "" };
  ${ marginL ? `margin-left: ${marginL}` : "" };
  ${ marginR ? `margin-right: ${marginR}` : "" };
`;

const padding = ({ 
    padding, 
    paddingT, 
    paddingB, 
    paddingL, 
    paddingR
}) => `
    ${ padding ? `padding: ${padding}` : "" };
    ${ paddingT ? `padding-top: ${paddingT}` : "" };
    ${ paddingB ? `padding-bottom: ${paddingB}` : "" };
    ${ paddingL ? `padding-left: ${paddingL}` : "" };
    ${ paddingR ? `padding-right: ${paddingR}` : "" };
`;

const positions = ({
    position, 
    top,
    right, 
    bottom, 
    left
}) => `
  ${ position ? `position: ${position}` : "" };
  ${ top ? `top: ${top}` : "" };
  ${ right ? `right: ${right}` : "" };
  ${ bottom ? `bottom: ${bottom}` : "" };
  ${ left ? `left: ${left}` : "" };

`;
const font = ({color,fontSize})=>`
    ${color? `color:${color};` : ''}
    ${fontSize ? `font-size: ${fontSize};` : ''}
`
const bg = ({bgColor}) => `
    ${bgColor? `background-color: ${bgColor};` : ''}
`

const border = ({border,borderColor}) =>`
    ${border? `border: ${border};`: ''}
    ${borderColor? `border-color: ${borderColor};`: ''}
`

const setStyles = props => `
  ${ size(props) }
  ${ margin(props) }
  ${ padding(props) }
  ${ positions(props) }
  ${ font (props)}
  ${ bg (props)}
  ${ border(props)}
`;

const Button = styled.button`
     ${ setStyles }
`

export default Button;