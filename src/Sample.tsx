import React from "react";

interface A{
    inputValue: string,
    submitValue: string,
}

class Sample extends React.Component{
    state: A = {
        inputValue: '',
        submitValue: '',
    }

    handleInput=(e:any)=>{
        const input = e.target.value;
        this.setState({
            inputValue: input,
        })
    }
    submit = () => {
        const {inputValue} = this.state;
        this.setState({
            //submitValue: this.state.inputValue
            submitValue: inputValue
        })
    }

    render(){
        const { inputValue, submitValue } = this.state; //비구조화 할당으로 값을 가져옴
        return(
            <div>
                <input 
                    value={inputValue} 
                    //onChange={this.handleInput}
                    onChange={(e:any) => {this.setState({inputValue: e.target.value})}} // 간단한 함수는 익명함수로도 사용
                />
                <button
                    onClick={this.submit}>
                    Button
                </button>
                
                <div> 
                    두가지 방법 :  {this.state.submitValue} / {submitValue}
                </div>

            </div>
        );
    }
}

export default Sample;