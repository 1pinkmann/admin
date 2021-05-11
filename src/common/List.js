import {React} from 'react';

export default function List ({className, array, Component, ...props}) {

    return (
        <ul className={className}>
            {array.map(item => {
                return <Component key={item.id} item={item} {...props} />
            })}
        </ul>
    );
}