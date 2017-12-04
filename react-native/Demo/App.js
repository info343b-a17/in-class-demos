import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {input:'', tasks:[]}
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/info343b-a17/in-class-demos/master/react-native/tasks.json')
      .then((res) => res.json())
      .then((data) => this.setState({tasks:data}))
      .catch((err) => console.error(err));
  }

  handlePress() {
    console.log("You submitted: "+this.state.input);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={ styles.textDefault } >
          Hello 
            <Text style={{color:'blue'}}>World!</Text></Text> */}
        {/* <Image style={styles.img}
          source={ require('./iSchool-logo.png') } 
          accessibilityLabel="myPicture" /> */}
        <View style={styles.inputForm}>          
          <TextInput
              style={[styles.textDefault, {flex:1}]}
              placeholder="What to do?"
              value={this.state.input}
              onChangeText={(text) => this.setState({input:text})}
            />
          <Button 
            title="Press me!" 
            onPress={() => this.handlePress()}
            />
        </View>
        <FlatList
          data={this.state.tasks}
          renderItem={ ({item, index}) => {
            return <Text style={styles.textDefault}>{index+1}. {item.description}</Text>
           }}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop:32,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  inputForm: {
    flexDirection:'row', //lay out my kids
  },
  textDefault: {
    fontSize: 24,
    // fontWeight: 'bold',
    // color: 'rebeccapurple'
  },
  img: {
    width:50,
    height:50
  }
});
