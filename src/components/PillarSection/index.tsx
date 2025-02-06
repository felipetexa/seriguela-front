
import { PillarWrapper, Content, SideContent, IconWrapper, IconTitle } from './styles'

function PillarSection() {
  return (
    <PillarWrapper>
      <div>
        <h1>Nosso desafio.</h1> 
        <p>Construindo resultados gigantes para o proprietário, os residentes e o entorno</p>
      </div>
      <SideContent>
      <div>
        <IconWrapper>
          <img src="/path/to/conforto-icon.svg" alt="Conforto" width="24" height="24" />
        </IconWrapper>
        <IconTitle>Conforto</IconTitle>
        <Content>
        A Seriguela Inc. constrói casas para alugar nas quais os residentes vivem confortavelmente, todos os dias do ano. As casas são sustentáveis ​​e da mais alta qualidade. Dessa forma, os residentes e as gerações seguintes poderão aproveitá-lo nos próximos anos.      </Content>
      </div>
      <div>
        <IconWrapper>
          <img src="/path/to/energia-icon.svg" alt="Energia" width="24" height="24" />
        </IconWrapper>
        <IconTitle>Energia</IconTitle>
        <Content>
        Os inquilinos dependem muitas vezes da sua associação habitacional para medidas de poupança de energia. Painéis solares, por exemplo, ou bomba de calor. Com uma nova casa Seriguela, os residentes têm uma casa com eficiência energética desde o primeiro dia.      </Content>
      </div>
      <div>
        <IconWrapper>
          <img src="/path/to/ambiente-icon.svg" alt="Ambiente" width="24" height="24" />
        </IconWrapper>
        <IconTitle>Ambiente</IconTitle>
        <Content>
        Menos desperdício, mínimo impacto ambiental. Esse é o objetivo da Seriguela. Não queremos usar matérias-primas que não precisamos. Nossas casas são ecologicamente corretas e ainda assim confortáveis.      </Content>
      </div>
    </SideContent>
</PillarWrapper>
  )
}

export default PillarSection