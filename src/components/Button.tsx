import React from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>)=>void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  isLoading: boolean;
}

const Button : React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  isLoading = false
}) => {
  return (
    <button
      type='submit'
      disabled={disabled}
      onClick={onClick}
      className={`
                  relative
                  disabled:opacity-70
                  disabled:cursor-not-allowed
                  ${outline ? 'bg-white' : 'bg-orange-500'}
                  ${outline ? 'border-black' : 'border-orange-500'}
                  ${outline ? 'text-black': 'text-white'}
                  ${small ? 'text-sm' : 'text-md'}
                  ${small ? 'py-1' : 'py-3'}
                  ${small ? 'font-light' : 'font-semibold'}
                  ${small ? 'broder-[1px]' : 'border-2'}
                `}
    >
      {label}
    </button>
  )
}

export default Button