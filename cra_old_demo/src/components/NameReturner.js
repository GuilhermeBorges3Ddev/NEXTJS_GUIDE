export default function NameReturner({ name, role }) {
  return (
    <span>
      Welcome user: <u>{name}</u> || Role of the user: <b>{role}</b>
      <br />
    </span>
  );
}
