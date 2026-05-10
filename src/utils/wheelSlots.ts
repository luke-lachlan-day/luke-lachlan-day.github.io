export const getInitialWheelSlot = (
	index: number,
	total: number,
	activeIndex = 0,
	transitionSlotRange = 3
) => {
	const rawOffset = index - activeIndex;
	const forwardOffset = rawOffset + total;
	const backwardOffset = rawOffset - total;
	const slot = [rawOffset, forwardOffset, backwardOffset].reduce((best, offset) =>
		Math.abs(offset) < Math.abs(best) ? offset : best
	);

	return Math.abs(slot) <= transitionSlotRange ? String(slot) : undefined;
};
