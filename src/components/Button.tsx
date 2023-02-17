import React, { ButtonHTMLAttributes, useMemo } from 'react'
import { COLOR_VARIANTS } from '../constants/colors'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is this primary button, will have primary colors
   */
  primary?: boolean
  /**
   * Is this primary button, will have primary colors
   */
  secondary?: boolean
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button Title
   */
  title?: string
  /**
   * Make the button uppercase
   */
  uppercase?: boolean
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export const Button: React.FC<IButtonProps> = ({
  title = 'Button',
  secondary,
  primary,
  size,
  uppercase = false,
  children,
  ...props
}) => {
  // Getting memoized size classes from the useMemo hook
  const sizeClassNames = useMemo(() => {
    if (size === 'small') {
      return 'px-2 py-1 text-[10px]'
    }
    if (size === 'large') {
      return 'px-6 py-3 text-xl'
    }
    return 'px-4 py-2 text-sm'
  }, [size])

  return (
    <button
      aria-label="Button"
      // {...props}
      // if primary is true, then button will be primary, if
      // secondary is true, then button will have secondary color
      // otherwise it will just have the default color
      className={`${sizeClassNames} ${
        primary
          ? COLOR_VARIANTS['primary']
          : secondary
          ? COLOR_VARIANTS['secondary']
          : COLOR_VARIANTS['default']
      } ${
        uppercase ? 'uppercase' : 'capitalize'
      } mx-2 my-1 rounded-lg font-semibold`}
    >
      {children ?? title}
    </button>
  )
}
