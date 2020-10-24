import React, {useEffect} from 'react';

const User = ({match, location, history}) => {
  useEffect(() => {
    console.log('match', match)
    console.log('location', location)
    console.log('history', history)
  }, [])
  return (
    <div>
      <h1> hello {match.params.username}</h1>
    </div>
  );
};

export default User;