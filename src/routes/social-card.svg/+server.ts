import type { RequestHandler } from './$types';

const escapeXml = (value: string) =>
	value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET = (({ url }) => {
	const title = escapeXml(url.searchParams.get('title') ?? 'Code Carton');
	const description = escapeXml(
		url.searchParams.get('description') ?? 'Small software for people who care about the details.'
	);
	const image = url.searchParams.get('image');
	const isProductEvidence =
		image?.startsWith('/one16/') ||
		image?.startsWith('/ditches/') ||
		image?.startsWith('/developer-log/');
	const evidence = isProductEvidence
		? `<image href="${escapeXml(image ?? '')}" x="760" y="90" width="320" height="420" preserveAspectRatio="xMidYMid meet" />`
		: '';
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#e5e2da"/><rect x="34" y="34" width="1132" height="562" fill="#f9f8f3"/><path d="M82 132H1118M82 520H1118" stroke="#d9d6cd"/>
<text x="82" y="108" fill="#20201d" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" letter-spacing="4">CODE CARTON</text>
<text x="82" y="260" fill="#20201d" font-family="Georgia, serif" font-size="64">${title.slice(0, 72)}</text>
<text x="82" y="350" fill="#20201d" font-family="Arial, Helvetica, sans-serif" font-size="26">${description.slice(0, 115)}</text>${evidence}<rect x="82" y="548" width="18" height="18" fill="#e84b1b"/></svg>`,
		{ headers: { 'content-type': 'image/svg+xml; charset=utf-8' } }
	);
}) satisfies RequestHandler;
