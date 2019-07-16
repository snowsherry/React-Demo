import  React from 'react'

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        const {deleteItem,index}=this.props;//ES6解构 对象的解构？
        deleteItem(index);

        // console.log(this.props.index);
        //
        // this.props.deleteItem(this.props.index)//
    }
    render(){
        return (
            <div className='todo-item' onClick={this.handleClick} style={{background:"green"}}>{this.props.content}</div>
        )
    }
}
export default TodoItem;