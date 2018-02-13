import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = (props) => (
  <div>
    <h1>isExact: {`${props.match.isExact}`}</h1>
    <h2>About</h2>
  </div>
)

const Topics = (props) => (
  <div>
    <h2>URL: {props.match.url}</h2>
    <h2>Path: {props.match.path}</h2>
    <ul>
      <li>
        <Link to={`${props.match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${props.match.path}/:topicId`} component={Topic} />
    <Route exact path={props.match.path} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>topicId Param: {match.params.topicId}</h3>
    <h4>Path: {match.path}</h4>
    <h4>URL: {match.url}</h4>
    <h4>isExact: {`${match.isExact}`}</h4>
  </div>
)

const ListItemLink = ({ to, name, ...rest }) => (
  <Route path={to} children={({ match }) => (
    <li className={match ? 'active' : ''}>
      <Link to={to} {...rest}>{name}</Link>
    </li>
  )}/>
)

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <ListItemLink to="/somewhere" name="A Link" />
        <ListItemLink to="/somewhere-else" name="Another Link" />
      </ul>

      <hr />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </Switch>
    </div>
  </BrowserRouter>
)

export default App;