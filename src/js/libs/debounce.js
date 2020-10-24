export default (callback, delay = 1000) => {
    let debounced = false;
    let resetDebouncedTimeout = null;

    return (...args) => {
        if (!debounced) {
            debounced = true;
            callback(...args);

            resetDebouncedTimeout = setTimeout(() => {
                debounced = false;
            }, delay);
        } else {
            clearTimeout(resetDebouncedTimeout);
            
            resetDebouncedTimeout = setTimeout(() => {
                debounced = false;
                callback(...args);
            }, delay);
        }
    };
};
