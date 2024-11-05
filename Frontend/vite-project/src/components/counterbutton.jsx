import { useState } from "react";
import PropTypes from "prop-types";

export default function CounterButton({ name }) {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount((count) => count + 1)}>
            {name} is {count}
        </button>
    );
}

CounterButton.propTypes = {
    name: PropTypes.string.isRequired,
};
