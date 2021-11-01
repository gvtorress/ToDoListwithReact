import React, { useState } from 'react'
import { Container } from './styles'
import { Item } from '../../types/item'

type Props = {
    item: Item,
    onChange: (id: Number, done: boolean) => void
}

export const ListItem = ({item, onChange}: Props) => {

    // const [isChecked, setIsChecked] = useState(item.done);

    return (
        <Container done={item.done}>
            <input
                type="checkbox"
                checked={item.done}
                onChange={(e) => onChange(item.id, e.target.checked)}
            />
            <label>{item.name} - {item.done.toString()}</label>
        </Container>
    )
}