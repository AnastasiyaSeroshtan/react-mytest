import React from "react";

export const Controls = ({current, total, handleClick}) => {
        return (
            <section>
            <button type="button" disabled={current === 1} onClick={() => handleClick(-1)}>Назад</button>
            <button type="button" disabled={current === total} onClick={() => handleClick(1)}>Вперед</button>
          </section>
        )
}