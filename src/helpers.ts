/**
 * Offset getter method from jQuery: https://github.com/jquery/jquery/blob/3.1.1/src/offset.js#L78
 */
export const getOffset = (element: HTMLElement): { top: number, left: number } => {
	if (!element) return;
	if (!element.getClientRects().length) return { top: 0, left: 0 };

	let rect: ClientRect = element.getBoundingClientRect();
	if (!rect.width && !rect.height) return rect;
	
	const div = element.ownerDocument.querySelector('angular-middle-panel').shadowRoot.getElementById('vp-app');

	return {
		top: rect.top + div.scrollTop,
		left: rect.left + div.scrollLeft,
	};
};