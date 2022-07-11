const makeNewListing = (title, description, dueDate, priority, origPriority, origList) => {
    return {
        title,
        description, 
        dueDate,
        priority,
        origPriority,
    };
};

export default makeNewListing;