'use client'

import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  variant?: 'outlined' | 'filled' | 'gradient' | 'yellow' | 'red' | 'cyan' | 'purple' | 'orange'
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
    filled: 'text-white bg-secondary shadow-lg shadow-secondary/20 hover:shadow-secondary/40 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    gradient: 'text-white bg-gradient-to-r from-secondary to-primary shadow-lg shadow-secondary/20 hover:shadow-secondary/40 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    yellow: 'text-white bg-primary shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    red: 'text-white bg-secondary shadow-lg shadow-secondary/30 hover:shadow-secondary/50 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    cyan: 'text-white bg-accent-blue shadow-lg shadow-accent-blue/30 hover:shadow-accent-blue/50 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    purple: 'text-white bg-[#4F46E5] shadow-lg shadow-[#4F46E5]/30 hover:shadow-[#4F46E5]/50 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    orange: 'text-white bg-accent-orange shadow-lg shadow-accent-orange/30 hover:shadow-accent-orange/50 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
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
