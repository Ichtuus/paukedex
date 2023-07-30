const _indexedDB =
  window.indexedDB ||
  //@ts-ignore
  window.mozIndexedDB ||
  //@ts-ignore
  window.webkitIndexedDB ||
  //@ts-ignore
  window.msIndexedDB

export enum typeTransactionE {
  GET = 'get',
  ADD = 'add',
  PUT = 'put',
  DELETE = 'delete',
}

/**
  To use indexedb follow this code bellow

    const store = new Store({dbname: 'dbname'});
    await store.open()
    store.get({}, 'store', 'readwrite')
    store.delete(1, 'store', 'readwrite')
    store.add({}, 'store', 'readwrite')
    store.put({id: 1, lastsearch: "test" }, 'store', 'readwrite', 1).then((response) => {
      console.log('coucou', response)
    })
 */

export class Store {
  db: IDBDatabase | null
  dbname: string
  objectStore: any
  version: number
  constructor(options: any = {}) {
    this.dbname = options.dbname
    this.db = null
    this.version = options.version || 1
  }

  open() {
    return new Promise((resolve, reject) => {
      console.info('open db', this.dbname)
      // _indexedDB.deleteDatabase(this.dbname);
      const req = _indexedDB.open(this.dbname)

      req.onerror = (event) => {
        console.error(`Error on open db => ${event}`)
        reject(event)
      }

      req.onsuccess = (event: any) => {
        resolve(event.target.result)
        this.db = event.target.result
      }

      req.onupgradeneeded = (event: any) => {
        this.db = event.target.result
        this.createStore(this.db)
      }
    })
  }

  createStore(db: any) {
    if (!db.objectStoreNames.contains(this.dbname)) {
      this.objectStore = db.createObjectStore(this.dbname, {
        keyPath: 'id',
        autoIncrement: true,
      })
      // this.objectStore.createIndex('lastsearch', 'lastsearch')
    }
  }

  add(data: object, storename: string, mode: IDBTransactionMode): Promise<any> {
    return this.handleTransaction(typeTransactionE.ADD, mode, storename, data)
  }

  get(data: number, storename: string, mode: IDBTransactionMode): Promise<any> {
    return this.handleTransaction(typeTransactionE.GET, mode, storename, data)
  }

  put(
    data: object,
    storename: string,
    mode: IDBTransactionMode,
    key: number
  ): Promise<any> {
    return this.handleTransaction(
      typeTransactionE.PUT,
      mode,
      storename,
      data,
      key
    )
  }

  delete(
    data: number,
    storename: string,
    mode: IDBTransactionMode
  ): Promise<any> {
    return this.handleTransaction(
      typeTransactionE.DELETE,
      mode,
      storename,
      data
    )
  }

  createTransaction(mode: IDBTransactionMode, storename: string) {
    const transaction = this.db?.transaction(storename, mode)
    return transaction!.objectStore(storename)
  }

  handleTransaction(
    type: typeTransactionE,
    mode: IDBTransactionMode,
    storename: string,
    data?: any,
    key?: number
  ) {
    console.log(
      'type',
      type,
      'mode',
      mode,
      'storename',
      storename,
      'data',
      data,
      'key',
      key
    )
    return new Promise((resolve, reject) => {
      const store = this.createTransaction(mode, storename)
      const request: IDBRequest<any> = store[type](data)

      request!.onsuccess = (event: any) => {
        resolve(event.target.result)
      }

      request!.onerror = (event: Event) => {
        reject(event)
      }
    })
  }
}
