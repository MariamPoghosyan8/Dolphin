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
const font = ({
    size
}) => `
    ${size? `font-size: ${size}`: ''}
`

const border = ({
    border,
    radius
}) => `
    ${ border ? `border: ${border};` : "" };
    ${ radius ? `border-radius: ${radius};` : "" };

`;
const backgrounds  = ({
    bgColor
}) =>`
    ${ bgColor ? `background-color: ${bgColor};` : "" };
`;
const flex = ({
    flex,
    jStart,
    jEnd,
    jCenter,
    between,
    around,
    aStart,
    aEnd,
    aCenter,
    baseline,
    stretch,
    row,
    rowReverse,
    column,
    columnReverse,
    order,
    noWrap,
    wrap,
    wrapReverse
}) => `
    ${flex ? 'display:flex;' : '' }
    ${jStart ? 'justify-content: flex-start;' : '' }
    ${jEnd ? 'justify-content: flex-end;' : ''}
    ${jCenter ? 'justify-content: center;' : ''}
    ${between ? 'justify-content: space-between;' : ''}
    ${around ? 'justify-content: space-around;' : ''}
    ${aStart ? 'align-items: flex-start;' : ''}
    ${aEnd ? 'align-items: flex-end;' : ''}
    ${aCenter? 'align-items: flex-center;' : ''}
    ${baseline? 'align-items: baseline;' : ''}
    ${stretch? 'align-items: stretch;': ''}
    ${row? 'flex-direction: row;' : ''}
    ${rowReverse? 'flex-direction: row-reverse;' : ''}
    ${column? 'flex-direction: column;' : ''}
    ${columnReverse? 'flex-direction: column-reverse;' : ''}
    ${order? `order:${order};` : ''}
    ${noWrap? 'flex-wrap: no-wrap;' : ''}
    ${wrap? 'flex-wrap: wrap;' : ''}
    ${wrapReverse? 'flex-wrap: wrap-reverse;' : ''}
` ;

const styles = props => `
  ${ size(props) }
  ${ margin(props) }
  ${ padding(props) }
  ${ positions(props) }
  ${ backgrounds(props) }
  ${ flex(props) }
  ${ border(props) }
  ${font (props)}
`;

const StyledButton = styled.button`
    ${ styles }
`
export default StyledButton;