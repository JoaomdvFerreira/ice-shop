import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
export default function SearchBox(props) {
    const [name, setName] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        props.history.push(`/search/name/${name}`);
    }
    return (
        <form className="search" onSubmit={submitHandler}>
            <div className="row">
                <input
                    type="text"
                    name="q"
                    id="q"
                    onChange={(e) => setName(e.target.value)} />
                <button className="primary" type="submit">
                    <FaSearch />
                </button>
            </div>
        </form>
    )
}
