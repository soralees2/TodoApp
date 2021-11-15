import React from "react";
import { Button, Input } from "semantic-ui-react";
import Item from "./Item";

interface ItemType{
    index: number,
    title: string,
    checked: boolean
}

interface State{
    itemList: Array<ItemType>, 
    // type을 any로 설정해줘도되긴하는데 타입설정 에러를 내주지 않기 때문에 혼동을 줄 수 있다.
    title: string,
}

class TodoList extends React.Component{
    state:State={
        itemList: [
            { index: 1, title: 'Item1', checked: false},
            { index: 2, title: 'Item2', checked: false},
            { index: 3, title: 'Item3', checked: false }
        ],
        title: '',
    }

    addItem = () => {
        const { itemList, title } = this.state;
        this.setState({
            itemList: itemList.concat({
                index: itemList.length > 0 ? itemList[itemList.length - 1].index + 1 :1, // 삼항연산자 사용하여 초기값이 없을경우 인덱스 1로 초기화
                title: title,
                checked: false
            }),
            title: '',
        })     
    }

    deleteItem = (index:number) => {
        console.log(index);

        const { itemList } = this.state;
        this.setState({ 

            // filter 조건에 충족되는 내용의 배열만 반환
            itemList: itemList.filter((item:ItemType) => item.index !== index ) // return 이 생략되어있는것임
        })
    }
    render(){
        const { itemList, title } = this.state;
        return(
            <>
                <div className="box">
                    <div className="title">TodoList</div>
                    <div className="header">
                        <div className="padding10">
                            <Input 
                                value={title}
                                onChange={(e:any) => {this.setState({title: e.target.value})}}
                            />
                            <Button 
                                content="Add"
                                onClick={this.addItem}
                            />
                        </div>
                    </div>
                    <div className="item_list">
                        {/* <div className="item">Item</div> */}
                        {
                            // 동적인 데이터를 사용할때, jsx문법에서 javascript를 사용할 때는 중괄호 사용
                            // map함수를 사용하여 새로운 배열을 반환해줌
                            itemList.map((data:ItemType) => (
                                //<div className="item" key={data.index}>{data.title} / {data.index}</div>
                                <Item 
                                    key={data.index}
                                    index={data.index}
                                    title={data.title}
                                    checked={data.checked}
                                    deleteItem={this.deleteItem}
                                />
                            ))
                        }
                    </div>
                </div>
            </>
        );
    }
}
export default TodoList;