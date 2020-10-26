import { useEffect, useRef, EffectCallback, DependencyList } from 'react';

const useDidMount = (effect: EffectCallback, deps?: DependencyList): void => {
    const didMount = useRef<boolean>(false);

    useEffect(() => {
        if (!didMount.current) {
            didMount.current = true;

            return;
        }

        effect();
    }, deps);
};

export default useDidMount;
