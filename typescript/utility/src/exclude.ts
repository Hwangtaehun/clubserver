type Languages = 'C' | 'Jave' | 'TypeScript' | 'React';
type TrueLanguages = Exclude<Languages, 'React'>;