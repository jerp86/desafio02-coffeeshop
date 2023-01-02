import { Input } from '../../../../components'
import { AddressFormContainer } from './styles'

export const AddressForm = () => (
  <AddressFormContainer>
    <Input placeholder="CEP" type="number" className="cep" />
    <Input placeholder="Rua" className="street" />
    <Input placeholder="Número" type="number" className="number" />
    <Input placeholder="Complemento" className="complement" />
    <Input placeholder="Bairro" />
    <Input placeholder="Cidade" />
    <Input placeholder="UF" />
  </AddressFormContainer>
)
