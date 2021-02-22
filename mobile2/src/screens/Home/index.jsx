import React from 'react';
import { Text , Button} from 'galio-framework';
import { View , StatusBar} from 'react-native';
import Styles from './styles'

const Home = ({navigation}) => {
    return (
        <View style={Styles.container}>
        <StatusBar hidden />
           <Text bold h2>Seja bem vindo(a)</Text>
           <Text h4
           style={{marginTop: 40, marginBottom: 40}}
           >Aprendendo programação com pokemons</Text>
           <Button 
           round 
           size="large" 
           color="warning"
           onPress={() => {return navigation.navigate('Pokemons')}}
           
           >Ver lista</Button>
        </View>
    );
}

export default Home;