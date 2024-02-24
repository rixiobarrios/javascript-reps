// A function which calls itself

// A recursive function is a function which calls itself in some way. In some cases, it can be for mathematical computation like the Fibonacci sequence.

// In JavaScript, the most common use case for a recursive function is for tree traversal: navigating through a data tree, all the way to the end of each branch.

const commentToTest = {
    content: '1',
    subComments: [
        { content: '1-A', subComments: [] },
        {
            content: '1-B',
            subComments: [{ content: '1-B-a', subComments: [] }],
        },
        {
            content: '1-C',
            subComments: [
                {
                    content: '1-C-a',
                    subComments: [
                        { content: '1-C-a-i', subComments: [] },
                        { content: '1-C-a-ii', subComments: [] },
                    ],
                },
                { content: '1-C-b', subComments: [] },
            ],
        },
        { content: '1-D', subComments: [] },
    ],
};

const getAllComments = (comment) => {
    let allComments = comment.content;
    for (let subComment of comment.subComments) {
        allComments += '\n' + getAllComments(subComment);
    }
    return allComments;
};

console.log(getAllComments(commentToTest));

//-------------------------------------------------------
