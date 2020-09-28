import api from 'lib/api'

import Layout from 'components/layout'
import MainSearch from 'components/main-search'

export default function Home({ asanas, tags }) {
  return (
    <Layout>
      <div className="flex mt-8 flex-col items-center">
        <MainSearch asanas={asanas} tags={tags} />
        <main className="md:w-7/12 md:ml-8">
          <p>
            Somos estudantes, praticantes e/ou professores do método{' '}
            <em>Iyengar Yoga</em>, temos muitas anotações de cursos, aulas,
            workshops e de nossas práticas pessoais. Para ter a possibilidade de
            pesquisar esse material rapidamente, resolvemos desenvolver uma
            ferramenta que nos ajude.
          </p>
          <p>
            Com isso em mente, fizemos esta plataforma que tem o objetivo de
            servir de material complementar dos estudos e como uma forma de
            democratizar o conhecimento do método.
          </p>
          <blockquote>
            A afirmação de Guruji &ldquo;dar não nos empobrece, reter não nos
            enriquece&rdquo; não apenas deve ser compreendida por nós, mas
            também praticada. <i>&minus; Geetaji</i>
          </blockquote>
          <p>
            Também queremos que esse conhecimento seja acessível e
            compartilhável, o que tende a ajudar na evolução do método sob uma
            perspectiva científica. Guruji encarava o Yoga como uma ciência em
            constante desenvolvimento.
          </p>
          <blockquote>
            Eu desenvolvi os props para que as pessoas possam se beneficiar.
            Milhares estão se beneficiando e continuarão se beneficiando deles.
            Deus alguma vez registrou uma patente para sua criação? Então que
            direito eu, um mero mortal, tenho para fazer isso?{' '}
            <i>&minus; B.K.S. Iyengar</i>
          </blockquote>
          <p>
            <strong>Importante:</strong> O conteúdo descrito nesta plataforma
            deve ser usado como material de apoio. Ele não substitui a
            orientação profissional e/ou as aulas presenciais. Também não
            pretende ser tomado como correto já que é altamente embasado em
            nossas próprias práticas pessoais.
          </p>
          <blockquote>
            Que meu fim seja o seu começo <i>&minus; B.K.S. Iyengar</i>
          </blockquote>
        </main>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const asanas = await api.fetch('asanas')
  const tags = await api.fetch('tags')
  return {
    props: { asanas, tags },
    revalidate: 10,
  }
}
