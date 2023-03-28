import React from 'react'

export default function Container(props) {
  return (
    <div className={`${props.className} max-w-[1201px] mx-auto`}>{props.children}</div>
  )
}
