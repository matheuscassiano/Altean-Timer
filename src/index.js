import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class App extends Component {
	constructor(props: Object) {
	  super(props);
	  this.state ={ 
	  	tick: 0,
	  	dobosh: 0,
	  	varga: 0
	  }
	}

	componentDidUpdate(){
	  if(this.state.tick == 60){ 
	    this.setState((prevState)=> ({ 
  			tick: 0,
  			dobosh: prevState.dobosh +1
  		}))
	  }

	  if(this.state.dobosh == 60){ 
	    this.setState((prevState)=> ({ 
  			tick: 0,
  			dobosh: 0,
  			varga: prevState.varga +1
  		}))
	  }

	  if(this.state.varga == 20){ 
	    this.setState((prevState)=> ({ 
  			tick: 0,
  			dobosh: 0,
  			varga: 0
  		}))
  		clearInterval(this.tick);
	  }
	}

	componentWillUnmount(){
	 clearInterval(this.tick);
	}

	start = () => {
		clearInterval(this.tick);
		this.tick = setInterval(
	    () => this.setState((prevState)=> ({ 
	    	tick: prevState.tick + 1 

	    })),
	    1390
	  );
	}
	reset = () => {
		clearInterval(this.tick);
		this.setState((prevState)=> ({ 
  			tick: 0,
  			dobosh: 0,
  			varga: 0
  		}))
	}

	pause = () => {
		clearInterval(this.tick);
	}

	render() {
	  return (
	    <View style={styles.container}>
	    	<View style={styles.time}>
	    		<Text style={styles.number}> {this.state.varga}:{this.state.dobosh}:{this.state.tick} </Text>
	    	</View>
	    	<View style={styles.buttonContainer} >
		    	<TouchableOpacity style={styles.button} onPress={this.start}>
		    		<Text style={styles.buttonText}>Start</Text>
	        	</TouchableOpacity>
		    	<TouchableOpacity style={styles.button} onPress={this.reset}>
		    		<Text style={styles.buttonText}>Reset</Text>
	        	</TouchableOpacity>
		    	<TouchableOpacity style={styles.button} onPress={this.pause}>
		    		<Text style={styles.buttonText}>Pause</Text>
	        	</TouchableOpacity>
		    </View>
	    </View> 
	  )
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FAFAFA",
		
	},
	time: {
		flex:2,
		justifyContent: 'center', 
		alignItems: 'center'
	},
	number: {
		fontSize: 60
	},
	buttonContainer: {
		marginBottom: 15,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	button: {
		padding: 20,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center', 
		backgroundColor: '#5588ff',
	},
	buttonText: {
		color: '#fff'
	}
})