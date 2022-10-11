/* eslint-disable no-unused-expressions */
/* eslint-disable new-cap */
/* eslint-disable jasmine/expect-matcher */
// eslint-disable-next-line no-unused-vars
import { user, usersStore } from '../users'

const store = new usersStore()

describe('User Model', () => {
  it('should have index method', () => {
    expect(store.index).toBeDefined
  })

  it('should have show method', () => {
    expect(store.show).toBeDefined
  })

  it('should have create method', () => {
    expect(store.create).toBeDefined
  })

  it('should have update method', () => {
    expect(store.update).toBeDefined
  })

  it('should have delete method', () => {
    expect(store.delete).toBeDefined
  })

  it('Should Create new User', async () => {
    const result = await store.create({
      name: 'Mamdouh',
      email: 'mamdouh93morad@gmail.com'
    })
    // eslint-disable-next-line no-unused-vars
    const result2 = await store.create({
      name: 'Sanji',
      email: 'sanji12morad@gmail.com'
    })

    expect(result).toEqual({
      id: 1,
      name: 'Mamdouh',
      email: 'mamdouh93morad@gmail.com'
    })
  })

  it('Should Retrieve all table entries', async () => {
    const result = await store.index()

    expect(result).toEqual([
      {
        id: 1,
        name: 'Mamdouh',
        email: 'mamdouh93morad@gmail.com'
      },
      {
        id: 2,
        name: 'Sanji',
        email: 'sanji12morad@gmail.com'
      }
    ])
  })

  it('Should Retrieve entry with given index', async () => {
    const result = await store.show(1)

    expect(result).toEqual({
      id: 1,
      name: 'Mamdouh',
      email: 'mamdouh93morad@gmail.com'
    })
  })

  it('Should update Entry', async () => {
    const result = await store.update(2, {
      name: 'Sherry',
      email: 'sherry12morad@gmail.com'
    })

    expect(result).toEqual({
      id: 2,
      name: 'Sherry',
      email: 'sherry12morad@gmail.com'
    })
  })

  it('Should Delete Entry', async () => {
    await store.delete(1)
    const result = await store.index()

    expect(result).toEqual([
      {
        id: 2,
        name: 'Sherry',
        email: 'sherry12morad@gmail.com'
      }
    ])
  })
})
