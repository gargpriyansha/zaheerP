
import * as React from 'react'

import A10cockpit from './screens/Home'
import A10gun from './screens/Home'
import A10wings from './screens/Home'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';



export default class App extends React.Component{
    render(){
        return(
            <View>
                <AppContainer/>
            </View>
              
               
                

        );
    }
}
               


var AppNavigator = createSwitchNavigator({
    HomeScreen:HomeScreen,
    A10cockpit:A10cockpit,
    A10wings:A10wings,
    A10gun:A10gun
})


const AppContainer = createAppContainer(AppNavigator)




