import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StatusBar, ScrollView } from 'react-native';
import Styles from './styles';
import { Text , ListItem, Avatar, Button, Icon } from 'react-native-elements';

const Pokemons = ({navigation}) => {
    
   const list = [
        {
          name: 'bulbasaur' ,
          avatar_url: 'https://www.nicepng.com/png/full/99-991806_bulbasaur-pokemon-bulbasaur-png.png',
        },
        {
            name: 'ivysaur' ,
            avatar_url: 'https://img.favpng.com/2/19/21/pok-mon-diamond-and-pearl-pok-mon-sun-and-moon-pok-mon-tcg-online-caterpie-png-favpng-znPm71z43VHMdHAMhCqitLD5w_t.jpg',
          },
          {
            name: 'venusaur' ,
            avatar_url: 'https://www.clipartmax.com/png/middle/185-1855439_venusaur-by-briannabellerose-venusaur-pokemon-png.png',
          },
          {
            name: 'charmander' ,
            avatar_url: 'https://w7.pngwing.com/pngs/156/686/png-transparent-pokemon-go-pokemon-x-and-y-ash-ketchum-charmander-pokemon-background-orange-cartoon-fictional-character.png',
          },
          {
            name: 'charmeleon' ,
            avatar_url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
          },
          {
            name: 'charizard' ,
            avatar_url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
          },
          {
            name: 'squirtle' ,
            avatar_url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
          },
          {
            name: 'wartortle' ,
            avatar_url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
          },
          {
            name: 'blastoise' ,
            avatar_url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
          },
          {
            name: 'caterpie' ,
            avatar_url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
          },
    ];      

    
    return (
        <SafeAreaProvider>
            <StatusBar hidden />
            <ScrollView>
            <View style={Styles.container}>
                
                <View style={{width: "90%"}} >
                    <Text h4 style={{textAlign: "center", margin: 30}}>Listando 10 pokemons </Text>
                    {
                        list.map((l, i) => (
                        <ListItem containerStyle={{backgroundColor: "transparent"}} key={i} bottomDivider>
                            <Avatar source={{uri: l.avatar_url}} />
                            <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                        ))
                    }

                    <Button
                    icon={
                        <Icon
                        name="logout"
                        size={15}
                        color="white"
                        iconStyle={{paddingRight: 7}}
                        />
                    }
                    title="Voltar"
                    buttonStyle={{backgroundColor: "#E34110", marginTop:20}}
                    onPress={() => {return navigation.popToTop()}}
                    />
                    
                </View>
               
            </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}

export default Pokemons;