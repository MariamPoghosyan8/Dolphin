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

const border = ({
    border, 
    borderT, 
    borderB, 
    borderL, 
    borderR,
    radius,
    bColor
}) => `
  ${ border ? `border: ${border}` : "" };
  ${ borderT ? `border-top: ${borderT}` : "" };
  ${ borderB ? `border-bottom: ${borderB}` : "" };
  ${ borderL ? `border-left: ${borderL}` : "" };
  ${ borderR ? `border-right: ${borderR}` : "" };
  ${ radius ? `border-radius: ${radius}` : "" };
  ${ bColor ? `border-color: ${bColor}` : "" }
`;

const backgrounds = ({ 
    bgImg, 
    bgPos, 
    bgRep, 
    bgSize, 
    bgColor, 
    bgAt
}) => `
  ${ bgImg ? `background-image: url(${bgImg})` : "" };
  ${ bgPos ? `background-position: ${bgPos}` : "" };
  ${ bgRep ? `background-repeat: ${bgRep}` : "" };
  ${ bgSize ? `background-size: ${bgSize}` : "" };
  ${ bgColor ? `background-color: ${bgColor}` : "" };
  ${ bgAt ? `background-attachment: ${bgAt}` : "" };
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

const setStyles = props => `
  ${ size(props) }
  ${ margin(props) }
  ${ padding(props) }
  ${ positions(props) }
  ${ backgrounds(props) }
  ${ flex(props) }
  ${ border(props) }
`;

const View = styled.div `
  ${ setStyles }

`;

export default View;
