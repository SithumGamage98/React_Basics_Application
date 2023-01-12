
import React from 'react'

export default function Person({persons}) {
  return (
    <h1>The Name Is : {persons.Name}, My Skiills : {persons.Skill}</h1>
  )
}
