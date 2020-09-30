export default function Actions({ name, big, actions, isList }) {
  if (!actions) return null

  return (
    <>
      {big ? <h3>{name}</h3> : <h4>{name}</h4>}
      {isList ? (
        <ul className="list-disc">
          {actions.split('\n').map((action) => (
            <li key={action}>{action}</li>
          ))}
        </ul>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: actions }} />
      )}
    </>
  )
}
