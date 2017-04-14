export const selectResult = (result) => {
  return {
    type: 'RESULT_SELECTED',
    result
  }
};

export const searchResults = (results) => {
  return {
    type: 'SEARCH_RESULTS',
    results
  };
};

export const selectUser = (user) => {
  return {
    type: 'STORE_USER',
    user
  }
};

export const userFormData = (userFormData) => {
  return {
    type: 'USER_FORM_DATA',
    userFormData
  }
};

export const clearUser = () => {
  return {
    type: 'CLEAR_USER'
  }
}

export const submissionData = (submission) => {
  return {
    type: 'USER_SUBMISSION_DATA',
    submission
  };
};

export const addTag = (tags) => {
  return {
    type: 'ADD_TAG',
    tags
  };
};

export const clearSubmissionData = () => {
  return {
    type: 'CLEAR_SUBMISSION_DATA'
  };
};

export const searchTerm = (search) => {
  return {
    type: 'SEARCH_TERM',
    search
  };
};

export const clearSearch = () => {
  return {
    type: 'CLEAR_SEARCH'
  };
};

export const signUpDialog = (dialogs) => {
  return {
    type: 'SIGNUP_DIALOG_OPEN',
    dialogs
  };
};

export const submitDialog = (dialogs) => {
  return {
    type: 'SUBMIT_DIALOG_OPEN',
    dialogs
  };
};

export const logInDialog = (dialogs) => {
  return {
    type: 'LOGIN_DIALOG_OPEN',
    dialogs
  };
};

export const userProfile = (profile) => {  
  return {
    type: 'USER_PROFILE',
    profile    
    }
};

export const newComment = (comment) => {
  return {
    type: 'ADD_COMMENT',
    comment
  }
}

export const commentsByResource = (comments) => {
    //console.log("Comments by resource ", {{prop}});
    return {
        type: 'COMMENTS_RESOURCE',
        comments
    }
};

export const unapprovedResources = (resources) => {
  return {
    type: 'UNAPPROVED',
    resources
  }
};

export const updateResource = (updatedResource) => {
  return {
    type: 'UPDATE_RESOURCE',
    updatedResource
  };
};

export const updateVote = (resourceId, votes, newVote) => {
  return {
    type: 'UPDATE_VOTE',
    resourceId,
    votes,
    newVote
  }
}

export const approveResource = (resource) => {
  return {
    type: 'APPROVE',
    resource
  }
};

