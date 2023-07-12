import React, { useState } from 'react'
import './styles.scss';

const DropdownSidebar = () => {
    const [toggleArrow, setToggleArrow] = useState(undefined);
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
    ];
    const menuSubItems1 = [
        {key: "subItem1", title: "Configuración"},
        {key: "subItem2", title: "Formulación presupuestaria"},
        {key: "subItem3", title: "Modificación presupuestaria"},
        {key: "subItem4", title: "Programación Física"},
        {key: "subItem5", title: "Reportes"},
    ];

    return <ul className="dropdown-menu-list"> 
            {menuItems.map((item) => (
                <>
                    <li 
                        key={item.key}
                        className="dropdown-menu-item"
                    >
                        <div className="dropdown-item-container">
                            <div className="dropdown-item-icon" onClick={() => setToggleArrow(toggleArrow === item.key ? undefined : item.key)}>
                                <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g className="svg-item-icon" transform={toggleArrow === item.key ? "rotate(90 5 6.5)" : "rotate(0)"}>
                                        <path 
                                            d="M9.22504 6.76923L0.906287 12.6316L0.906287 0.906905L9.22504 6.76923Z" 
                                            fill="white"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <p 
                                className="dropdown-item-text"
                                onClick={() => setToggleArrow(toggleArrow === item.key ? undefined : item.key)}>
                                {item.title}
                            </p>
                        </div>
                        <ul className="dropdown-subMenu-list">
                            {menuSubItems1.map((subitem) => (
                                <li 
                                    key={subitem.key}
                                    className="dropdown-subMenu-item"
                                >
                                    <p className="dropdown-subMenu-item-text">
                                        {subitem.title}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </li>
                </>
            ))}
        </ul>
}

export default DropdownSidebar;