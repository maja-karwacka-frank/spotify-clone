import SideBar from '@/components/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import SupabaseProvider from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModalProvider';
import ToasterProvider from '@/providers/ToasterProvider';

const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Spotify Clone',
	description: 'Listen to music!',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning={true} className={font.className}>
				<ToasterProvider />
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider />
						<SideBar>{children}</SideBar>
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
}
