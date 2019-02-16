import React, {components} from 'react';

const DescriptionRow = ({name, value}) => {

    return(
        <tr>
            <td>{name.replace('_',' ')+':'}</td>
            <td>{value}</td>
        </tr>
    )
};

export default DescriptionRow;