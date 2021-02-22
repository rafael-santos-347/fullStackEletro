import React from 'react';
import { Text , Input, Block, theme, Button } from 'galio-framework';
import Styles from './styles';
import { View, StatusBar } from 'react-native';

const Login = ({navigation}) => {
    return (
        <View style={Styles.alinhar}>
            <StatusBar hidden />
            <Text h3 bold style={Styles.titulo} color="#753D2B">Entre ou cadastre-se</Text>
            <Block style={{height: "33%", justifyContent: "space-between",  alignItems: "center"}}>
                <Input 
                    type="email-address" 
                    maxLength={25} 
                    rounded 
                    placeholder="Digite seu email" 
                    color="black"
                    style={{ borderColor: theme.COLORS.INFO }} placeholderTextColor="black" 
                    borderless
                    icon="email"
                    family="Entypo"
                    right
                    style={Styles.input}
                />
                <Input 
                    type="numeric"
                    maxLength={5} 
                    rounded 
                    password
                    viewPass 
                    borderless
                    icon="typing"
                    family="Entypo"
                    style={Styles.input}
                />
                <Button 
                    color="warning"
                    round
                    onPress={() => {return navigation.navigate('Home')}}
                    size="small"
                    icon="send"
                    iconFamily="Ionicons"
                    iconSize={13}
                    style={Styles.btn}
                >Enviar</Button>
            </Block>
        </View>
    );
}

export default Login;