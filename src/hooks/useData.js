import {useState, useEffect} from 'react';

import { get } from './../services/service';

export function useData(defaultValue, URI) {

    const [data, setData] = useState(defaultValue);

    useEffect(() => {
        get(URI).then(({data}) => {
            setData(data);
        });
    }, [])

    return {
        data
    }
}