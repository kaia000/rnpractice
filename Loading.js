import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

export default function Loading(){
    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>Getting Start</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-end",
        paddingBottom: 150,
        paddingHorizontal: 20,
        backgroundColor: "#6B59EF"
    },
    text: {
        fontSize: 40,
        color: "white"
    }
});