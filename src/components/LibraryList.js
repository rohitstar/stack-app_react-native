import React, { Component, Text, View } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
 
class LibraryList extends Component {
  componentDidMount() {
 
   // console.log('In Library List component:  ' + this.props.libraries);
 
  }
 
  renderItem (library) {
    console.log(<ListItem library={library}/>)
    return <ListItem library={library}/>
  }
  render() {
    //Object.keys(this.props.libraries).map(i => console.log(this.props.libraries[i]))
    return (
      <FlatList
        data={this.props.libraries}
        keyExtractor={library => library.id.toString()}
        renderItem={({item}) => this.renderItem(item)}
      />
    )
  }
}
 
const mapStateToProps = state => {
  return { libraries: state.libraries };
};
 
export default connect(mapStateToProps)(LibraryList);
