
type Props = {
    id: number,
    name: string,
    price: number;
}

function ChildComponent (props: Readonly<Props>) {
    return  (
         <div>
            {props.name} {props.price}$
        </div>
    );
}


export default ChildComponent;
