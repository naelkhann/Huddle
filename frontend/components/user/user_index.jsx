import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

class UserIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <h3>User Index Lives Here bruh!</h3>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIndex);
