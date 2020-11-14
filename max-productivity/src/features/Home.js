import React, { Component } from 'react';
export default class Home extends Component {
 render() {
  return (
   <div>this is my Home component</div>
  );
 }
}

const img = 'https://firebasestorage.googleapis.com/v0/b/max-productivity-e7804.appspot.com/o/sourkey.png?alt=media&token=f2bd4041-5447-4632-861c-f6d81bb85fbf';

const styles = {
	backgroundImage: `url(${img})`
}