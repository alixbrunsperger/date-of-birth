import React, { Component } from 'react';
import moment from 'moment';
import './challenge.css';

const DATE_FORMAT = 'DD.MM.YYYY';

class App extends Component {
    constructor(){
        super();
        this.state = {
            date:'',
            isValid: false,
            finalDate: ''
        }
    }
    inputChange(e){
        e.preventDefault();
        // validation of the format xx.xx.xxxx
        let regExp = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/g;
        let isValid = false;
        //validation of the date format
        if(moment(e.target.value, DATE_FORMAT,true).isValid() && regExp.test(e.target.value)){
            isValid = true;
        }
        this.setState({date: e.target.value, isValid: isValid});
    }

    submitForm(e){
        e.preventDefault();
        // if age is greater than 18 then access
        if(moment(this.state.date, DATE_FORMAT,true).isBefore(moment().subtract(18, 'years').format(DATE_FORMAT,true))){
            this.setState({ finalDate: moment(this.state.date).format('YYYY-MM-DD',true)});
        } else {
            alert('You need to be older than 18 to access the site..');
        }
    }
    render() {
    return (
          <div className="challenge">
              <form onSubmit={this.submitForm.bind(this)}>
                  <h1>Date of birth</h1>
                  <ul>
                      <li>
                          <input id="date-input"
                                 type="text"
                                 value={this.state.date}
                                 placeholder='dd.mm.yyyy'
                                 className={"date input " + (this.state.date !== "" && (this.state.isValid ? "valid" : "not-valid"))}
                                 required
                                 onChange={this.inputChange.bind(this)} />
                          <label htmlFor="date-input">dd.mm.yyyy</label>
                      </li>
                      <li>
                          <input type="submit" disabled={!this.state.isValid} value="Submit" className="button" />
                      </li>
                  </ul>
              </form>
              <div className="final-date">
                  {this.state.finalDate}
              </div>
          </div>
        );
    }
}

export default App;
