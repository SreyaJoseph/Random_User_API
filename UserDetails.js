export default function UserDetails({ user }) {
  if (!user) return null;

  return (
    <div style={{ marginTop: '2rem' }}>
      <img src={user.picture.large} alt="User" style={{ borderRadius: '50%' }} />
      <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Country:</strong> {user.location.country}</p>
    </div>
  );
}
