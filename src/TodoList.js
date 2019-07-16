import React from 'react'
import TodoItem from './component/TodoItem'
import'./styles/index.css'
class TodoList extends React.Component{
    constructor(props){//组件创建时
        super(props);
        this.state={
            list:[
                'learn React',
            ],
            val:""
        }
    }
    handleChange(e){
            let val=e.target.value;
            this.setState({
                val:val
            })
            
    }
    deleteItem(i){
       //this.state.list.splice(0,i);
      // console.log(this.state.list,i);//force 刷新
      let list=[...this.state.list];//拷贝一个父本  
      list.splice(i,1);
        //this.state.list.splice(i,1)//直接变化不起作用需要再设置一下 尽量不要直接操作state数据 而是拷贝父本 便于后期调试
        this.setState({
            list:list
        })
    }
    handleClick(){
        //改变state数据
            if(!this.state.val) return;
            this.setState({//
                list:[...this.state.list,this.state.val],
                val:""
            })
          //  console.log('6666');
    }
    getItems(){
        return (
            this.state.list.map((item,index)=>{
                //    return (
                //    <li key={`key${index}`} onClick={this.deleteItem.bind(this,index)}>
                //    {item}
                //    </li>
                //    )
                return <TodoItem   content={item} key={`key${index}`}  index={index} deleteItem={this.deleteItem.bind(this)}/>
               })
        )
    }
    render(){
        return (
            <div className='todolist' >
            <div className='top'>
                <input value={this.state.val} onChange={this.handleChange.bind(this)}/>
                <button className='btn' onClick={this.handleClick.bind(this)}>add</button>
            </div>
                <ul>
                       {
                          this.getItems()
                       }
                </ul>
            </div> 
        )
    }
}
export default TodoList