export const fetchRandonCharacter = async() => {
    try {
        const response = await fetch (`https://rickandmortyapi.com/api/character`)
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.results.length);
        console.log(data);
        return data.results[randomIndex]
    } catch (error) {
        console.error('Error fetching the data')
        throw error;
        
    }
}