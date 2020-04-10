import React from "react";
import View from "./styled/View";
import Text from './styled/Text'
import Button from './components/Button'
import check from './assecs/check.png'
const App = ()=>{
  const click=()=>{
    console.log('aknd')
  }
  return(
  <div>
      <View width='200px' height='200px'bgColor='red' marginL='20px'>jjwrn</View>
      <Text color='red' textTransform='uppercase'>endjkjd</Text>
      <Button onClick={click} label ='adkndkjnk' icon={check} ></Button>
  </div>
  )
}
export default App;