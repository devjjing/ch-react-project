import ChildComponent from "./ChildComponent.tsx";

function ParentComponent() {
    const data: {id: number; name: string; price: number;}[] = [
        { id: 1, name: "Tomato", price: 2} ,
        { id: 2, name: "Cucumber",price: 2},
        { id: 3, name: "Celery",price: 1},
        { id: 4, name: "Carrot",price: 1},
        { id: 5, name: "Lettuce",price:3},
        { id: 6, name: "Corn", price:4},
    ];

    return (
        <div>
            {data.map((element) => (
                <ChildComponent name={element.name}  id={element.id} key={element.id} price={element.price}/>
            ))}
        </div>
    );
}

export default ParentComponent;
