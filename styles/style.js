
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      marginTop:20,
      flex: 1,
      backgroundColor: 'red',
      flex:1
    },
    section:{
      flex:1
    },
    BgIm:{
     position:"absolute",
     top:0,
     left:0,
     right:0,
     bottom:0
    },
    upper:{
     display:"flex",
     flexDirection:"row",   
     opacity:1,
    //  backgroundColor:"#03F7C8",
     flex:1,
     justifyContent:"center",
     alignItems:"center"
    },
    middle:{           
     
      display:"flex",
      justifyContent:"space-around",
      flex:1,
      alignItems:"center",
      flexDirection:"row"
    },
  items:{
   
    
  },
    profilePhoto:{
      marginLeft:"auto",
      padding:10,      
    
    },
    pd:{
      
      
    },
    dodge:{
      //  opacity:0.8,
      // backgroundColor:"#03F7C8"
    },


btnCircle:{
backgroundColor:"gray",
 height:44,
  width: 44,
  height: 44,
  borderRadius: 44/2,
},
 centre:{
   display:"flex",
   alignItems:"center",
   justifyContent:"center"
 },

 absolute:{
  position:"absolute",
  top:0,
  left:0,
  right:0,
  bottom:0,
  backgroundColor:"rgb(2399,245,207)",
  opacity:0.6,
 },
   textInput:{
     color:"rgb(92,92,92)"
   }
  });

  export default styles;