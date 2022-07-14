import React from 'react'

export default function Safe() {
  return (
    <div>Safe</div>
  )
}


export async function getStaticPaths() {
  return {
    paths: [
      { params: { ... } }
    ],
    fallback: true
  };
}