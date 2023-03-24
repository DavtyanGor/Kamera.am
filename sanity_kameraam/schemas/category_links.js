export default {
	name: 'category_link',
	title: 'Category Link',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: Rule => Rule.required(),
		},
		{
			name: 'title_hy',
			title: 'Title Armenian',
			type: 'string',
			validation: Rule => Rule.required(),
		},
		{
			name: 'title_en',
			title: 'Title English',
			type: 'string',
			validation: Rule => Rule.required(),
		},
		{
			name: 'title_ru',
			title: 'Title Russian',
			type: 'string',
			validation: Rule => Rule.required(),
		},
		{
			name: 'link_slug',
			title: 'Link Slug',
			type: 'slug',
			validation: Rule => Rule.required(),
			options: {
				source: (doc, options) => options.parent.title,
			},
		},{
			name: 'link_image',
			title: 'Link Slider image',
			type: 'image',
			validation: Rule => Rule.required(),
		},
	],
};
