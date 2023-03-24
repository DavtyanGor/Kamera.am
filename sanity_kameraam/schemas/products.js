export default {
	name: 'products',
	title: 'Products',
	type: 'document',
	groups: [
		{
			name: 'category',
			title: 'Category',
		},
	],
	fields: [
		{
			name: 'name',
			title: 'Product Name',
			type: 'string',
			validation: Rule => Rule.required()
		},
		{
			name: 'type',
			title: 'Type',
			type: 'string',
			validation: Rule => Rule.required()
		},
		{
			name: 'genre',
			title: 'Genre',
			type: 'string',
			validation: Rule => Rule.required()
		},
		{
			name: 'price',
			title: 'Price',
			type: 'string',
			validation: Rule => Rule.required()
		},
		{
			name: 'keywords',
			title: 'Keywords',
			type: 'string',
			validation: Rule => Rule.required()
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			validation: Rule => Rule.required(),
			options: {
				source: (doc, options) => options.parent.name,
			},
		},
		{
			name: 'search',
			title: 'Search',
			type: 'slug',
			validation: Rule => Rule.required(),
			options: {
				source: (doc, options) => `${options.parent.name} ${options.parent.type} ${options.parent.genre} ${options.parent.keywords}`,
				maxLength: 200,
				slugify: input => input
					.toLowerCase()
					.replace(/\s+/g, ' ')
					.slice(0, 200)
			}
		},
		{
			name: 'image',
			title: 'Product image',
			type: 'image',
			validation: Rule => Rule.required(),
			fields: [
				{
					name: 'caption',
					type: 'string',
					title: 'Caption',
					validation: Rule => Rule.required(),
					options: {
						isHighlighted: true,
					},
				},
				{
					name: 'attribution',
					type: 'string',
					title: 'Attribution',
					validation: Rule => Rule.required(),
				},
			],
		},
		{
			name: 'categories',
			title: 'Categories',
			group: 'category',
			type: 'array',
			validation: Rule => Rule.required(),
			of: [
				{
					type: 'reference',
					to: { type: 'category' },
				},
			],
		},
		{
			name: 'published',
			title: 'Published',
			type: 'date',

		},
		{
			name: 'isLiked',
			type: 'boolean',
			title: 'Product is Liked ?',
		},
	],
	initialValue: {
		isLiked: false,
	},
};
