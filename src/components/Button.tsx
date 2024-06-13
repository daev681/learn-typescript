type ButtonProps = {
    handleClick: () => void
    // 어떤 parameter든 return 할 필요 없을 때 
}


// what is the type react component? 
//  
export const Button = (props: ButtonProps) => {
    return <div onClick={props.handleClick}>click</div>
}