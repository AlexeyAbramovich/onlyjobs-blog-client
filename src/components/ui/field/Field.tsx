import cn from 'clsx'
import styles from './Field.module.scss'

type InputProps = {
	isFooterInput?: boolean
}

export default function Field({ isFooterInput = false }: InputProps) {
	return (
		<input
			className={cn(styles.field, { [styles.footer]: isFooterInput })}
			placeholder='Email'
			type='email'
		/>
	)
}
