export const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {  
      name: 'id', 
      title: 'Id',
       type: 'string' },
{
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'price2',
      title: 'Original Price (optional)',
      type: 'number',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },
    {
      name: 'ratingCount',
      type: 'number',
      title: 'Rating Count',
      description: 'Number of ratings'
    },
    {
      name: 'sell',
      title: 'Sell Tag',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'sizes',
      type: 'array',
      title: 'Sizes',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Add sizes like S , M , L , XL , XXL'
    },
  ]
}