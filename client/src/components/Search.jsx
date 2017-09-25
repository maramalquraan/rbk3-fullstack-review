import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    })
  }

  search() {
    // this.props.onSearch(this.state.term);
        $.ajax({  
      url: 'http://127.0.0.1:1128/repos/import',
      dataType:'json',
      type: 'POST',   
      data: this.state.term,
      error: function (error) {
         console.log(error);
      }
    })
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.term} onChange={this.onChange.bind(this)}/>       
      <button onClick={this.search.bind(this)}> Add Repos </button>
    </div>) 
  }
}

export default Search;