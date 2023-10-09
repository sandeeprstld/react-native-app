import { Keyboard, KeyboardAvoidingView, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { useFormik } from 'formik'
import * as  Yup from 'yup'
import TextInput from '../components/TextInput';


const Register: React.FC<Props> = ({ navigation: { navigate } }) => {


    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    const handleLoginInPress = () => {
        navigate('Login')
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email('Invalid Email')
                .required('Email is required'),
            password: Yup.string().required('Password is required')
                .min(2, 'Too Short!')
                .max(10, 'Too Long!'),
            confirmPassword: Yup.string()
                .required('Confirm password is required')
                .oneOf([Yup.ref("password")], "Passwords does not match"),
        }),
        onSubmit: async values => {
            let data = {
                email: values.email,
                password: values.password,
                confirmPassword: values.confirmPassword
            }
            Keyboard.dismiss();
            console.log(data, 'Signup Completed')
            try {
                navigate('Login')
            } catch (error) {
                console.error('Error in signup:', error);
            }
        }
    })

    const {
        handleChange,
        handleSubmit,
        values,
        touched,
        errors,
    } = formik;

    const onSignUpSubmit = () => {
        handleSubmit();
    }

    return (
        <View style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <Text style={styles.title}>Sign Up</Text>
                <View style={{ flex: 1, marginTop: 50 }}>
                    <TextInput
                        refs={emailRef}
                        value={values.email}
                        placeholder="Enter email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        onChangeText={handleChange('email')}
                        error={errors.email}
                        touched={touched.email}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            passwordRef.current?.focus();
                        }}
                    />
                    <TextInput

                        refs={passwordRef}
                        value={values.password}
                        placeholder="Enter password"
                        autoCapitalize="none"
                        onChangeText={handleChange('password')}
                        secureTextEntry
                        touched={touched.password}
                        error={errors.password}
                        onSubmitEditing={() => {
                            confirmPasswordRef.current?.focus();
                        }}
                    />
                    <TextInput

                        refs={confirmPasswordRef}
                        value={values.confirmPassword}
                        placeholder="Confirm password"
                        autoCapitalize="none"
                        onChangeText={handleChange('confirmPassword')}
                        secureTextEntry
                        touched={touched.confirmPassword}
                        error={errors.confirmPassword}

                    />

                    <Pressable
                        onPress={() => onSignUpSubmit()}
                        style={{
                            borderWidth: 2,

                            borderRadius: 8,
                            borderColor: '#fff',
                            padding: 5,
                            margin: 10,
                            height: 40,
                            backgroundColor: '#e94832'
                        }}
                    >
                        <Text style={{
                            fontSize: 20,
                            textAlign: 'center',
                            color: "#fff"
                        }}>Register</Text>
                    </Pressable>
                    <View style={{ flexDirection: "row", justifyContent: 'center', padding: 10 }}>
                        <Text style={{ fontSize: 18, textAlign: 'center' }}>
                            Already have an account?
                        </Text>
                        <Pressable onPress={handleLoginInPress}>
                            <Text style={styles.hyperlink}>LogIn</Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Register


const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        textAlign: 'center',
        margin: 10,
        paddingTop: 30,
        color: '#0099ff'
    },
    hyperlink: {
        paddingLeft: 5,
        fontSize: 18,
        textAlign: 'center',
        textDecorationLine: 'underline'
    }
})