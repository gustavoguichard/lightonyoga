import { useLogged } from 'lib/session'

import Actions from './actions'

export default function Information({ asana }) {
  const isLogged = useLogged()
  return (
    <>
      <Actions big name="Preparação" actions={asana.setup} />
      <Actions
        big
        name="Entrando na postura"
        actions={asana.entering}
      />
      <h3>Na postura</h3>
      <Actions name="Pés e pernas" actions={asana.legs} />
      <Actions name="Coxa, pelve e abdômen" actions={asana.core} />
      <Actions name="Costas, tronco e peito" actions={asana.trunk} />
      <Actions name="Ombros, braços e mãos" actions={asana.arms} />
      <Actions name="Pescoço e cabeça" actions={asana.head} />
      <Actions name="Ações amplas" actions={asana.all} />
      {isLogged && (
        <>
          <h3>Avançado</h3>
          <Actions
            name="Ações avançadas"
            actions={asana.advanced_actions}
          />
          <Actions name="Conexões" actions={asana.connections} />
        </>
      )}
      <Actions big name="Saindo da postura" actions={asana.leaving} />
    </>
  )
}
