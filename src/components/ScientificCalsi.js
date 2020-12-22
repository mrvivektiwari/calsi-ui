
import React from 'react';
import { SCIENTIFIC_ACTIONS, ACTION_MAP } from '../constants'
import Button from './Button';


function ScientificCalsi(props) {

    return (
        <tr>
            {SCIENTIFIC_ACTIONS.map(item =>
                <td key={item}>
                    <Button
                        name={ACTION_MAP.hasOwnProperty(item) ? ACTION_MAP[item] : item}
                        label={item}
                        handleClick={props.handleClick}
                    />
                </td>
            )}
        </tr>
    );
}

export default ScientificCalsi;
