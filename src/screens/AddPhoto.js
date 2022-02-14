import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    ScrollView,
    Platform,
    Alert,
} from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

class AddPhoto extends Component {
    constructor(props) {
        super(props)
        this.state = {
          resourcePath: {},
        };
    }

    openCamera = () => {
        
        launchCamera(options, response => {
            console.log('Response = ', response)

            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
            } else {
                let source = response
                this.setState({
                  resourcePath: source,
                })
            }
        })
    }

    save = async () => {
        Alert.alert('Added image', this.state.comment)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Share an image</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.resourcePath} style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={this.openCamera} style={styles.button}>
                        <Text style={styles.buttonText}>Choose the photo</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Comment here' 
                        style={styles.input} 
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })} 
                    />
                    <TouchableOpacity onPress={this.save} style={styles.button}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width * 3 / 4,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%'
    }
})

export default AddPhoto