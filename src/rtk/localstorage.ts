export const saveStateToLocalStorage = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("cart", serializedState);
    } catch (e) {
        console.warn("Could not save state", e);
    }
};

export const loadStateFromLocalStorage = (): any => {
    try {
        const serializedState = localStorage.getItem("cart");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Could not load state", e);
        return undefined;
   
    }
}