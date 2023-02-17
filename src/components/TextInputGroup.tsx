import React, { InputHTMLAttributes, ReactElement, ReactNode } from 'react'

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode
  /**
   * The html you want to render before the input field
   */
  leftElement?: ReactElement
  /**
   * The html you want to render after the input field
   */
  rightElement?: ReactElement
}

export const TextInputGroup: React.FC<ITextInputProps> = ({
  leftElement,
  rightElement,
  placeholder = 'Enter Text...',
  ...props
}) => {
  return (
    <div className={`flex items-center justify-center`}>
      {/*Left Element*/}
      {leftElement && (
        <div className={'rounded-l-md bg-gray-200 p-2 font-semibold'}>
          {leftElement}
        </div>
      )}
      {/*Input*/}
      <div className="">
        <input
          className={`my-2 px-4 py-2 font-semibold text-gray-600 focus:outline-none focus:ring-1 focus:ring-primary-light ${
            leftElement ? '' : 'rounded-l-md'
          } ${rightElement ? '' : 'rounded-r-md'}`}
          placeholder={placeholder}
          {...props}
        />
      </div>
      {/*Right Element*/}
      {rightElement && (
        <div className={'rounded- rounded-r-md bg-gray-200 p-2 font-semibold'}>
          {rightElement}
        </div>
      )}
    </div>
  )
}
