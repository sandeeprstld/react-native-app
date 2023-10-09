import React, { useState, useRef } from 'react';
import { SafeAreaView, Text, View, Pressable} from 'react-native'
import TextInput from '../components/TextInput';
import { useFormik } from 'formik'
import { NavigationProp } from '@react-navigation/native'
import * as Yup from 'yup'
import { RootStackParamList } from '../navigation/TabNavigation'



interface LoginProps {
    navigation: NavigationProp<RootStackParamList, 'LoginScreen'>
}

const Login: React.FC<LoginProps> = ({ navigation }) => {

    const [focused, setFocused] = useState<boolean>(false);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Required')
    });

    const {
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        errors,
        touched
    } = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: '', password: '' },
        onSubmit: values =>
        navigation.navigate('TabNavigation')
    });


    return (
        <SafeAreaView>
            <View style={{ padding: 20 }}>

                <View style={{ alignItems: 'center' }}>

                    <Text style={{ fontSize: 30, color: '#1f41bb', marginVertical: 30, fontWeight: 'bold' }}>
                        Login
                    </Text>

                </View>
                <View style={{ marginVertical: 30 }}>
                    <TextInput
                        refs={emailRef}
                        value={values.email}
                        placeholder="Enter email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        error={errors.email}
                        touched={touched.email}
                    />
                    <TextInput
                        refs={passwordRef}
                        value={values.password}
                        placeholder="Enter password"
                        secureTextEntry={true}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        error={errors.password}
                        touched={touched.password}

                    />

                </View>
                
                <Pressable
 onPress={handleSubmit}
            style={{
                borderWidth: 2,
               
                borderRadius: 8,
                borderColor:'#fff',
                padding: 5,
                margin: 10,
                height: 40,
                backgroundColor: '#e94832'
            }}
        >
            <Text style={{
                fontSize: 20,
                textAlign: 'center',
                color:"#fff"
            }}>Login</Text>
        </Pressable>
                <Pressable onPress={() => navigation.navigate('Register')}>


                    <Text style={{
                        color: '#000',
                        textAlign: 'center',
                        fontSize: 14
                    }}>
                        Register
                    </Text>

                </Pressable>

            </View>
        </SafeAreaView>
    );
};

export default Login;