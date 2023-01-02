import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../QuantityInput'
import { RegularText, TitleText } from '../Typography'
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles'

export const CoffeeCard = () => (
  <CoffeeCardContainer>
    <img
      src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1673827200&Signature=YMW9UdOQBV5K80PbKrm~-RqQCeCdwq0oRVdbJwBUiR49~o40KjW3Lrf-SWo-Vv7hvk2P3RUbb8QP99ldgAkvaWPzFEW9l24DZWbkD9c-mE-Jh5tyszzsJLkVv8gDTT7dH2zvSOeRz6MiCo76id6vIJSIBk490EB7w7cEhQrGL9aK3W3A-YcJ~e0vHmvjCOeFq3gEVW4~AhGVCsvJIE18JC1afJxiX-a69ZobChMFA1gU3wXOoKY-b-lZ3N8ng6Sr8dU1m7Gv6DimquEybyo9xez1wjhrosduH-55JF1SqR~0Sx-Ugyx9P215G3blazqLjZg6Kjh3rJmrEDV9~D6Frw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      alt="Café expresso"
    />

    <Tags>
      <span>tradicional</span>
      <span>com leite</span>
    </Tags>

    <Name>Expresso Tradicional</Name>
    <Description>
      O tradicional café feito com água quente e grãos moídos
    </Description>

    <CardFooter>
      <div>
        <RegularText size="s">R$</RegularText>
        <TitleText size="m" color="text" as="strong">
          9,90
        </TitleText>
      </div>

      <AddCartWrapper>
        <QuantityInput />
        <button>
          <ShoppingCart weight="fill" size={22} />
        </button>
      </AddCartWrapper>
    </CardFooter>
  </CoffeeCardContainer>
)
