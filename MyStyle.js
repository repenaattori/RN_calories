import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 80,
        marginLeft: 10,
        marginRight: 10

      },
      button:{
        backgroundColor: '#4fbce4',
        fontSize: 26,
        borderWidth: 4,
        borderRadius: 15,
        padding: 10,
        textAlign: 'center'
      },
      label:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5
      },
      textfield: {
        fontSize: 30,
        borderBottomWidth: 1
      },
      result:{
        fontSize: 36,
        fontWeight: 'bold',
        margin: 20,
        textAlign: 'center'
      },
      dropdown:{
        borderWidth: 1,
        width: '100%'
      },
      dropdownText:{
        fontWeight: 'bold'
      },
      //Following styles for custom components
      selecBoxView:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
      },
      selectBox:{
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#e8e8e8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        height: 50,
        borderWidth: 1
      },
      selectBoxActive:{
        backgroundColor: '#d0a27f'
      },
      slidertext:{
        fontSize:14, 
        flex:1,
        textAlign:'center', 
        color: '#8d8d8d'
      },
      sliderActive:{
        fontWeight: 'bold',
        color: 'black'
      },
});