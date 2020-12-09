import React, { Component } from 'react';
import Create from './create';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
				currentOperation: 'create',
	            id: null,
	            error:null
		};
		this.key = 0;
		this.changeOperation = this.changeOperation.bind(this);
	}
	
    changeOperation(newOperation, id,error){
        this.setState({currentOperation: newOperation});
        if(id !== undefined){
          this.setState({id: id});
        }
        if(error !== undefined){
            this.setState({error: error});
        }
    }
 
    render(){
 
        var OperationComponent = <Create changeOperation={this.changeOperation} />;
 
        switch(this.state.currentOperation){
            case 'create':
                OperationComponent = <Create changeOperation={this.changeOperation}/>;
                break;
        }
 
        return OperationComponent;
    }
}

export default App;