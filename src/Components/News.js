import '../styles/news.scss';
import React, { Component } from 'react';
import logo from '../logo.svg';



export default class Ccomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e2efc74f516947178f1988ec9b45a0f4")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.articles
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }



  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p> Error {error.message}</p>
    } else if (!isLoaded) {
      return(
        <div className='load'>
          <div className='load_content'>
            {/* <img className='logo' src={logo}/>
            <p className='loading'>Loading...</p> */}
          </div>  
      </div>
      ) 
    } else {
      return (
        
        <div className='news'>
          {items.map(item =>
            <div className='main_content'>
              <div className='title'>
              <h4 key={item.name}>
                {item.title}
              </h4>
              </div>
              <div className='item'>
                <p key={item.name}>
                {item.description}
              </p>
              </div>
              
            </div>)}
        </div>
      )
    }
  }
}