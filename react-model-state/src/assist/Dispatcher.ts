export default class Dispatcher {
  callbacks: {[key: string]: Array<(val: any) => void>} = {}
  datas: {[key: string]: any} = {}
  update = (namespace: string) => {
    const updaters = this.callbacks[namespace];
    const data = this.datas[namespace];
    (updaters || []).map((updater: (val: any) => void) => {
      updater(data);
    })
  }
}
