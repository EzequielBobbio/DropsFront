import React from 'react';
import './Body.css';
import backgroundimage from '../Assets/farmacia.jpg'

class Body extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
  render() {
    return (
      <>
        <main>
          <div className='body'>
            <div>
              <img className='background-image' src={backgroundimage} alt='Imagen de farmacia'/>
            </div>
            <div className='body-container'>
              <div className='eslogan'>
                <p>Vení a disfrutar de una atención <i>100% personalizada</i></p>
              </div>
            </div>    
          </div>
        </main>
      </>
    );
  }
}
  
  export default Body; 