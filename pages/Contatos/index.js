import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, FlatList, StyleSheet, Button} from 'react-native';
import * as Contacts from 'expo-contacts';

//container
const styles = StyleSheet.create({
    container : {
        flex:1,
        marginTop: StatusBar.currentHeight || 0
    }
})

const ItemContato = ({nome, id}) => {
    return(
    <View style={styles.item}>
        <Text>{nome}</Text>
        <Button name="btnId" onPress={() => alert(id)} title="Id do item"/>
    </View>
    )
}

const Contatos = () => {
    
    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        (async () => {
    
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Emails],
                });
                
                if (data.length > 0) {
                    console.log(data);
                    setContatos(data);
                }
            }
        })();
    }, []);


    const renderItem = ({item}) => {
        return(
            <ItemContato nome={item.name} id={item.id} />
        )
    }

    return(
        <View style = {styles.container}>
            <Text> Contatos: </Text>
            <FlatList 
            data={contatos}
            keyExtractor={item => item.id}
            renderItem={renderItem}/>
        </View>
    )
}


export default Contatos;