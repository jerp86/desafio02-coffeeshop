import { ReactNode } from 'react'
import { IconContainer, InfoWithIconContainer } from './styles'

interface InfoWithIconProps {
  icon: ReactNode
  iconBg: string
  text: string | ReactNode
}

export const InfoWithIcon = ({ icon, iconBg, text }: InfoWithIconProps) => (
  <InfoWithIconContainer>
    <IconContainer iconBg={iconBg}>{icon}</IconContainer>

    {typeof text === 'string' ? <p>{text}</p> : text}
  </InfoWithIconContainer>
)
