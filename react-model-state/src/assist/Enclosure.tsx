import React, { useRef, useEffect } from 'react'


interface EnclosureProps {
  hook: () => any;
  updater: (val: any) => void;
  namespace: string;
}


export default (props: EnclosureProps) => {
  const { updater, hook } = props;
  const data = hook();

  const init = useRef(false)

  useEffect(() => {
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
