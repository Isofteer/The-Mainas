import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import styles from '../styles/style'
export default class Dashboard extends React.Component{

   
   placeholderChangedHandler = event => {
            alert(event,"hey there");
   }
    render (){
        return (
        <View style={styles.container}>
         <Image style ={styles.BgIm} source={require('../assets/img/bi3.jpg')}/>
            <View style ={[styles.BgIm,styles.dodge]}> 
            </View>
             <View style={[styles.section,styles.upper]}>                 
                <View > 
                   <View>
                      <Text> The Mainas </Text>
                   </View>
                   <View>
                      <Text>  I dont even know what to do here you see  </Text>
                   </View>
                
               </View>
                <View style={styles.profilePhoto}>
                    <Image style ={styles.pd}  source={require('../assets/img/avatar.png')}/>
                </View>

             </View>

             <View style={[styles.section,styles.middle]}> 
                  <View style ={styles.absolute}>
                  </View>
                  <View style={[styles.items,styles.options,styles.centre]} >
                     <View style ={[styles.btnCircle,styles.centre,{backgroundColor:"rgb(29,193,120)"}]}>
                       <Image  source ={require("../assets/img/avatar.png")}/>
                     </View>
                     
                     <Text style={styles.textInput}> Mpesa</Text>
                  </View>

                  <View style={[styles.items,styles.options,styles.centre]} >
                     <View style ={[styles.btnCircle,styles.centre,{backgroundColor:"rgb(158,201,32)"}]}>
                       <Image  source ={require("../assets/img/avatar.png")}/>
                     </View>
                     
                     <Text style={styles.textInput}> Strategy</Text>
                  </View>


                  <View style={[styles.items,styles.options,styles.centre]} >
                     <View style ={[styles.btnCircle,styles.centre,{backgroundColor:"rgb(219,102,6)"}]}>
                       <Image  source ={require("../assets/img/avatar.png")}/>
                     </View>                     
                     <Text style={styles.textInput}> Members</Text>
                  </View>

                  <View style={[styles.items,styles.options,styles.centre]} >
                     <View style ={[styles.btnCircle,styles.centre,{backgroundColor:"rgb(166,23,112)"}]}>
                       <Image  source ={require("../assets/img/avatar.png")}/>
                     </View>                     
                     <Text style={styles.textInput}> Balance</Text>
                  </View>

                  <View style={[styles.items,styles.options,styles.centre]} >
                     <View style ={[styles.btnCircle,styles.centre,{backgroundColor:"rgb(175,46,216)"}]}>
                       <Image  source ={require("../assets/img/avatar.png")}/>
                     </View>                     
                     <Text style={styles.textInput}> Graphs </Text>
                  </View>
                  
             </View>

             <View style={styles.section}> 
                <Text> hi </Text>
             </View>
        </View>
        )
    }
}

