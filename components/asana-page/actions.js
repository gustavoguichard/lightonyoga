export default function Actions({ name, big, actions }) {
  if (!actions) return null

  return (
    <>
      {big ? <h3>{name}</h3> : <h4>{name}</h4>}
      <div dangerouslySetInnerHTML={{ __html: actions }} />
    </>
  )
}
