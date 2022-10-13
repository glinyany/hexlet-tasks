import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [],
    }
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      value: e.target.value,
    });
  }

  getTasks = async () => { // axios GET
    const data = await axios.get(routes.tasksPath());
    return data;
  }

  submitHandler = async (e) => { // axios POST
    e.preventDefault();
    const { items } = this.state;
    const response = await axios.post(routes.tasksPath(), {
      text: this.state.value,
    });
    const newTask = response.data
    this.setState({ value: '', items: [...items, newTask] })
    console.log('!!!:', items)

  }

  componentDidMount() {
    // Первоначальная подгрузка задач с сервера должна происходить сразу после монтирования компонента в DOM.
    this.getTasks().then(res => {
      console.log('- Component Mounted:', res.data)
      this.setState({ items: [...res.data] })
    })
  }

  componentWillUnmount() {
    console.log('COMPONENT WILL UNMOUNT:', this.state.items)
    this.setState({ items: []})
  }

  handleFinishTask = (id) => async () => {
    await axios.patch(routes.finishTaskPath(id));
    const { items } = this.state;
    const index = items.findIndex((t) => t.id === id);
    const updatedTasks = update(items, { [index]: { $merge: { state: 'finished' } } });
    this.setState({ items: updatedTasks });
  }

  handleActivateTask = (id) => async () => {
    await axios.patch(routes.activateTaskPath(id));
    const { items } = this.state;
    const index = items.findIndex((t) => t.id === id);
    const updatedTasks = update(items, { [index]: { $merge: { state: 'active' } } });
    this.setState({ items: updatedTasks });
  }

  render() {
    const { value, items } = this.state;
    const activeItems = items.filter((item) => item.state === 'active');
    const finishedItems = items.filter((item) => item.state === 'finished');

    return (
      <div>
        <div className="mb-3">
          <form onSubmit={this.submitHandler} className="todo-form mx-3">
            <div className="d-flex col-md-3">
              <input onChange={this.handleInput} type="text" value={value} required
                 className="form-control me-3" placeholder="I am going..." />
              <button type="submit" className="btn btn-primary">add</button>
            </div>
          </form>
        </div>
        {activeItems.length === 0 ? null : 
          <div className="todo-active-tasks">
            {activeItems.map(item => <Item key={item.id} value={item} onClick={this.handleFinishTask} />)}
          </div>
        }
        <div className="todo-finished-tasks">
          {finishedItems.map(item => <Item key={item.id} value={item} onClick={this.handleActivateTask} />)}
        </div>
      </div>
    )
  };
};
// END
