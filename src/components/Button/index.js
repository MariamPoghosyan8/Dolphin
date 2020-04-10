import React from 'react'
import Text from '../../styled/Text'
import StyledButton from './StyledButton'
import Image from '../Image/index'

const Button = ({children,disabled, label , onClick,icon, right,left, ...restProps}) => {
    const handelClick = () => {
         if(!disabled && typeof onClick == 'function'){
             onClick()
         }
    }
    const Label = () => {
        if(label){
            return(
            <Text>{label}</Text>
            );
        }
        return (
            <>
                {children}
            </>
        )
    }
    const ButtonIcon = () => {
        if(icon){
            return (
                <Image src={icon} style={{order:1}}/>
            )
        }
       else if(icon && right){
            return(
                <Image src={icon} style={{order:-1}}/>
            )
        }
    }
    return(
        <StyledButton
            onClick={handelClick}
            {...restProps}
            flex
        >
            {ButtonIcon ()}
            {Label ()}
        </StyledButton>
    )
}

export default Button;