import apiFetch from "./apiFetch";

async function useData() {
    const data = await apiFetch('business');
    return data.results[0];
}

export default useData;