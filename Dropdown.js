import { useState } from 'react';

export default function Dropdown({ users, onSelect }) {
  const [search, setSearch] = useState('');
  const filtered = users.filter(u =>
    u.name.first.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by first name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <select onChange={e => onSelect(filtered[e.target.value])}>
        <option value="">Select a user</option>
        {filtered.map((u, i) => (
          <option key={i} value={i}>
            {u.name.first} {u.name.last}
          </option>
        ))}
      </select>
    </div>
  );
}
