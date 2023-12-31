import React, { useEffect, useState } from 'react'
import { View, TextInput, StyleSheet, ViewStyle, Platform, StyleProp } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    style? : StyleProp<ViewStyle>,
    onDebounce: (value: string)=> void,
}

export const SearchInput = ({style, onDebounce} : Props) => {
    const [textValue, setTextValue] = useState('');
    const debouncedValue = useDebouncedValue(textValue);

    useEffect(() => {
        onDebounce(debouncedValue);
    }, [debouncedValue])
    

    return (
        <View style={{
            ...style as any
            }}
        >
            <View style={styles.textBackground}>
                <TextInput 
                    placeholder='Search name or number'
                    style={{
                        ...styles.textInput,
                        top: (Platform.OS === 'ios' ? 0 : 2)
                    }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Ionicons name='search-outline' size={30} color={'grey'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textBackground:{
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 50,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textInput:{
        flex: 1,
        fontSize: 18,
    }
});