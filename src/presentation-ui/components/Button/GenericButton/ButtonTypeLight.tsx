import { GenericButtonProps } from "@/presentation-ui/components/common/types"
import Link from "next/link"


const ButtonTypeLight =({ onClick,  text, fullWidth, theme, isLink, link}: GenericButtonProps) => {
  return (
    <>
      { isLink == false 
        ? <button
            onClick={onClick} 
            className={`border-2 ${theme === 'dark' ? 'border-primary-dark' : 'border-primary-light'} ${fullWidth ? 'w-full' : 'w-auto'} py-2 px-4 rounded-lg`}
          >
            <p className={`${theme === 'dark' ? 'text-primary-light' : 'text-primary-dark'} font-semibold text-sm`}>{text}</p>
        </button>
        : <Link href={link || '/'} prefetch>
            <div className={`${theme === 'dark' ? ' border-2  border-primary-dark' : 'border-2 border-zinc-600'} ${fullWidth ? 'w-full' : 'w-auto'} py-1 px-4 rounded-lg`}>
              <p className={`${theme === 'dark' ? 'text-primary-light' : 'text-primary-dark'} font-semibold text-sm`}>{text}</p>
            </div>
          </Link>
      }
    </>
  )
}

export default ButtonTypeLight