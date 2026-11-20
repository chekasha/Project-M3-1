import React from 'react'
import type { TrainClass } from '../../types/trainsTypes'
import ClassCard from '../ClassCard/ClassCard'

interface Props {
    classes: TrainClass[]
}

export default function ClassCardsContainer({classes}: Props) {
  return (
    <div>
        {
            classes.map(el => <ClassCard key={el.type} {...el} />)
        }
    </div>
  )
}