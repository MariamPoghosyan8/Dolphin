import React from "react";
import View from "./styled/View";
import Button from "./styled/Button";

const App = ()=>{
  const click=()=>{
    console.log('aknd')
  }
  return(
  <div>
      <View width='200px' height='200px'bgColor='red' marginL='20px'>jjwrn</View>
      <Button width='200px' padding='30px' color='red' bgColor='blue' border='none' onClick={click}>ukhuad</Button>
  </div>
  )
}
export default App;




