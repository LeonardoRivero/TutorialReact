export function Welcome(props) {
  return (
    <h1>Hello, {props.name}</h1>
  )
}

export function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}


