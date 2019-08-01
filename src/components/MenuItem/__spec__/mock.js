const linear = {
	id: 420,
	name: 'clouds',
	isActive: false,
	onClick: () => {},
	
};

const withSubtree = {
	...linear,
	isActive: true,
	items: [{
		id: 4,
		name: 'space',
	}, {
		id: 2,
		name: 'galaxy',
	}, {
		id: 0,
		name: 'universe'
	}],
	SubMenuComponent: () => 'Component of Submenu',
}

module.exports = {
	linear,
	withSubtree,
};