import { OrderStatus } from '../enum/order-status.enum'
import { OrderCardInfo } from '../types/order-card-info'
import { Product } from '../types/product'
import { rows } from './product-rows.constant'

const product: Product = {
  code: '645684856455',
  desc: 'celular à prova de balas com um motor turbinado capaz de dar piruetas',
  name: 'samsung pocket'
}

export const mockedOrderCards: OrderCardInfo[] = [
  {
    code: '865646516',
    orderedAt: new Date(),
    status: OrderStatus.PREPARATION,
    productRows: [...rows]
  },
  {
    code: '865646516',
    orderedAt: new Date(),
    status: OrderStatus.PREPARATION,
    productRows: [...rows]
  },
  {
    code: '865646516',
    orderedAt: new Date(),
    status: OrderStatus.PREPARATION,
    productRows: [...rows]
  },
  {
    code: '865646516',
    orderedAt: new Date(),
    status: OrderStatus.CHECKING,
    productRows: [...rows]
  },
  {
    code: '865646516',
    orderedAt: new Date(),
    status: OrderStatus.CHECKING,
    productRows: [...rows]
  },
  {
    code: '865646516',
    orderedAt: new Date(),
    status: OrderStatus.DELIVERY,
    productRows: [...rows]
  },
  {
    code: '865646516',
    orderedAt: new Date(),
    status: OrderStatus.DELIVERY,
    productRows: [...rows]
  },
  {
    code: '865646516',
    orderedAt: new Date(),
    status: OrderStatus.PREPARATION,
    productRows: [...rows]
  },
  {
    code: '865646516',
    orderedAt: new Date(),
    status: OrderStatus.PREPARATION,
    productRows: [...rows]
  },
  {
    code: '865646516',
    orderedAt: new Date(),
    status: OrderStatus.PREPARATION,
    productRows: [...rows]
  }
]
