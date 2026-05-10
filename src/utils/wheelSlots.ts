export const getShortestWheelOffset = (index: number, activeIndex: number, total: number) => {
	const rawOffset = index - activeIndex;
	const forwardOffset = rawOffset + total;
	const backwardOffset = rawOffset - total;

	return [rawOffset, forwardOffset, backwardOffset].reduce((best, offset) => (Math.abs(offset) < Math.abs(best) ? offset : best));
};

export const getInitialWheelSlot = (index: number, total: number, activeIndex = 0, transitionSlotRange = 3) => {
	const slot = getShortestWheelOffset(index, activeIndex, total);

	return Math.abs(slot) <= transitionSlotRange ? String(slot) : undefined;
};
