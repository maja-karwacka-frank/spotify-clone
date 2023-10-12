'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';

import { Database } from '@/types_db';

interface SupabaseProviderProps {
	children: React.ReactNode;
}

const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
	const [supabaseClient] = useState<any>(() => {
		createClientComponentClient<Database>();
	});

	return (
		<SessionContextProvider supabaseClient={supabaseClient}>
			{children}
		</SessionContextProvider>
	);
};

export default SupabaseProvider;
