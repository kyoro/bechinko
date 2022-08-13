import { useMemo, FC } from 'react'
import type { SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import {
  BaseButton,
  BaseButtonProps,
} from '../BaseButton'

const defaultStyle = css`
  color: #ffffff;
  background-color: #969696;
  border: none;
  transition: background-color 0.1s linear;

  &:hover {
    background-color: #757474;
  }
`

const primaryStyle = css`
  color: #ffffff;
  background-color: #1ba0c8;
  border: none;

  &:hover {
    background-color: #1285a5;
  }
`

export enum ButtonStyle {
  default,
  primary,
}

const styleMap: {
  [P in ButtonStyle]: {
    style: SerializedStyles
  }
} = {
  [ButtonStyle.default]: {
    style: defaultStyle,
  },
  [ButtonStyle.primary]: {
    style: primaryStyle,
  },
}

export type ButtonProps = BaseButtonProps & {
  style?: ButtonStyle
  width?: string
  height?: string
}

export const Button: FC<ButtonProps> = ({
  style: buttonStyle = ButtonStyle.default,
  width,
  height,
  ...baseButtonProps
}) => {
  const { style } = styleMap[buttonStyle]

  const size = useMemo(() => {
    return css`
      width: ${width};
      height: ${height};
    `
  }, [width, height])

  return <BaseButton {...baseButtonProps} cssStyle={[style, size]} />
}
