import React, { useRef, useEffect, useMemo } from 'react'

interface EnclosureProps {
  hook: (datas: any) => any;
  updater: (val: any) => void;
  namespace: string;
  datas: { [key: string]: any }
}

export default (props: EnclosureProps) => {
  const { updater, hook, datas } = props;

  const data = hook(datas);

  const init = useRef(false)

  useMemo(() => {
    updater(data)
    init.current = false;
  }, [])

  useEffect(() => {
    if (init.current) {
      updater(data)
    } else {
      init.current = true;
    }
  })

  return <></>
}
