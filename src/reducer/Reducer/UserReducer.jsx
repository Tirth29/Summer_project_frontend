import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, (builder) => {
  builder
    .addCase("loginRequest", (state) => {
      state.loading = true;
    })
    .addCase("loadUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("logoutRequest", (state) => {
      state.loading = true;
    })
    .addCase("registerRequest", (state) => {
      state.loading = true;
    });
  builder
    .addCase("loginSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload;
    })
    .addCase("loadUserSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase("logoutSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload;
      state.user = null;
    })
    .addCase("registerSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload;
    });
  builder
    .addCase("loginFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("loadUserFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("logoutFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    })
    .addCase("registerFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("updateProfileRequest", (state, action) => {
      state.loading = true;
    })
    .addCase("updateProfileSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updateProfileFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updatePicRequest", (state, action) => {
      state.loading = true;
    })
    .addCase("updatePicSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updatePicFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updatePostRequest", (state, action) => {
      state.loading = true;
    })
    .addCase("updatePostSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updatePostFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updateReelRequest", (state, action) => {
      state.loading = true;
    })
    .addCase("updateReelSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updateReelFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("myAllPostRequest", (state, action) => {
      state.loading = true;
    })
    .addCase("myAllPostSuccess", (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase("myAllPostFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("otherPostRequest", (state, action) => {
      state.loading = true;
    })
    .addCase("otherPostSuccess", (state, action) => {
      state.loading = false;
      state.otherposts = action.payload;
    })
    .addCase("otherPostFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("otherUserProfileRequest", (state, action) => {
      state.loading = true;
    })
    .addCase("otherUserProfileSuccess", (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    })
    .addCase("otherUserProfileFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("otherUserPostRequest", (state, action) => {
      state.loading = true;
    })
    .addCase("otherUserPostSuccess", (state, action) => {
      state.loading = false;
      state.otheruserpost = action.payload;
    })
    .addCase("otherUserPostFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("allReelsRequest", (state, action) => {
      state.loading = true;
    })
    .addCase("allReelsSuccess", (state, action) => {
      state.loading = false;
      state.allreels = action.payload;
    })
    .addCase("allReelsFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  builder
  .addCase("addCompanyRequest", (state, action) => {
    state.loading=true; 
  })
  .addCase("addCompanySuccess", (state, action) => {
    state.loading=false;
    state.message=action.payload;
  })
  .addCase("addCompanyFail", (state, action) => {
    state.loading=false;
    state.error = action.payload; 
  }) 
  .addCase("updateCompanyRequest", (state, action) => {
    state.loading=true; 
  })
  .addCase("updateCompanySuccess", (state, action) => {
    state.loading=false;
    state.message=action.payload;
  })
  .addCase("updateCompanyFail", (state, action) => {
    state.loading=false;
    state.error = action.payload; 
  })
  .addCase("loadCompanyRequest", (state, action) => {
    state.loading=true; 
  })
  .addCase("loadCompanySuccess", (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.company = action.payload;
  })
  .addCase("loadCompanyFail", (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  })
    .addCase("categoryWiseRequest", (state, action) => {
      state.loading = false;
      state.allreels = action.payload;
    })
    .addCase("categoryWiseSuccess", (state, action) => {
      state.loading = false;
      state.allreels = action.payload;
    })
    .addCase("categoryWiseFailure", (state, action) => {
      state.loading = false;
      state.allreels = action.payload;
    })
    .addCase('ReellikeRequest', (state) => {
      state.loading = true;
    })
    .addCase('ReellikeSuccess', (state) => {
      state.loading = false;
    }).addCase('ReellikeRequestFailure', (state) => {
      state.loading = false
    }).addCase('ReeldislikeRequest', (state) => {
      state.loading = true;
    })
    .addCase('ReeldislikeSuccess', (state) => {
      state.loading = false;
    }).addCase('ReeldislikeRequestFailure', (state) => {
      state.loading = false
    })
    .addCase('otheruserlikes',(state) =>{
      state.loading=true;
    }).
    addCase('otherUselikesSuccess',(state,action)=>{
      
        state.loading=false;
        state.checks=action.payload;
    
    }).addCase('otherUselikesFail',(state,action)=>{
      state.loading=false;
      state.checks=action.payload;
     
    }).
    addCase('otheruserlikespost',(state)=>{
      state.loading = true;
    }).
    addCase('otherUselikespostSuccess',(state,action)=>{
      state.loading=false;
      state.like=action.payload;

    }).
    addCase('otherUselikespostFail',(state,action)=>{
      state.loading=false;
      state.like=action.payload;
    }).
    addCase('otheruserdislikespost',(state)=>{
      state.loading = true;
    }).
    addCase('otherUsedislikespostSuccess',(state,action)=>{
      state.loading=false;
      state.like=action.payload;

    }).
    addCase('otherUserdislikespostFail',(state,action)=>{
      state.loading=false;
      state.like=action.payload;
    }).addCase('otherUserfollowit',(state,action)=>{
      state.loading= true;
    }).addCase('otherUserfollowitSuccess',(state,action)=>{
      state.loading=false;
    }).addCase('otherUserfollowitFail',(state,action)=>{
      state.loading=false;
    }).addCase('otherUserunfollowit',(state,action)=>{
      state.loading= true;
    }).addCase('otherUserunfollowitSuccess',(state,action)=>{
      state.loading=false;
    }).addCase('otherUserunfollowitFail',(state,action)=>{
      state.loading=false;
    })
  builder.addCase("clearError", (state) => {
    state.error = null;
  });
  builder.addCase("clearMessage", (state) => {
    state.message = null;
  });
});
// builder
//   .addCase("allReelsRequest", (state, action) => {
//     state.loading = true;
//   })
//   .addCase("allReelsSuccess", (state, action) => {
//     state.loading = false;
//     state.allreels = action.payload;
//   })
//   .addCase("allReelsFailure", (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   });
