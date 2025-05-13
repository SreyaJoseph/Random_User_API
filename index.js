import { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from '../components/Dropdown';
import UserDetails from '../components/UserDetails';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=100')
      .then((res) => setUsers(res.data.results))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  return (
    <div className="container">
      <h1>Random User Directory</h1>
      <Dropdown users={users} onSelect={setSelectedUser} />
      <UserDetails user={selectedUser} />
    </div>
  );
}
