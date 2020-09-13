import Actions from './actions'

export default function Information({ asana }) {
  return (
    <>
      <Actions big name="Preparação" actions={asana.actions?.setup} />
      <Actions
        big
        name="Entrando na postura"
        actions={asana.actions?.entering}
      />
      <h3>Na postura</h3>
      <Actions name="Pés e pernas" actions={asana.actions?.legs} />
      <Actions name="Coxa, pelve e abdômen" actions={asana.actions?.core} />
      <Actions name="Costas, tronco e peito" actions={asana.actions?.trunk} />
      <Actions name="Ombros, braços e mãos" actions={asana.actions?.arms} />
      <Actions name="Pescoço e cabeça" actions={asana.actions?.head} />
      <Actions name="Ações amplas" actions={asana.actions?.all} />
      <Actions big name="Saindo da postura" actions={asana.actions?.leaving} />
    </>
  )
}
