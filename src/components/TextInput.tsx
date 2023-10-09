import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View, TextStyle, Text, Pressable } from 'react-native'

interface InputTextProps extends TextInputProps {
    inputStyle?: TextStyle;
    touched?: any;
    error?: any;
    refs?: any
}
const InputText: React.FC<InputTextProps> = ({ 
    inputStyle,
    touched,
    error,
    refs,
    ...otherProps }) => {
    const [focused, setFocused] = useState<boolean>(false);
    return (
        <View>
           
            <TextInput
                {...otherProps}
                ref={refs}
                style={[inputStyle, {
                    fontSize: 18,
                    borderColor: touched && error ? 'red' : 'gray',
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    margin: 10,
                }]}
            />
            
            {touched && error ? (
                <Text style={styles.errorLabel}>
                    {error}
                </Text>
            ) : null}
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        marginLeft: 10, paddingBottom: 2,
        paddingTop: 5
    },
    eyeIcon: {
        position: 'absolute',
        right: 20,
        top: 50,
    },
    errorLabel: {
        fontSize: 14,
        color: 'red',
        paddingHorizontal: 10
    }
})
