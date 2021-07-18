import React from 'react';
import './App.css';


class App extends React.Component {

  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {

      super(props);

      this.state = {
          items: {},
          isLoaded: false
      }

  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  componentDidMount() {

      fetch('https://xkcd.com/614/info.0.json')
          .then(res => res.json())
          .then(data=>console.log(data))
          .then(json => {
              this.setState({
                  //items: json,
                  isLoaded: true, 
              })
          }).catch((err) => {
              console.log(err);
          });

  }

  /**
   * render
   *
   * Render UI
   */
  render() {

      const { isLoaded, items } = this.state;

      if (!isLoaded)
          return <div>Loading...</div>;

      return (
          <div className="App">
              <ul>
                  {items.map(item => (
                      <li key={item.num}>
                          Year: {item.year} | Month: {item.month}
                      </li>
                  ))}
              </ul>
          </div>
      );

  }

}


export default App;
