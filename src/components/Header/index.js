import React from 'react';
import {
    NavLink
} from 'react-router-dom';
import View from '../../styled/View'
import Image from '../../components/Image'
import Text from '../../styled/Text'
import Logo from '../../assets/logo.png'
import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n';

const Header = ({t}) => {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }
    return(
        <header>
            <View flex around>
                <NavLink to='/'>
                    <Image src={Logo} width='300px' height='80px'/>
                </NavLink>
                <View flex padding='28px'  color='#014496'>
                    <NavLink to=''>
                        <Text marginR='20px'>{t('AboutUs')}</Text>
                    </NavLink>
                    <NavLink to=''>
                        <Text marginR='20px'>Product</Text>
                    </NavLink>
                    <NavLink to=''>
                        <Text marginR='20px'>Contact US</Text>
                    </NavLink>
                </View>
                <View padding='28px'>
                    <select style={{border:'none'}}>
                        <option onClick={()=> changeLanguage ('en')}>En</option>
                        <option onClick={()=> changeLanguage ('ru')}>Ru</option>
                        <option onClick={()=> changeLanguage ('am')}>Am</option>
                    </select>
                </View>
            </View>
        </header>
    )
};

export default withNamespaces()(Header);