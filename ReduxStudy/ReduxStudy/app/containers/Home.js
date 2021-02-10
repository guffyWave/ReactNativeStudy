import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import mockMovies from '../mockMovies';
import MovieRow from '../component/MovieRow';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props) {
    console.log('constructor called ----');
    super(props);
    this.state = {
      //movies: mockMovies.Search,
    };
  }

  async componentDidMount() {
    console.log('componentDidMount called ----');
    const {addMovies} = this.props;
    const response = await fetch(
      'http://omdbapi.com/?apikey=9f821616&s=Batman',
    );
    const data = await response.json();
    //this.setState({movies: data.Search});
    addMovies(data.Search);

    const {addPosts} = this.props;

    const responsePosts = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
    );
    const dataPosts = await responsePosts.json();
    addPosts(dataPosts);
    //
  }

  render() {
    //const {movies} = this.props.movies;
    //const {posts} = this.props;

    //  console.log('posts---', posts);

    return (
      <View style={{marginTop: 50}}>
        {!!this.props.movieList && (
          <Text> Shoiwing movies {this.props.movieList.length} </Text>
        )}
        {/* {movies.map((movie, index) => (
          <View key={movie.imdbID}>
            <Text>{movie.Title}</Text>
          </View>
        ))} */}

        <Text>----------------</Text>
        {/* <Text>Posts : {posts.length}</Text> */}

        {/* <FlatList
          data={this.props.movies}
          renderItem={({item: movie}) => <MovieRow movie={movie} />}
          keyExtractor={(movie) => movie.imdbID}
        /> */}
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps called ----', state);

  console.log(
    'mapStateToProps  state.movieReducer.movies ----',
    state.movieReducer.movies.movies,
  );

  return {
    movieList: state.movieReducer.movies.movies,
    posts: state.posts,
  };
}
//this method dispatches addMovies to reduxStore and movies as its payload
//exposes
function mapDispatchToProps(dispatch) {
  console.log('mapDispatchToProps called ----');
  return {
    addMovies: (movies) =>
      dispatch({
        type: 'ADD_MOVIES',
        payload: {movies},
      }),

    addPosts: (posts) =>
      dispatch(
        dispatch({
          type: 'ADD_POSTS',
          payload: {posts},
        }),
      ),
  };

  //This is redux action object
  // {
  //   type: 'ADD_MOVIES',
  //   payload: {movies} ,
  // }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
//export default Home;
