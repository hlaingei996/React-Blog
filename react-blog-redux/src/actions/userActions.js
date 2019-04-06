import {retrieveData, storeData} from "../utilies/localStorage";

import firestore from '../utilies/firebase';

export const fetchUsers = () => dispatch => {
  //const users = retrieveData('users');
  const users = [];
  const usersData = firestore.collection('users').get();
  usersData.then( (snapshot) => {
    snapshot.docs.forEach( item => users.push(item.data()));
    console.log("users list", users);
    dispatch({
      type: 'FETCH_USERS',
      payload: users
    });
  });  
};

export const insertUser = (user, cb) => dispatch => {
  //const users = retrieveData('users');
  //console.log(users, user);
  const users = [];
  const usersData = firestore.collection('users').get();
  usersData.then( (snapshot) => {
    snapshot.docs.forEach( item => users.push(item.data()));
  });

  // if (users !== null && users.length > 0) {
  //   const mapped_array = users.map(i => parseInt(i.id));
  //   console.log("mapped",mapped_array);
  //   const max_id = Math.max(...mapped_array);
  //   user.id = max_id + 1;
  //   console.log("Max",max_id)
  // } else {
  //   user.id = 1;
  // }
  //users.push(user);
  //console.log(user);
  //storeData('users', users);

  user.id = "10";
  firestore.collection('users').add(user);
  dispatch({
    type: 'ADD_NEW_USER',
    user: user
  });

  cb();
};

export const loginUserEvent = (user,cb) => dispatch =>{
  dispatch({
    type : "LOGIN",
    user : user
  });
  cb();
}