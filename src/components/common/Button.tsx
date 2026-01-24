'use client'

import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  variant?: 'outlined' | 'filled' | 'gradient' | 'yellow' | 'red' | 'cyan' | 'purple' | 'orange'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  fullWidth?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'outlined',
  size = 'md',
  className = '',
  fullWidth = false,
}) => {
  const baseStyles = 'flex items-center justify-center gap-2 rounded-full font-heading font-bold uppercase tracking-[0.15em] transition-all duration-300'

  const sizeStyles = {
    sm: 'px-4 py-1 text-[9px]',
    md: 'px-6 py-1.5 text-[10px]',
    lg: 'px-8 py-4 text-xs',
  }

  const variantStyles = {
    outlined: 'border-2 border-text hover:border-red-light hover:text-red-light bg-transparent',
    filled: 'text-white bg-red-light shadow-lg shadow-red-light/20 hover:shadow-red-light/40 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    gradient: 'text-white bg-gradient-to-r from-red-light to-primary shadow-lg shadow-red-light/20 hover:shadow-red-light/40 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    yellow: 'text-white bg-[#d4af37] shadow-lg shadow-[#d4af37]/30 hover:shadow-[#d4af37]/50 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    red: 'text-white bg-[#ff6666] shadow-lg shadow-[#ff6666]/30 hover:shadow-[#ff6666]/50 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    cyan: 'text-white bg-[#0891B2] shadow-lg shadow-[#0891B2]/30 hover:shadow-[#0891B2]/50 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    purple: 'text-white bg-[#4F46E5] shadow-lg shadow-[#4F46E5]/30 hover:shadow-[#4F46E5]/50 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
    orange: 'text-white bg-[#FF8A65] shadow-lg shadow-[#FF8A65]/30 hover:shadow-[#FF8A65]/50 hover:scale-[1.03] active:scale-[0.97] border-2 border-transparent',
  }

  const widthStyles = fullWidth ? 'w-full' : ''

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyles} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
