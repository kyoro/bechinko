import { css } from '@emotion/react'
import { useMemo, FC } from 'react'

const base = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 27px;
  padding: 0;
  font-size: 1rem;

  background-color: inherit;
  border: none;
  transition: color 0.3s, text-decoration 0.3s, background-color 0.1s;

  &:hover {
    cursor: pointer;
  }

  &:disabled:hover {
    cursor: initial;
  }
`

export type ButtonType = 'submit' | 'reset' | 'button' 

type BaseButtonPropsAsButton = {
  type: 'button' | 'reset'
  onClick?: () => void
  disabled?: boolean
}

export type BaseButtonProps = {
  id?: string
  type: ButtonType
  cssStyle?: CssStyle
  ariaLabel?: string
  tabIndex?: number
  ariaBusy?: boolean
  ariaControls?: string
  children: React.ReactNode
} & (BaseButtonPropsAsButton)

export const BaseButton: FC<BaseButtonProps> = (props) => {
  const {
    id,
    children,
    ariaLabel,
    cssStyle,
    tabIndex,
    ariaBusy,
    ariaControls,
  } = props

  const style = useMemo(
    () => css`
      ${base}
      ${cssStyle}
    `,
    [cssStyle],
  )

  return (
    <button
      id={id}
      css={style}
      type={props.type}
      disabled={props.disabled}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      onClick={props.onClick}
      aria-controls={ariaControls}
      aria-busy={ariaBusy}
    >
      {children}
    </button>
  )
}
