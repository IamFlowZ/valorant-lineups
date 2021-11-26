import { capitalizeFirstLetter } from "./utils";

const column = {display: 'flex', flexDirection: 'column'}

export default function Select({item, itemState, setItemState, selectOptions}) {
    return (
        <section style={column}>
          <label htmlFor={`${item}`}>
              {capitalizeFirstLetter(item)}
          </label>
          <select id={`${item}`}
            value={itemState}
            onChange={(e) => setItemState(e.target.value)}
          >
            {selectOptions.map((option, i) => 
                <option value={option} key={i}>
                    {capitalizeFirstLetter(option).split('-').join(' ')}
                </option>)}
          </select>
        </section>
    )
}