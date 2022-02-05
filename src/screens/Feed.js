import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Rafael Pereira Filho',
            email: 'rafaelteste@gmail.com',
            image: require('../../assets/images/PaisagemTres.jpeg'),
            comments: [{
                nickname: 'Joana Elena Silva',
                comment: 'Boa foto'
            }, {
                nickname: 'Rafael Gustavo Pereira',
                comment: 'Linda paisagem'
            }]
        }, {
            id: Math.random(),
            nickname: 'Roberto Libra',
            email: 'roberto@gmail.com',
            image: require('../../assets/images/PaisagemDois.jpg'),
            comments: []           
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed