import React from 'react'
import './styles.scss';

const DropdownSidebar = () => {
    const menuItems = [
        {key: "item1", title: "Presupuesto"},
        {key: "item2", title: "CAS"},
        {key: "item3", title: "Planifiación"},
        {key: "item4", title: "Contrataciones"},
        {key: "item5", title: "Portal"},
        {key: "item6", title: "Contabilidad"},
        {key: "item7",title: "Tesorería"},
        {key: "item8",title: "Bienes Físicos"},
        {key: "item9",title: "Inversión Pública"},
        {key: "item10",title: "Crédito Público"},
        {key: "item11",title: "Recursos Humanos"},
    ]

    return <div>
        <ul className="dropdown-menu-list"> 
            {menuItems.map((item) => (
                <>
                    <li 
                        key={item.key}
                        className="dropdown-menu-item"
                    >
                        <div className="dropdown-item-icon">
                            <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.22504 6.76923L0.906287 12.6316L0.906287 0.906905L9.22504 6.76923Z" fill="white"/>
                            </svg>
                        </div>
                        {item.title}
                    </li>
                </>
            ))}
        </ul>
    </div>
}

export default DropdownSidebar;