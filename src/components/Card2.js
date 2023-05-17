import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from '../utils/items'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function Card2() {
    const [menuItems, setMenuItems] = useState(items)
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items)
            return
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems)
    }

    return (
        <Card2>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </Card2>
    )
}

export default Card2
