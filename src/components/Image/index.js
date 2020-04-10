import React from 'react';
import StyledImage from './StyledImage';

const Image = ({src, alt, ...restProps}) => {
    return(
        <StyledImage
            src={src}
            alt={alt}
            {...restProps}
        />
    );
}
export default Image;
