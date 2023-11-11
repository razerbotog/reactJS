function customRender(reactElement, container){
  /*  const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    container.appendChild(domElement); */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    /* co-pilot suggestion
    Object.keys(reactElement.props).forEach((prop) => {
        if(prop === 'children') return;
        domElement.setAttribute(prop, reactElement.props[prop]);
    })
    container.appendChild(domElement); */
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        // console.log(prop);
        domElement.setAttribute(prop, reactElement.props[prop]);       
    }
    container.appendChild(domElement);

}
const reactElement = {
    type: "a",
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer)