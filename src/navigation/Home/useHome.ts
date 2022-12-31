import { useMemo } from 'react';
import { useMediaQueryList } from '../../api/query';

const useHome = () => {
    const { data, isLoading: isMediaLoading } = useMediaQueryList('1', 'MANGA');

    const mediaList = useMemo(() => data?.Page?.media, [data]);

    return { mediaList, isMediaLoading };
};

export default useHome;
