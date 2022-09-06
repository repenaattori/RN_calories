import MyStyle from './MyStyle';
import { useState } from 'react';
import { Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import RadioForm from 'react-native-simple-radio-button';
import Slider from '@react-native-community/slider';


export default function App(){

    const genders = [{label:"Male", value: 'male'},{label:"Female", value: 'female'}];
   
    const [result, setResult] = useState(0);
    const [weight, setWeight] = useState(0);
    const [intensity, setIntensity] = useState(1.3);
    const [gender, setGender] =useState(genders[0].value)

    const intensities = [
        {label:'Light', value: 1.3},
        {label:'Usual', value: 1.5},
        {label:'Moderate', value: 1.7},
        {label:'Hard', value: 2},
        {label:'Very hard', value: 2.2} 
    ]

    /**Function for button event. Calculates the result. */
    function calculate(){
        const res = gender==='male'?(879+10.2*weight)*intensity:(795+7.18*weight)*intensity;
        setResult(res);
    }

    return(
        <View style={MyStyle.container}>

            <Text style={MyStyle.label}>Weight</Text>
            <TextInput style={MyStyle.textfield} onChangeText={w=>setWeight(w)}  keyboardType='number-pad' />
           
            <Text style={MyStyle.label}>Intensity</Text>
            <SelectDropdown 
                data={intensities}
                defaultValueByIndex={0}
                onSelect={(item, index) => setIntensity(item.value)}
                rowTextForSelection={(item, index)=> item.label }
                buttonTextAfterSelection={(item, index)=>item.label}
                buttonStyle={MyStyle.dropdown}
                buttonTextStyle={MyStyle.dropdownText}
            />

            <Text style={MyStyle.label}>Gender</Text>
            <RadioForm
                radio_props={genders} 
                initial={0}
                onPress={value => setGender(value)}
            />

            <Text style={MyStyle.result}>{result.toFixed(0)}</Text>

            <TouchableOpacity onPress={calculate }>
                <Text style={MyStyle.button}>CALCULATE</Text>
            </TouchableOpacity>      

        </View>
    );
}

//You may test following components instead of Dropdown if you want


/**
 * Additional custom component for showing selection as boxed
 * (No events implemented, just view) 
 */
const IntensitySelectionBoxes=()=>{
    
    const [selected, setSelected] = useState(0);
    const intensities = ['Light', 'Usual', 'Moderate', 'Hard', 'Very hard'];

    return(
        <View style={MyStyle.selecBoxView}>
            {
                intensities.map((item, index) =>
                     <TouchableHighlight 
                        key={index} 
                        style={[MyStyle.selectBox, index===selected?MyStyle.selectBoxActive:{}]}
                        onPress={()=>setSelected(index)}>
                            <Text>{item}</Text>
                    </TouchableHighlight>
                )
            }
        </View>
    );
}

/**
 * Additional custom component for showing selection as slider
 * (No events implemented, just view) 
 */
const IntensitySelectionSlider=()=>{
    const intensities = ['Light', 'Usual', 'Moderate', 'Hard', 'Very hard'];
    const [value, setValue] = useState(0)

    return(
        <View style={{marginTop:10, justifyContent:'center', alignItems:'center', marginRight:10}}>
            
            <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                {intensities.map((item, index) =>{
                   return (  
                    <Text 
                        key={index} 
                        style={[MyStyle.slidertext, index===value?MyStyle.sliderActive:{}]}>
                            {item}
                     </Text>)
                })}
            </View>
            <Slider 
                style={{width:'90%', height: 40}}
                minimumValue={0}
                maximumValue={4}
                step={1}
                onValueChange={x=>setValue(x)}
            />

        </View>
    )
}
