import Axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState<Array<any>>([])

  useEffect(() => {
    Axios.get('http://46.101.154.231/api/users')
    .then((res: AxiosResponse) => {
      setUsers(res.data)
    })
  }, [])

  return (
    <div>
      {users.map((item) => <div>{item.username}</div>)}
    </div>
  );
}

export default App;
