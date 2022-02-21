import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'

class Profile extends Component {
    logout = () => {
        this.props.navigation.navigate('Feed')
    }

    render() {
        const options = { email: 'fulanodetal@gmail.com', secure: true }
        return (
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar}/>
                <Text style={styles.nickname}>Fulano de Tal</Text>
                <Text style={styles.email}>fulanodetal@gmail.com</Text>
                <TouchableOpacity onPress={this.logout} style={styles.button}>
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 124,
        height: 124,
        borderRadius: 64,
    },
    nickname: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold'
    },
    email: {
        fontSize: 18,
        marginTop: 20,
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    }
})

export default Profile