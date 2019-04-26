export const moveProduct = data => (
    {
        type: "MOVE_PRODUCT",
        payload: {
            organizedProducts: data
        }
    }
)

export const setStorageCategories = data => {
    let storageCategories = [];
    let categories = [...new Set(data.map(item => item.category))]
    categories.forEach( (i,k) => {
        storageCategories.push( { id: k + 1, title: i } )
    })

    console.log(storageCategories)
    return (
        {
            type: "SET_STORAGE_CATEGORIES",
            payload: {
                categories: storageCategories
            }
        }
    )
}

