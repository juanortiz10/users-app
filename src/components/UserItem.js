import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/UserItem.css'

class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }

    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    if(this.state.isChecked){
      this.props.popItem(this.props.id);
    }else {
      this.props.pushItem(this.props.id);
    }
    this.setState({ isChecked: !this.state.isChecked});
  }
  render(){
    return(
      <div className="row">
       <div className="col s1">
         <p>
            <input
              type="checkbox"
              id={this.props.id}
              checked={ this.state.isChecked }
              onChange={ this.onChange}/>
            <label htmlFor={ this.props.id }></label>
         </p>
       </div>
       <div className="col s11">
         <div className="card blue-grey darken-1">
           <div className="card-content white-text">
             <span className="card-title">{ this.props.userName }</span>
             <p>{ this.props.email }</p>
           </div>
         </div>
       </div>
     </div>
    );
  }
}

UserItem.propTypes = {
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  pushItem: PropTypes.func.isRequired,
  popItem: PropTypes.func.isRequired
}

export default UserItem;
