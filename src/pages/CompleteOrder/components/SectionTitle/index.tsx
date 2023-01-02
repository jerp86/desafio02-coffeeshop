import { ReactNode } from 'react'
import { RegularText } from '../../../../components'
import { SectionTitleContainer } from './styles'

interface SectionTitleProps {
  icon: ReactNode
  subtitle: string
  title: string
}
export const SectionTitle = ({ icon, subtitle, title }: SectionTitleProps) => (
  <SectionTitleContainer>
    {icon}

    <div>
      <RegularText color="subtitle">{title}</RegularText>
      <RegularText size="s">{subtitle}</RegularText>
    </div>
  </SectionTitleContainer>
)
