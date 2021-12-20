const discoverOriginalPrice = (discountedPrice, salePercentage) =>
	((discountedPrice / (100 - salePercentage)) * 100).toFixed(2) * 1;
