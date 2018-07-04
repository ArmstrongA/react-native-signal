import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView,KeyboardAvoidingView  } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class SignupForm extends React.Component {
    render(){
        return(
            <View style = {{height: 350}}>
            <KeyboardAwareScrollView scrollEnabled showsVerticalScrollIndicator = {false}>
                <TextInput 
                    style = {styles.inputBox} 
                    underlineColorAndroid = 'rgba(0, 0, 0, 0)'
                    placeholder = "Tên tài khoản"
                    selectionColor="#fff"
                    placeholderTextColor = '#ffffff'
                />
                <TextInput 
                    style = {styles.inputBox} 
                    underlineColorAndroid = 'rgba(0, 0, 0, 0)'
                    placeholder = "Mật khẩu"
                    secureTextEntry={true}
                    selectionColor="#fff"
                    placeholderTextColor = '#ffffff'
                />
                <TextInput 
                    style = {styles.inputBox} 
                    underlineColorAndroid = 'rgba(0, 0, 0, 0)'
                    placeholder = "Nhập lại mật khẩu"
                    secureTextEntry={true}
                    selectionColor="#fff"
                    placeholderTextColor = '#ffffff'
                />
                <TextInput 
                    style = {styles.inputBox} 
                    underlineColorAndroid = 'rgba(0, 0, 0, 0)'
                    placeholder = "Email"
                    selectionColor="#fff"
                    placeholderTextColor = '#ffffff'
                    keyboardType = "email-address"
                />
                <TextInput 
                    style = {styles.inputBox} 
                    underlineColorAndroid = 'rgba(0, 0, 0, 0)'
                    placeholder = "Số điện thoại"
                    selectionColor="#fff"
                    placeholderTextColor = '#ffffff'
                    keyboardType = "phone-pad"
                />
            </KeyboardAwareScrollView>
            <View style={styles.loginButtonSection}>
                <TouchableOpacity style={styles.button}>
                        <Text style = {styles.buttonText}> Đăng ký </Text>
                </TouchableOpacity>
            </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      height: 500,
      flexDirection: "column"
    },
    inputBox:{
        width:300,
        height:50,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 22,
        paddingHorizontal: 16,
        color: '#ffffff',
        marginVertical: 10
    },
    inputText:{
        color: '#ffffff',
    },
    button:{
        width:300,
        height:50,
        backgroundColor: '#1c313a',
        borderRadius: 22,
        paddingVertical: 13,
    },
    buttonText:{
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign:'center'
    },
    loginButtonSection:{
        flexGrow:1,
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    }
  });