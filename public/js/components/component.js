const component = ({
    child,
    props = {},
    type
}) => {
    const component = document.createElement(type);

    for (const property in props) {
        component.setAttribute(property, props[property]);
    }

    if (child === 'undefined') {
        return component;
    }
    
    if (!(child instanceof Object)) {
        component.text = child;
    } else {
        component.innertHTML = null;
        console.log('es un objeto')
        component.appendChild(child);
    }
    return component;
}

export { component };