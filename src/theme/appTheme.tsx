import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    pokebolaBG: {
        position: 'absolute',
        width: 300,
        height: 300,
        top: -100,
        right: -100,
        opacity: 0.2,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 100,
    },
    menuContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        gap: 10,
    },
    menuBtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
