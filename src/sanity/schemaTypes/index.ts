import { type SchemaTypeDefinition } from 'sanity'
import product  from './product'
import chefs from './chefs'
import food from './foods'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, food, chefs],
}
