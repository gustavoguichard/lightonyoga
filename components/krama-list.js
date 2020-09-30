import ExerciseList from 'components/exercise-list'

export default function KramaList ({ asana, title, subtitle, kind }) {
  const relateds = asana.relateds?.filter(pose => pose.category === kind) || []
  return relateds.length ? (
    <>
      <h3 className="mt-4">{title}</h3>
      {subtitle && <p>{subtitle}</p>}
      <ExerciseList exercises={relateds} />
    </>
  ) : null
}
