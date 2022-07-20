// import "./about.css"


// export default function About() {
//   return (
//     <div className="about">
           
//     </div>
//   );
// }

import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
  } from "react-native";
  import React from "react";
  
  const About = () => {
    return (
      <View style={styles.aboutContainer}>
        <Text style={styles.mainHeader}> Akash Tapadia </Text>
        
  
        <View>
          <Image
            style={styles.imgStyle}
            source={{
              uri: "https://i.postimg.cc/5NBHyJ8b/Pics-Art-11-02-09-00-06.jpg",
            }}
          />
        </View>
  
        <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}> About me </Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            Welcome to my Blog Application, my name is Akash Tapadia and I am currently pursuing B.E. in Information Technology in PICT College Pune. I am familiar with different Computer Languages such as C/C++, Java, Python and my technical skills include DSA, OOP, Problem Solving, DBMS, MySQL, HTML, CSS, JavaScript and the MERN Stack Applications which include MongoDB, ExpressJS, React, NodeJS.  
          </Text>
        </View>
        
        <Text style={styles.mainHeader}>Follow me on Social Network</Text>
        
  
        <View style={styles.menuContainer}>
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL(
                "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZWxffXNBnJhNCkNmxxbxvRVWBPZbzKsNdxKDDkldrWZThpwfGMdrflNkjbgszrNSgTDJq"
              )
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "data:image/png;base64,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",
              }}
            />
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://github.com/aakashtapadiya")}>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "data:image/png;base64,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",
              }}
            />
          </TouchableOpacity>
          
  
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://www.linkedin.com/in/aakash-tapadiya-8b0786223/")}>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAaVBMVEUAd7X///8AcLEEebb7/f4Debb9/v79/v8DeLY8l8Y7lsYAbbCcyuKlz+WQxN+Lwd0KfbiDvdvl8fcAc7O+3OwgiL6x1ehFnMlytNZqsNQZhLzF4O7w9/tSo81gqtGp0ebc7PUsjsJ8udngaOvIAAADg0lEQVRoge2abZeqIBCAGV7EjXItKjc1y/7/j7xD7m5AWHdD+uScs3s8kDzOIMwMDoGrSJ4lEC6H0ckVkUEiyeQPBC+ar+pjcqm+GsQMEAntUSuaQJQ+toZC8F+7U4KJBMKE6ltUwkAqJUgiEapCAJGwpSwVgxBGtyAJh4NKCVEH4AStRZNZC+1F0V5orgXN00FyukBzZekh2XsgbzFXCMIGSQlhTCsjegrMCEQQVXfF8rOrFYm3YxjCdFnw6zbdFkJHr6AgROjdGYAbATjXOlaXEISRcgN88GEZh3NJIuclBBF0BfzXr3EoYve1ACTXPViuOAO+izRYAMLUxVLEqBK7RQcggp48yHJ6SG5cjAWRsI/0A0FN9g6Ew2p6TZhae+a6pDDXwn67UKt++rcL3+Gts072sW4gDOn5L4VjRBa7rwT3LkarDMNvmeEf8EV0tDSyC9O++dZku4uPyEb8CdO6KrbNtvjQOt5rjXnGnGGkrKmibALfP+7jBQ6fs0lCvnHIn4Tlj2KBsTkJX4cGYgLH1yiD8n+A/LcgACevrHe7ujRXQYXCEFHaIsLNZjgMnMrjstm0nLebZnXodSi6Cbvfz3Zzk3Y97I/ozOxmE2Dkql5vnCS0OQbe+WAgoZbOjcUPpLBbeU0I7dprZi4xlZYyM8ENNP3d6h2DcPkj/Ab5vDVjkllrgg/DpfNA+HN59D3DKMTahW3ILbxoa3Ru/D75x59Uni6vQ3hZOL7N8j9+ePMqRMLmACNnGHce6FUItrcgA4ThCdwU9HUIjDLuVImAjB/4+EFnjCZXba6xv/SU8oLOOEhmvQgu5GRPShQER25Pl667nFrXeBmc7ZUSA8FxLyU1mSWtTw7Fm5S4ia/Ud5KsnVtM34dlrwiIxNkV31ZhhG1sXTh01sy/DkG7W55SqC9npcLXJBBvHEzPLFU4rCeBgBeHs7MDKaaA4A5ZWggvdXKzs5chGTSOn2XKTZlX02jiJnnGOU8O8ZO8u146CWTpQdYzZIbMkBkyQ2bIDJkhA+QmDsRqDkCs3tXTqH4FtiyDxx6BkMiW/ZO4K6eH/eom+27oy2nnNB+8DPfo9j5JgswBk/PVnj1sfnzTKMScPVpf7fMnzU97JzqDfCxvhMxfsf8Ake8pX3hLIUbqkhJtSkpSF8ccTXGMKSXqk5f5vKVg6Xpkkbz06j1FZJC6HO4fbRVnSvd35FUAAAAASUVORK5CYII=",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/tapadia_akash/")
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://www.facebook.com/aakash.tapadiya.35")}>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
            />
          </TouchableOpacity>
          
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    aboutContainer: {
      display: "flex",
      alignItems: "center",
    },
  
    imgStyle: {
      width: 150,
      height: 150,
      borderRadius: 100,
    },
    mainHeader: {
      fontSize: 18,
      color: "#344055",
      textTransform: "uppercase",
      fontWeight: "500",
      marginTop: 30,
      marginBottom: 30,
      fontFamily: "JosefinSans_700Bold",
    },
    paraStyle: {
      fontSize: 18,
      color: "#7d7d7d",
      paddingBottom: 30,
    },
    aboutLayout: {
      backgroundColor: "#4c5dab",
      paddingHorizontal: 30,
      marginVertical: 30,
    },
    aboutSubHeader: {
      fontSize: 18,
      color: "#fff",
      textTransform: "uppercase",
      fontWeight: "500",
      marginVertical: 15,
      fontFamily: "JosefinSans_700Bold",
      alignSelf: "center",
    },
    aboutPara: {
      color: "#fff",
    },
    menuContainer: {
      width: "50%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      margin : "10px",
    },
  
    iconStyle: {
      width: "100%",
      height: 50,
      aspectRatio: 1,
    },
  });
  
  export default About;