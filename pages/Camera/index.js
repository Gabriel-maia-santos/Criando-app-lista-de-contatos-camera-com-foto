import React, {useState, useEffect} from 'react';
import {Text , View, StyleSheet, StatusBar, TouchableOpacity, Image, Button} from 'react-native';
import { Camera } from 'expo-camera';


const Cameras = () => {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [imagemUri, setImagemUri] = useState(null);
  
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    
    const tirarFoto = async () => {
        if(camera){
          let foto = await camera.takePictureAsync();
          alert('foto tirada');
          setImagemUri(foto.uri);
            console.log(foto);
        }
    }

    if (hasPermission === null) {
      return <View/>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={type}
        ref ={ref => {
            camera = ref;
        }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={{ fontSize: 18, marginBottom: 10, width: 60, color: 'white' }}>  Girar</Text>
            </TouchableOpacity>
          </View>
        </Camera>

        {imagemUri && <Image source={{uri : imagemUri}} style={{ height: 250 }}/>}
        <Button title="Tirar foto" onPress={() => tirarFoto()}/>
      </View>
    );
  }


//container
const styles = StyleSheet.create({
    container : {
        flex:1,
        marginTop: StatusBar.currentHeight || 0
    }
})

export default Cameras;