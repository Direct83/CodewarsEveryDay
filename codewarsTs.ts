type Reservation = {
	from?: Date;
	to?: Date;
	destination: string;
};
type Reserve = {
	(from: Date, to: Date, destination: string): Reservation;
	(from: Date, destination: string): Reservation;
	(destination: string): Reservation;
};

const reserve: Reserve = (
	fromOfDestination: Date | string,
	toOrDestination?: Date | string,
	destination?: string
) => {
	if (toOrDestination instanceof Date && fromOfDestination instanceof Date) {
		return {
			from: fromOfDestination,
			to: toOrDestination,
			destination: destination,
		};
	}
	if (
		typeof toOrDestination === 'string' &&
		fromOfDestination instanceof Date
	) {
		return {
			from: fromOfDestination,
			destination: toOrDestination,
		};
	}
	if (typeof fromOfDestination === 'string') {
		return {
			destination: fromOfDestination,
		};
	}
};
