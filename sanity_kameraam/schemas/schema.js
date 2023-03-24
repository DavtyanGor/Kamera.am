import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import category from './category';
import products from './products';
import meta from './meta';
import category_links from './category_links';
export default createSchema({
	name: 'default',
	types: schemaTypes.concat([products, category, category_links, meta]),
});
