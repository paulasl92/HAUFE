import { Component } from 'react';
import '../util/styles/characterModal.scss';

class CharacterModal extends Component<any, any> {

  constructor(props) {
    super(props);
    
  }

  render() {
      if(!this.props.show){
          return null;
      }
  
    return <div className="modal display-block">
      <section className="modal-main">
        <button className="modal-closeButton" type="button" onClick={this.props.handleClose}>X</button>
        <div className="modal-Information">
          {this.props.children}
        </div>
      </section>
      </div>;
  }
}

export default CharacterModal;