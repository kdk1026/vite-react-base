import { useEffect, useState } from "react";

const State = () => {

    const [text, setText] = useState('');
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        setText('Hello World');
        
        const initialData = [{ id: 1, name: '홍길동' }];
        setPersons(initialData);
    }, []);

    useEffect(() => {
        if ( text ) {
            alert(text);
        }
    }, [text]);

    const handleAdd = () => {
        const nextId = persons.length + 1;
        const newPerson = { id: nextId, name: `임꺽정_${nextId}` };

        // 연속적인 업데이트 처리는 안되고 마지막거만 업데이트
        // - 예시는 이벤트 시, 1건만 업데잍트 하지만 2건 업데이트 한다고 하면 마지막거만 업데이트 처리됨
        //setPersons([...persons, newPerson]);

        // 연속적인 업데이트 처리
        setPersons(prevPersons => [...prevPersons, newPerson]);
    };

    return (
        <>
            <div>{JSON.stringify(persons)}</div>
            <button onClick={handleAdd}>추가</button>
        </>
    )
};

export default State;