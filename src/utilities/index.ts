import { DependencyList, EffectCallback, useEffect } from "react";


export function useEffectHaveWindow(effect: EffectCallback, deps?: DependencyList) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            return effect();
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}
