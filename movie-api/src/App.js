import React from 'react';
import Movie from './Movie.js'
import './App.css';

class App extends React.Component{
  constructor (props){
    super(props)
    this.state ={
      search : "",
      country: '',
      genre: '',
      movies :[],
      error : null
    }
  }
  handleCountry = (evt) => {
    this.setState({
      country: evt.currentTarget.value
    })
  }

  handleFilter = (evt) => {
    this.setState({
      genre: evt.currentTarget.value
    })
  }

  settingMovies = (movies) => {
    // this.setState({
    //   movies
    // })
    console.log('this is it ',movies)
  }

  searchSubmit = (evt) => {
    evt.preventDefault();
 
   fetch(`localhost:8000/movie/?country=${this.state.country}&genre=${this.state.genre}`)
   .then(data => console.log(data))
  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <h1>Besearch Your Movies</h1>
 <form>
        <input  id="genre"type = "text" placeholder="search your movie"
        value = {this.state.genre}
        onChange = {(evt) => this.setState({
          genre:evt.currentTarget.value
        })}
        />

        <select id = "country" name = "country" onChange = {(evt)=> this.setState({
          country:evt.currentTarget.value})}>
          <option>country</option>
          <option>UnitedStates</option>
          <option>UnitedStates</option>
          <option>UnitedStates</option>
        </select>

        <button type="submit"  value="search" onChange={ (evt) => this.searchSubmit(evt)}/>
      </form>
      <div>
        <Movie movie = {[...this.state.movies]}/>
      </div>
      </header>

     
    </div>
  );
}
  }
  

export default App;
