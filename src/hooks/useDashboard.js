import {useState, useEffect} from 'react';

import { getDashboard } from '../services/service';

export function useDashboard(defaultValue, URI) {

    const [data, setData] = useState(defaultValue);

    useEffect(() => {
        getDashboard(URI).then(({data}) => {
            setData(data);
        });
    }, [URI])

    return {
        data
    }
}