type PersonListProps = {
    names: {
      first: string;
      last: string;
    }[];
  };
  
  export const PersonList = (props: PersonListProps) => {
    return (
      <div>
        {props.names.map((name) => {
          return (
            <h2 key={name.first}> // key 값을 name.first로 받는이유가 뭘까.. 
              {name.first} {name.last}
            </h2>
          );
        })}
      </div>
    );
  };