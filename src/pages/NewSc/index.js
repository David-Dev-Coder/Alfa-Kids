import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Text, Image, Animated, Easing } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function SplashScreen ({ navigation }) {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const daSlideDown1 = useRef(new Animated.Value(-50)).current;
    const daSlideDown2 = useRef(new Animated.Value(-50)).current;
    const daSlideDown3 = useRef(new Animated.Value(-50)).current;
    const daSlideDown4 = useRef(new Animated.Value(-50)).current;
    const daSlideDown5 = useRef(new Animated.Value(-50)).current;
    const daSlideDown6 = useRef(new Animated.Value(-50)).current;
    const daSlideDown7 = useRef(new Animated.Value(-50)).current;
    const daSlideDown8 = useRef(new Animated.Value(-50)).current;
    const daAparecer1 = useRef(new Animated.Value(0)).current;
    const daAparecer2 = useRef(new Animated.Value(0)).current;
    const daAparecer3 = useRef(new Animated.Value(0)).current;
    const daAparecer4 = useRef(new Animated.Value(0)).current;
    const daAparecer5 = useRef(new Animated.Value(0)).current;
    const daAparecer6 = useRef(new Animated.Value(0)).current;
    const daAparecer7 = useRef(new Animated.Value(0)).current;
    const daAparecer8 = useRef(new Animated.Value(0)).current;

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.navigate('Dashboard');
    //     }, 5000);
    // }, [])

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start(({ finished }) => {
            setTimeout(() => {
                navigation.navigate('Dashboard');
            }, 500);
        });
    };

    const slideIn1 = () => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(daSlideDown1, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                    easing: Easing.bounce,
                }),
                Animated.timing(daAparecer1, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                })
            ]),
            Animated.parallel([
                Animated.timing(daSlideDown2, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                    easing: Easing.bounce,
                }),
                Animated.timing(daAparecer2, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                })
            ]),
            Animated.parallel([
                Animated.timing(daSlideDown3, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                    easing: Easing.bounce,
                }),
                Animated.timing(daAparecer3, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                })
            ]),
            Animated.parallel([
                Animated.timing(daSlideDown4, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                    easing: Easing.bounce,
                }),
                Animated.timing(daAparecer4, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                })
            ]),
            Animated.parallel([
                Animated.timing(daSlideDown5, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                    easing: Easing.bounce,
                }),
                Animated.timing(daAparecer5, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                })
            ]),
            Animated.parallel([
                Animated.timing(daSlideDown6, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                    easing: Easing.bounce,
                }),
                Animated.timing(daAparecer6, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                })
            ]),
            Animated.parallel([
                Animated.timing(daSlideDown7, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                    easing: Easing.bounce,
                }),
                Animated.timing(daAparecer7, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                })
            ]),
            Animated.parallel([
                Animated.timing(daSlideDown8, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                    easing: Easing.bounce,
                }),
                Animated.timing(daAparecer8, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                })
            ])
        ]).start(({ finished }) => {
            fadeIn();
        });
    };

    setTimeout(() => {
        slideIn1();
    }, 1000);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#FF6347' barStyle="light-content" hidden={true}/>
            <View style={{ padding: 5 }}>
                <Animated.Image source={require('../../assets/lobo4.png')} style={[{ width: 150, height: 180, opacity: fadeAnim }]} resizeMode="stretch"/>
            </View>
            <View style={styles.letterView}>
                <Animated.Image source={require('../../assets/entrada/a.png')} style={[{ width: 30, height: 50, opacity: daAparecer1, transform: [{ translateX: 30}, { translateY: daSlideDown1 }] }]} resizeMode="stretch"/>
                <Animated.Image source={require('../../assets/entrada/l.png')} style={[{ width: 30, height: 50, opacity: daAparecer2, transform: [{ translateX: 18 }, { translateY: daSlideDown2 }] }]} resizeMode="stretch"/>
                <Animated.Image source={require('../../assets/entrada/f.png')} style={[{ width: 30, height: 50, opacity: daAparecer3, transform: [{ translateX: 3 }, { translateY: daSlideDown3 }] }]} resizeMode="stretch"/>
                <Animated.Image source={require('../../assets/entrada/a2.png')} style={[{ width: 30, height: 50, opacity: daAparecer4, transform: [{ translateX: -5 }, { translateY: daSlideDown4 }] }]} resizeMode="stretch"/>
                <Animated.Image source={require('../../assets/entrada/k.png')} style={[{ width: 30, height: 50, opacity: daAparecer5, transform: [{ translateX: 10 }, { translateY: daSlideDown5 }] }]} resizeMode="stretch"/>
                <Animated.Image source={require('../../assets/entrada/i.png')} style={[{ width: 30, height: 50, opacity: daAparecer6, transform: [{ translateX: 0 }, { translateY: daSlideDown6 }] }]} resizeMode="stretch"/>
                <Animated.Image source={require('../../assets/entrada/d.png')} style={[{ width: 30, height: 50, opacity: daAparecer7, transform: [{ translateX: -10 }, { translateY: daSlideDown7 }] }]} resizeMode="stretch"/>
                <Animated.Image source={require('../../assets/entrada/s.png')} style={[{ width: 30, height: 50, opacity: daAparecer8, transform: [{ translateX: -18 }, { translateY: daSlideDown8 }] }]} resizeMode="stretch"/>
            </View>
            {/* <Text style={styles.txt}>Alfa Kids</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 32,
        fontWeight: "bold",
        color: 'black',
        opacity: 0.2,
    },
    letterView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
})