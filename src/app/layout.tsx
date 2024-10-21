import Header from '@/components/layout/header/Header'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.scss'

const exoFont = localFont({
	src: [
		{
			path: './fonts/Exo-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/Exo-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './fonts/Exo-MediumItalic.woff2',
			weight: '500',
			style: 'italic',
		},
		{
			path: './fonts/Exo-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: './fonts/Exo-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
})

export const metadata: Metadata = {
	title: 'Onlyjobs.it | Jobs',
	description: 'Onlyjobs.it blog shows available jobs in IT',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={exoFont.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
