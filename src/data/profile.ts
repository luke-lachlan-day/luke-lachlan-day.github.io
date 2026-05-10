export type * from './types';

import { companies } from './companies';
import { contact } from './contact';
import { experience } from './experience';
import { home } from './home';
import { projects } from './projects';
import { effects, footer, location, name } from './site';

export const profile = {
	name,
	location,
	effects,
	home,
	companies,
	projects,
	experience,
	contact,
	footer,
} as const;
