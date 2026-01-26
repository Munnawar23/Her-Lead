'use client'

import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  variant?: 'outlined' | 'filled' | 'gold' | 'yellow' | 'red' | 'cyan' | 'purple' | 'orange'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  fullWidth?: boolean
  style?: React.CSSProperties
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'outlined',
  size = 'md',
  className = '',
  fullWidth = false,
  style = {},
}) => {
  const baseStyles = 'flex items-center justify-center gap-2 rounded-full font-heading font-bold uppercase tracking-[0.15em] transition-all duration-300'

  const sizeStyles = {
    sm: 'px-4 py-1 text-[9px]',
    md: 'px-6 py-1.5 text-[10px]',
    lg: 'px-8 py-4 text-xs',
  }

  const variantStyles = {
    outlined: 'border-2 border-text hover:border-secondary hover:text-secondary bg-transparent',
    filled: 'text-white bg-secondary hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    gold: 'text-white bg-primary hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    yellow: 'text-white bg-primary hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    red: 'text-white bg-secondary hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    cyan: 'text-white bg-accent-blue hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    purple: 'text-white bg-[#4F46E5] hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    orange: 'text-white bg-accent-orange hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
  }

  const widthStyles = fullWidth ? 'w-full' : ''

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyles} ${className}`}
      style={style}
    >
      {children}
    </button>
  )
}

export default Button
