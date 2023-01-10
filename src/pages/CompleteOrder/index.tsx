import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CompleteOrderContainer } from './style'

const confirmOrderFormValidationSchema = z.object({
  cep: z.string().min(1, 'Informe o CEP'),
  street: z.string().min(1, 'Informe o Rua'),
  number: z.string().min(1, 'Informe o Número'),
  complement: z.string(),
  district: z.string().min(1, 'Informe o Bairro'),
  city: z.string().min(1, 'Informe a Cidade'),
  uf: z.string().min(1, 'Informe a UF'),
})

export type OrderData = z.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export const CompleteOrder = () => {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const handleConfirmOrder = (data: ConfirmOrderFormData) => {}

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />

        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>
  )
}
