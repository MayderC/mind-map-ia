import {  GenericButtonProps } from '@/presentation-ui/components/common/types';
import Link from 'next/link';

const ButtonTypeSolid = ({isLink, onClick, text, fullWidth, theme, link}: GenericButtonProps) => {
  return (
    <>
      { isLink == false 
        ? <button
            onClick={onClick} 
            className={`${theme === 'dark' ? 'bg-primary-dark' : 'bg-primary-light'} ${fullWidth ? 'w-full' : 'w-auto'} py-2 px-4 rounded-lg`}
          >
            <p className={`${theme === 'dark' ? 'text-primary-light' : 'text-primary-dark'} font-semibold text-sm`}>{text}</p>
        </button>
        : <Link href={link || '/'}>
            <div className={`${theme === 'dark' ? 'bg-primary-dark' : 'bg-primary-light'} ${fullWidth ? 'w-full' : 'w-auto'} py-2 px-4 rounded-lg`}>
              <p className={`${theme === 'dark' ? 'text-primary-light' : 'text-primary-dark'} font-semibold text-sm`}>{text}</p>
            </div>
          </Link>
      }
    </>
  )
}

export default ButtonTypeSolid