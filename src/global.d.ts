declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.webp';
declare module '*.gif';

declare module 'figma:asset/*';

declare module '@vercel/analytics/react' {
	import type React from 'react'
	export function Analytics(props?: any): React.JSX.Element | null
}
