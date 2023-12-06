import React, {useContext} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {UserContext} from '../../provider/UserProvider';
import {useNavigation} from '@react-navigation/native';

GoogleSignin.configure({
  webClientId: '',
});

function Login() {
  const {setUser} = useContext(UserContext);
  const navigation = useNavigation();

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
      navigation.reset({
        index: 0,
        routes: [{name: 'HomeScreen'}],
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.textLogin}>SMART CAR PARKING</Text>
      <Image
        source={require('../../assets/images/icon_home.jpg')}
        style={styles.icon}
        resizeMode="cover"
      />
      <Text style={styles.textLogin}>Đăng nhập</Text>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
      <Text style={styles.textMade}>
        Nhóm 7 Phát triển hệ thống và Ứng dụng IOT
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    margin: 16,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    height: 150,
    width: 150,
    borderRadius: 20,
  },
  textLogin: {
    color: '#60a5fa',
    fontSize: 30,
    fontWeight: '700',
    marginVertical: 20,
  },
  textMade: {
    marginTop: 70,
    fontWeight: '700',
    color: '#4b5563',
  },
});

export default Login;
