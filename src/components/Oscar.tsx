type OscarProps = {
    children: React.ReactNode
}


// what is the type react component? 
//  
export const Oscar = (props:OscarProps  ) => {
    return <div>{props.children}</div>
}