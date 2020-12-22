
import React from 'react';
import { OPERANDS_AND_OPERATOR, ACTION_MAP } from '../constants'
import Button from './Button';

function NormalCalsi(props) {

    return (
        Object.keys(OPERANDS_AND_OPERATOR).map(row =>
            <tr key={row}>
                {OPERANDS_AND_OPERATOR[row].map(item =>
                    <td key={item}>
                        <Button
                            name={ACTION_MAP.hasOwnProperty(item) ? ACTION_MAP[item] : item}
                            label={item}
                            handleClick={props.handleClick}
                        />
                    </td>
                )}
            </tr>
        )
    );
}

export default NormalCalsi;

