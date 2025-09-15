import React, { Component } from 'react'

export default class ToDoClassControlled extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: '',
      todos: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState((prevState) => ({
      todos: [...prevState.todos, { id: Date.now(), text: prevState.input }],
      input: ''
    }));
  }



  render() {

    console.log("this state todos", this.state.todos)
    return (
      <div className='p-2'>
        <h2 className='text-3xl text-center font-extrabold text-blue-900'>ToDo App using Class Components</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className='flex flex-col gap-4'>
              <input
                value={this.state.input}
                onChange={(e) => { this.setState({ input: e.target.value }) }}
                className='bg-white p-2 rounded-2xl border border-black'
              />
              <button
                className='border bg-blue-900 p-3 text-white rounded-2xl'
                type='submit'
              >Add Todo</button>
            </div>
          </form>
          {this.state.todos.map((todo, idx) => (
            <div
              className='flex flex-col gap-3'
              key={todo.id}>
              <p>ID: {todo.id}</p>
              <p>Text: {todo.text}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
