//Need to standardize nomenclature between actions and reducers

export const selectResult = (result) => {
    console.log("You clicked on result: ", result.title);
    return {
        type: 'RESULT_SELECTED',
        result
    }
};

export const selectUser = (user) => {
    console.log("You've set the user to: ", user);
    return {
        type: 'STORE_USER',
        user
    }
};

// to implement

// export const commentsByUser = ({{prop}}) => {
//     console.log("Comments by user ",{{prop}} );
//     return {
//         type: 'COMMENTS_USER',
//         {{prop}}
//     }
// };

// export const commentsByResource = ({{prop}}) => {
//     console.log("Comments by resource ", {{prop}});
//     return {
//         type: 'COMMENTS_RESOURCE',
//         {{prop}}
//     }
// };
// export const favoritesByUser = ({{prop}}) => {
//     console.log("Favorites by user", {{prop}});
//     return {
//         type: 'FAVORITES_USER',
//         {{prop}}
//     }
// };



