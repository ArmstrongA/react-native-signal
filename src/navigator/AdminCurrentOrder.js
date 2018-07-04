import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import { List, ListItem, SearchBar, Header } from "react-native-elements";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PTRView from 'react-native-pull-to-refresh';

import axios from 'axios';
import {GetRequest} from '../helper/request_helper';


export default class AdminCurrentOrder extends React.Component {

    static navigationOptions = {
        headerStyle: { backgroundColor: '#1c313a', height: 40 },
        headerTitleStyle: { color: 'white', alignItems: 'center' },
        title: "Tạo tín hiệu",
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            access_token : this.props.screenProps.access_token,
            data: null,
            user_number: null,
            dataDisplay: null
        };

        this._refresh = this._refresh.bind(this);
    }  

    onSelect = refresh => {
        this.setState(refresh);
      };

    componentDidMount() {
        this.makeRemoteRequest();
    }
    

    makeRemoteRequest = () => {
        var dataDisplay = [];
        this.setState({ loading: true });
        axios.get(`https://tinhieu-backend.herokuapp.com/notification`, 
        {
            headers: {
                "Authorization" : "Bearer " + this.state.access_token
            }
        })
        .then(res => {
            const data = res.data;
            this.setState({data : data});
            data.notifications.forEach(notification => {
                if(notification.status == 0) {
                    dataDisplay.push(notification);
                }
            });
            this.setState({dataDisplay : dataDisplay});
        }).catch(error =>{
            console.log(error.response);

        })
    };
    

    _refresh() {
        return new Promise((resolve) => {
            this.makeRemoteRequest();
            setTimeout(()=>{resolve()}, 1000)
          
        });
    }

    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#CED0CE",
            }}
          />
        );
      };
    
    render() {
        return (
            <View style = {styles.container}>
            <PTRView onRefresh={this._refresh}>
                <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                <Header 
                    centerComponent={{ text: 'Tín Hiệu Mới', style: { color: '#fff', fontSize: 16, fontWeight: 'bold' } }}
                    outerContainerStyles={{ backgroundColor: '#1c313a', height: 50 }}
                    innerContainerStyles={{ justifyContent: 'space-around' }}
                />
                    <FlatList
                        backgroundColor = 'black'
                        data={this.state.dataDisplay}
                        keyExtractor={item => item.id.toString()}
                        ItemSeparatorComponent={this.renderSeparator}
                        inverted
                        renderItem={({ item }) => (
                            <ListItem
                            title={`${item.currency_code}`}
                            titleStyle = {styles.textStyle}
                            subtitle={item.buy_or_sell == 0 ? "Mua - " + `${item.price}` : "Bán - " + `${item.price}`}
                            subtitleStyle = {styles.subtitleStyle}
                            rightTitle = {"Lệnh đang chạy"}
                            rightTitleStyle = {styles.rightTitleStyle}
                            rightSubtitle = {"Vui lòng chờ"}
                            containerStyle={{ borderBottomWidth: 0 }}
                            onPress={()=> this.props.navigation.navigate('AdminCurrentOrderLook', { item: item, access_token : this.state.access_token, onSelect: this.onSelect })}
                            />
                        
                        )}
                    />
                </List>
            </PTRView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
        flex : 1,
        backgroundColor: '#455a64'
  },
  textStyle:{
    fontSize: 19,
    fontWeight: 'bold',
    color: "#fff"
  },
  rightTitleStyle:{
    fontSize: 16,
    fontWeight: 'bold',
    color: "#fff"
  },
  subtitleStyle:{
      fontSize: 17,
      fontWeight: 'bold',
  }
});
