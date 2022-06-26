const makeNewListing = (title, description, dueDate, priority) => {
    return {
        title,
        description, 
        dueDate,
        priority,
    };
};

export default makeNewListing;