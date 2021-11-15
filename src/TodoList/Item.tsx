import React from "react";


interface Props{
    index: number,
    title: string,
    checked: boolean,
    deleteItem: any, // 함수는 any를 주로 사용
}

interface State{
    itemChecked: boolean,
}

class Item extends React.Component<Props>{ // Props는 제너릭으로 받는다
    state:State={
        itemChecked: this.props.checked,
    }

    checkItem = () => {
        const { itemChecked } = this.state;
        this.setState({ 
            itemChecked : !itemChecked,
        })
    }

    delete = () => {
        this.props.deleteItem(this.props.index);
    }

    render(){
        const {title} = this.props;
        const {itemChecked} = this.state;
        return(
            <>
                <div className="item">
                    <div 
                        className={itemChecked ? "float_left checked" : "float_left"}
                        onClick={this.checkItem}
                    >
                        {title}
                    </div>
                    <div className="float_right" onClick={this.delete}>X</div>
                </div>
            </>
        );
    }
}
export default Item;